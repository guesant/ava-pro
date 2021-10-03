export enum CoursesOrderBy {
  NAME,
  LAST_VISIT,
}

export type ISettings = {
  courses: {
    orderBy: CoursesOrderBy;
  };
};
