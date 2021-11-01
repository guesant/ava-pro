import { RuntimeMessage } from "./RuntimeMessage";
import { RuntimeMessageType } from "./RuntimeMessageType";

export const addRuntimeMessageListener = <Payload>(
  type: RuntimeMessageType,
  callback: (payload: Payload) => void
) => {
  const handler = (message: RuntimeMessage | any) => {
    if (message.type === type) {
      return callback(message.payload);
    }
  };

  browser.runtime.onMessage.addListener(handler);

  return () => {
    browser.runtime.onMessage.removeListener(handler);
  };
};
