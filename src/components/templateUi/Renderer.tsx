import React, { useContext } from "react"
import Heading from "../editor/blocks/Heading"
import LinkBtn from "../editor/blocks/LinkBtn"
import { AppContext } from "@/context/AppContext"
import ImgBlock from "../editor/blocks/ImgBlock"
import Paragraph from "../editor/blocks/Paragraph"
import Youtube from "../editor/blocks/Youtube"

const KeysToComponentMap: any = {
  "heading block": Heading,
  "link block": LinkBtn,
  "image block": ImgBlock,
  "paragraph block": Paragraph,
  "youtube block": Youtube,
}

export const renderer = (config: any) => {

  if (typeof KeysToComponentMap[config.component] !== 'undefined')
    return React.createElement(
      KeysToComponentMap[config.component],
      {
        id: config.id,
        key: config.id,
        text: config.text,
        link: config.link,
        className: config.className ? config.className : null,
        url: config.url,
        src: config.src,
      },
        config.children &&
          (typeof config.children === "string"
            ? config.children
            : config.children.map((c: any) => renderer(c)))
      )
  }