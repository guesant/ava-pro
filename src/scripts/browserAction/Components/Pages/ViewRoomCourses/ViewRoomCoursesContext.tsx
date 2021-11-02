import Fuse from "fuse.js";
import { useCallback, useEffect, useMemo, useState } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import { IRoomCourse } from "../../../../../typings/IRoom";
import { CoursesOrderBy } from "../../../../../typings/ISettings";
import { SettingsContext } from "../../../Hooks/SettingsContext";
import { ViewRoomContext } from "../ViewRoom/ViewRoomContext";
import { ViewRoomAuthedContext } from "../ViewRoom/ViewRoomAuthedContext";
import StorageRoomsService from "../../../../../services/StorageRoomsService";

const useRoomCourses = () => {
  const isLoggedIn = useContextSelector(
    ViewRoomAuthedContext,
    ({ isLoggedIn }) => isLoggedIn
  );

  const room = useContextSelector(ViewRoomContext, ({ room }) => room);

  const courses = useMemo(() => room?.coursesCache || [], [room?.coursesCache]);

  useEffect(() => {
    if (isLoggedIn && room) {
      StorageRoomsService.fetchCourses(room.url);
    }
  }, [isLoggedIn, room?.url]);

  return courses;
};

const sortByPinState = (a: IRoomCourse, b: IRoomCourse) =>
  Number(Boolean(b.meta?.pinned)) - Number(Boolean(a.meta?.pinned));

type IViewRoomCourses = {
  courses: IRoomCourse[];
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

export const ViewRoomCoursesContext = createContext({} as IViewRoomCourses);

const useSortByOrderFn = () => {
  const orderBy = useContextSelector(
    SettingsContext,
    ({
      settings: {
        courses: { orderBy },
      },
    }) => orderBy
  );

  const sortByOrderFn = useCallback(
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
  return sortByOrderFn;
};

const useFilterFnForCourses = () => {
  const fuse = useMemo(
    () => new Fuse<IRoomCourse>([], { threshold: 0.23, keys: ["name"] }),
    []
  );

  const filterFnForCourses = useCallback(
    (courses: IRoomCourse[]) => {
      fuse.setCollection(courses);
      return (searchText: string) => {
        const pattern = searchText.trim();
        return pattern.length > 0
          ? fuse.search(pattern).map((i) => i.item)
          : courses;
      };
    },
    [fuse]
  );

  return filterFnForCourses;
};

export const ViewRoomCoursesContextProvider: React.FC = ({ children }) => {
  const [searchText, setSearchText] = useState("");

  const roomCourses = useRoomCourses();
  const sortByOrderFn = useSortByOrderFn();
  const filterFnForCourses = useFilterFnForCourses();

  const sortedCourses = useMemo(
    () => Array.from(roomCourses).sort(sortByOrderFn).sort(sortByPinState),
    [roomCourses, sortByOrderFn]
  );

  const filterFn = useMemo(
    () => filterFnForCourses(sortedCourses),
    [filterFnForCourses, sortedCourses]
  );

  const courses = useMemo(() => filterFn(searchText), [filterFn, searchText]);

  return (
    <ViewRoomCoursesContext.Provider
      value={{ courses, searchText, setSearchText }}
    >
      {children}
    </ViewRoomCoursesContext.Provider>
  );
};
