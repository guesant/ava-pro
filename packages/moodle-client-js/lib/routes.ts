import { Ruty } from "ruty"

const { route } = Ruty.configure()

export const routes = {
  home: route("/").build(),

  login: route("/login/index.php").build(),

  logout: route("/login/logout.php?sesskey").build<{ sesskey: string }>(),

  ajax: route("/lib/ajax/service.php").build(),

  course: route("/course/view.php?id").build<{ id: string | number }>(),

  my: route("/my/").build()
}
