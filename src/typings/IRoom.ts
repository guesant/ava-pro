export type IRoomCourseMeta = {
  pinned?: boolean;
};

export type IRoomCourse<T = IRoomCourseMeta> = {
  meta?: T;
  url: string;
  name: string;
  courseId: string;
  lastVisitAt: number;
};

export type IRoom = {
  url: string;
  name: string;
  coursesCache: IRoomCourse[];
};
