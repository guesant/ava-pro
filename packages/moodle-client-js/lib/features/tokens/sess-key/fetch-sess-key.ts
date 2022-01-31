import { MoodleClient } from "../../../MoodleClient"
import { routes } from "../../../routes"
import { extractSessKeyFromPage } from "./extract-sess-key-from-page"

export const fetchSessKey = async (client: MoodleClient) => {
  const pageContent = await client
    .http({
      url: routes.my(),
      options: { method: "get" }
    })
    .then((res) => res.text())

  return extractSessKeyFromPage(pageContent)
}
