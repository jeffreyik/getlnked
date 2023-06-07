import React, { useContext } from "react"
import Heading from "../editor/blocks/Heading"
import LinkBtn from "../editor/blocks/LinkBtn"
import { AppContext } from "@/context/AppContext"
import ImgBlock from "../editor/blocks/ImgBlock"

const KeysToComponentMap: any = {
  "heading block": Heading,
  "link block": LinkBtn,
  "image block": ImgBlock,
}

export const renderer = (config: any) => {
  const { selectedComponent }: any = useContext(AppContext)

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
        style: {
          border: selectedComponent?.id === config.id && '1px solid #5880BE'
        }
      },
        config.children &&
          (typeof config.children === "string"
            ? config.children
            : config.children.map((c: any) => renderer(c)))
      )
  }