export enum MessagePosition {
  LEFT = "left",
  RIGHT = "right"
}

export type IMessageAreaMessage = {
  id: number
  useridfrom: number
  useridto: number
  text: string
  displayblocktime: boolean
  blocktime: string
  position: MessagePosition
  timesent: string
  timecreated: number
  isread: boolean
}
