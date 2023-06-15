import { nanoid } from "nanoid";

export const headingConfig =  {
  "id": nanoid(),
  "children": "Heading",
  "className": "text-3xl",
  "component": "heading-block"
}

        

// export const textConfig = {
//         "id": nanoid(),
//         "children": "Paragraph",
//         "className": "",
//         "component": "paragraph block",
//         "editable": ["children"]
//     }

// export const linkConfig = {
//         "id": nanoid(),
//         "link": null,
//         "text": "link",
//         "component": "link block",
//     }

// const imgConfig = {
//         "id": nanoid(),
//         "url": "https://joadre.com/wp-content/uploads/2019/02/no-image.jpg",
//         "component": "image block",
//         "editable": ["url"]
//     }