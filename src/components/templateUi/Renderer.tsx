import React from "react"
import Heading from "../editor/blocks/Heading"

const KeysToComponentMap: any = {
  heading: Heading,
}

export const renderer = (config: any) => {
  if (typeof KeysToComponentMap[config.component] !== 'undefined')
    return React.createElement(
      KeysToComponentMap[config.component],
      {
        id: config.id,
        key: config.id,
        className: config.className ? config.className : null
      },
        config.children &&
          (typeof config.children === "string"
            ? config.children
            : config.children.map((c: any) => renderer(c)))
      )
  }
