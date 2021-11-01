import StorageRoomsService from "../../services/StorageRoomsService";

export const handlePageLogin = async (url: string) => {
  const hasLoginErrors = document.querySelectorAll(".loginerrors").length > 0;

  const room = await StorageRoomsService.find(url);

  if (room) {
    const {
      credentials: { username, password, isAutoLoginEnabled },
    } = room;

    const form = document.querySelector("#login") as HTMLFormElement;

    const inputUsername = form.querySelector("#username") as HTMLInputElement;

    const inputPassword = form.querySelector("#password") as HTMLInputElement;

    inputUsername.value = username;
    inputPassword.value = password;

    if (
      isAutoLoginEnabled &&
      !hasLoginErrors &&
      username.length > 0 &&
      password.length > 0
    ) {
      form.submit();
    }
  }
};
