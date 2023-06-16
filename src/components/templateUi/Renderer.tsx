import React from "react"
import { KeysToComponentMap } from "@/componentConfig"

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
            ? config.children | config.text
            : config.children.map((c: any) => renderer(c)))
      )
  }