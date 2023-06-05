import React from "react"

export const renderer = (config: any) => {
    return React.createElement(
        config.type,
        config.props,
        config.children &&
          (typeof config.children === "string"
            ? config.children
            : config.children.map((c: any) => renderer(c)))
      )
  }
