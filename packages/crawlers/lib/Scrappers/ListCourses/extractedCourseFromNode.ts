import { IExtractedCourseSlim } from "@ava-pro/shared/lib/Interfaces/IExtractedCourseSlim"
import { Element } from "domhandler"
import { getAttributeValue, innerText } from "domutils"
import normalizeUrl from "normalize-url"
import { getCourseIdFromURL } from "../getCourseIdFromURL"

export const extractedCourseFromNode = (
  node: Element
): IExtractedCourseSlim => {
  const name = innerText(node).trim()
  const url = normalizeUrl(getAttributeValue(node, "href") ?? "#")
  const courseId = getCourseIdFromURL(url)!
  return { name, url, courseId }
}
