import { MoodleClient } from "../../../MoodleClient"
import { routes } from "../../../routes"

export const logout = async (client: MoodleClient) => {
  const sesskey = await client.sessKey

  if (sesskey) {
    await client.http({
      url: routes.logout({ sesskey })
    })
  }
}
