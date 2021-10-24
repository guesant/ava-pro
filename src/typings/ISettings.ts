export enum CoursesOrderBy {
  NAME,
  LAST_VISIT,
}

export enum DetectedRoomResponse {
  NONE,
  ACCEPTED,
  REJECTED,
}

export type IDetectedRoom = {
  url: string;
  name: string;
  response: DetectedRoomResponse;
};

export type ISettings = {
  selectedRoom: string | null;
  courses: {
    orderBy: CoursesOrderBy;
  };

  detectedRooms: IDetectedRoom[];
};
