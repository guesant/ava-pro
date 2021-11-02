import throttle from "lodash/throttle";
import { IRoom } from "../../typings/IRoom";
import { arrDiff } from "../../helpers/arrDiff";
import { IMessageAreaContact } from "../../typings/MoodleAPI/IMessageAreaContact";
import { CoreMessage_DataForMessageArea_Conversations } from "../../services/MoodleAPI/CoreMessage/DataForMessageArea/Conversations";
import { getRoomHTTP } from "../../services/MoodleAPI/getRoomHTTP";
import { fetchUserId } from "../../services/MoodleAPI/fetchUserId";
import { smartLogin } from "../../services/MoodleAPI/smartLogin";
import { makeUseOfSelectedRoom } from "../../services/makeUseOfSelectedRoom";
import { checkLogin } from "../../services/MoodleAPI/checkLogin";

export class FetchChatsUpdates {
  _fetchUpdates: () => void;
  selectedRoom: IRoom | null = null;

  private errorsCount = 0;
  private prevMessages: IMessageAreaContact[] = [];
  private notificationId: string | null = null;

  constructor() {
    this._fetchUpdates = throttle(this.fetchUpdates, 5 * 1000);
  }

  get keepFetchingUpdates() {
    return this.errorsCount < 2;
  }

  start = () => {
    makeUseOfSelectedRoom((room) => {
      this.setSelectedRoom(room);
    });
    setInterval(this._fetchUpdates, 3 * 60 * 1000);
  };

  setSelectedRoom = (room: IRoom | null) => {
    this.selectedRoom = room;
    this.errorsCount = 0;
    this._fetchUpdates();
  };

  clearNotification = async () => {
    this.notificationId &&
      (await browser.notifications.clear(this.notificationId));
    this.notificationId = null;
  };

  createNotification = async (
    unreadMessagesCount: number,
    unreadChatsCount: number
  ) => {
    if (unreadMessagesCount > 0) {
      this.notificationId = await browser.notifications.create({
        type: "basic",
        title: "Você possúi novas mensagens não lidas",
        message: `${unreadMessagesCount} mensagem(s) de ${unreadChatsCount} chat(s).`,
        iconUrl: (browser.extension as any).getURL("icons/icon.png"),
      });
    }
  };

  getUnreadCount = (contacts: IMessageAreaContact[]) => {
    const unreadChats = contacts.filter(({ isread }) => !isread);

    const unreadChatsCount = unreadChats.length;
    const unreadMessagesCount = unreadChats.reduce(
      (acc, i) => acc + (i.unreadcount || 0),
      0
    );

    return { unreadChatsCount, unreadMessagesCount };
  };

  handleMessages = async (contacts: IMessageAreaContact[]) => {
    const { removed } = arrDiff(this.prevMessages, contacts);

    if (removed.length) {
      await this.clearNotification();
    }

    const { unreadChatsCount, unreadMessagesCount } =
      this.getUnreadCount(contacts);

    if (unreadMessagesCount > 0) {
      await this.createNotification(unreadMessagesCount, unreadChatsCount);
    }

    this.prevMessages = contacts;
  };

  checkLoginStatus = async () => {
    let isLoggedIn = false;

    if (this.selectedRoom) {
      const {
        url,
        credentials: { isAutoLoginEnabled, password, username },
      } = this.selectedRoom;

      const http = getRoomHTTP(url);

      isLoggedIn = await checkLogin(http)();

      if (!isLoggedIn && isAutoLoginEnabled) {
        isLoggedIn = await smartLogin(http)(username, password);
      }
    }

    if (!isLoggedIn) {
      throw new Error();
    }
  };

  fetchUpdates = async () => {
    if (this.keepFetchingUpdates && this.selectedRoom) {
      try {
        await this.checkLoginStatus();

        const { url } = this.selectedRoom;
        const http = getRoomHTTP(url);
        const userid = (await fetchUserId(http)())!;

        const { contacts } = await CoreMessage_DataForMessageArea_Conversations(
          http
        )({
          userid,
        });

        await this.handleMessages(contacts);
      } catch (e) {
        this.handleError(e);
      }
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleError = (_error?: any) => {
    this.errorsCount++;
  };
}
