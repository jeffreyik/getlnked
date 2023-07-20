import React from "react"
import { KeysToComponentMap } from "@/componentConfig"
import ComponentWrapper from "./blocks/ComponentWrapper";
import { RenderInterface, StyleInterface } from "@/interfaces/interfaces";

const stylesMap = (styles: [StyleInterface]) => {
  let mappedStyles: StyleInterface = {};
  styles.forEach(({ name, value }: StyleInterface) => {
    if (name) {
      mappedStyles[name as keyof typeof mappedStyles] = value
    }
  })
  return mappedStyles
}

export const renderer = (config: RenderInterface) => {

  if (typeof KeysToComponentMap[config.component as keyof typeof KeysToComponentMap] !== 'undefined')
    return (
      <ComponentWrapper id={config?.id} key={config?.id}>
         {React.createElement(
            KeysToComponentMap[config.component as keyof typeof KeysToComponentMap],
            {
              id: config.id,
              logo: config.logo,
              navLinks: config.navLinks,
              key: config.id,
              text: config.text,
              link: config.link,
              className: config.className ? config.className : null,
              url: config.url,
              src: config.src,
              style: config.styles ? stylesMap(config.styles) : null
            },
              config.children &&
                (typeof config.children === "string"
                  ? config.children || config.text
                  : config.children?.map((c: RenderInterface) => renderer(c)))
      )}
      </ComponentWrapper>
    )
   
  }