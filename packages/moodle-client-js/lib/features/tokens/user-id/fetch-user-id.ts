import { MoodleClient } from "../../../MoodleClient"
import { routes } from "../../../routes"
import { extractUserIdFromPage } from "./extract-user-id-from-page"

export const fetchUserId = async (client: MoodleClient) => {
  const pageContent = await client
    .http({
      url: routes.my(),
      options: { method: "get" }
    })
    .then((res) => res.text())

  return extractUserIdFromPage(pageContent)
}
