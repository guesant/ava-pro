import StorageRoomsService from "../../services/StorageRoomsService";

export const handlePageCourse = async (url: string) => {
  await StorageRoomsService.updateCourseLastVisit(url);
};
