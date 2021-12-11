import { strcmp } from "@ava-pro/shared/lib/Utils/strcmp"
import { selectAll } from "css-select"
import { Document, Element } from "domhandler"
import { parseDocument } from "htmlparser2"
import { extractedCourseFromNode } from "./extractedCourseFromNode"

export const extractCourses = (data: string, baseSelector: string = "") => {
  const dom = parseDocument(data, {})

  const links = selectAll<Document, Element>(
    `${baseSelector} #pc-for-in-progress .course-info-container a`.trim(),
    dom
  )

  return links
    .map(extractedCourseFromNode)
    .sort((a, b) => strcmp(a.name, b.name))
}
