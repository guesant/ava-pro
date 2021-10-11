import { selectAll } from "css-select";
import { Document, Element } from "domhandler";
import { getAttributeValue, innerText } from "domutils";
import { parseDocument } from "htmlparser2";
import normalizeUrl from "normalize-url";
import MoodleRoutesService from "./MoodleRoutesService";
import { strcmp } from "../utils/strcmp";

class MoodleService {
  fetchRoomCourses = async (roomUrl: string) => {
    const normalizedRoomUrl = normalizeUrl(roomUrl, {
      removeTrailingSlash: true,
    });

    const data = await fetch(
      MoodleRoutesService.build(normalizedRoomUrl).courses()
    ).then((res) => res.text());

    return this.extractCourses(data);
  };

  extractCourses = (data: string) => {
    const dom = parseDocument(data, {});

    const coursesLinks = selectAll<Document, Element>(
      "#pc-for-in-progress .course-info-container a",
      dom
    );

    return coursesLinks
      .map((node) => ({
        name: innerText(node).trim(),
        url: normalizeUrl(getAttributeValue(node, "href") ?? "#"),
      }))
      .map(({ url, name }) => ({
        url,
        name,
        courseId: MoodleRoutesService.getCourseId(url),
      }))
      .sort((a, b) => strcmp(a.name, b.name));
  };
}

export default new MoodleService();
