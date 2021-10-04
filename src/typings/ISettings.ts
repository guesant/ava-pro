export enum CoursesOrderBy {
  NAME,
  LAST_VISIT,
}

export type ISettings = {
  selectedRoom: string | null;
  courses: {
    orderBy: CoursesOrderBy;
  };
};
