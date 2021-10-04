import { useCallback, useMemo } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import { IRoomCourse } from "../../../../../typings/IRoom";
import { CoursesOrderBy } from "../../../../../typings/ISettings";
import { SettingsContext } from "../../../Hooks/SettingsContext";
import { ViewRoomContext } from "./ViewRoomContext";

type IViewRoomCourses = {
  courses: IRoomCourse[];
};

export const ViewRoomCoursesContext = createContext({} as IViewRoomCourses);

const useRoomCourses = () => {
  const room = useContextSelector(ViewRoomContext, ({ room }) => room);
  const courses = useMemo(() => room?.coursesCache || [], [room?.coursesCache]);
  return courses;
};

export const ViewRoomCoursesContextProvider: React.FC = ({ children }) => {
  const roomCourses = useRoomCourses();

  const orderBy = useContextSelector(
    SettingsContext,
    ({
      settings: {
        courses: { orderBy },
      },
    }) => orderBy
  );

  const sortFn = useCallback(
    (a: IRoomCourse, b: IRoomCourse) => {
      switch (orderBy) {
        case CoursesOrderBy.LAST_VISIT: {
          return b.lastVisitAt - a.lastVisitAt;
        }
        case CoursesOrderBy.NAME: {
          return a.name.localeCompare(b.name);
        }
      }
    },
    [orderBy]
  );

  const courses = useMemo(
    () => Array.from(roomCourses).sort(sortFn),
    [sortFn, roomCourses]
  );

  return (
    <ViewRoomCoursesContext.Provider value={{ courses }}>
      {children}
    </ViewRoomCoursesContext.Provider>
  );
};
