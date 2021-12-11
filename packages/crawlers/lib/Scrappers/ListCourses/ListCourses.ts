import { ICrawlerFetch } from "@ava-pro/shared/lib/Interfaces/ICrawlerFetch"
import { routes } from "../../routes"
import { extractPageCourses } from "./extractPageCourses"

export const ListCourses = (crawlerFetch: ICrawlerFetch) => async () => {
  const response = await crawlerFetch({ url: routes.myTabOverviewCourses() })

  if (response.redirected) {
    throw new Error()
  }

  const pageContent = await response.text()

  return extractPageCourses(pageContent)
}
