import { RuntimeMessageType } from "./RuntimeMessageType";

export type GenericRuntimeMessage<
  Payload = any,
  Type extends RuntimeMessageType = RuntimeMessageType
> = {
  type: Type;
  payload: Payload;
};
