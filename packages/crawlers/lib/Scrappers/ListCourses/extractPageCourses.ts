import { IPageExtractedCourses } from "@ava-pro/shared/lib/Interfaces/IPageExtractedCourses"
import { extractCourses } from "./extractCourses"

enum SelectorsMyOverviewCourses {
  IN_PROGRESS = "#myoverview_courses_view_in_progress",
  FUTURE = "#myoverview_courses_view_future",
  PAST = "#myoverview_courses_view_past"
}

export const extractPageCourses = (data: string): IPageExtractedCourses =>
  ({
    PAST: extractCourses(data, SelectorsMyOverviewCourses.PAST),
    IN_PROGRESS: extractCourses(data, SelectorsMyOverviewCourses.IN_PROGRESS),
    FUTURE: extractCourses(data, SelectorsMyOverviewCourses.FUTURE)
  } as any)
