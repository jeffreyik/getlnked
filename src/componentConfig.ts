import { FiLink } from "react-icons/fi"
import { FiYoutube } from "react-icons/fi"
import { FiMousePointer } from "react-icons/fi"
import { FiCreditCard } from "react-icons/fi"
import { FiTwitter} from "react-icons/fi"
import { FiImage } from "react-icons/fi"
import { FaHeading } from "react-icons/fa"
import { MdOutlineTextFields } from "react-icons/md"
import { nanoid } from "nanoid"
import Heading from "./components/editor/blocks/Heading"
import LinkBtn from "./components/editor/blocks/LinkBtn"
import ImgBlock from "./components/editor/blocks/ImgBlock"
import Paragraph from "./components/editor/blocks/Paragraph"
import Youtube from "./components/editor/blocks/Youtube"
import Section from "./components/editor/blocks/Section"
import Box from "./components/editor/blocks/Box"

export const KeysToComponentMap: any = {
  "heading block": Heading,
  "link block": LinkBtn,
  "image block": ImgBlock,
  "paragraph block": Paragraph,
  "youtube block": Youtube,
  "section block": Section,
  "div block": Box,
}

export const components = [
  {
    name: 'Heading',
    icon: FaHeading,
    config: {
        "id": nanoid(),
        "className": "text-[48px] font-bold",
        "component": "heading block",
        "text": "Heading",
        "editable": ['text']
    } 
  },
  {
    name: 'Text',
    icon: MdOutlineTextFields,
    config: {
      "id": nanoid(),
      "text": "Paragraph",
      "className": "",
      "component": "paragraph block",
      "editable": ["text"]
  }
  },
  {
    name: 'Image',
    icon: FiImage, 
    config: {
      "id": nanoid(),
      "url": "https://joadre.com/wp-content/uploads/2019/02/no-image.jpg",
      "component": "image block",
      "editable": ["url"]
    },
  },
  {
    name: 'Youtube',
    icon: FiYoutube,
    config: {
      "id": nanoid(),
      "component": "youtube block",
      "children": null,
      "src": "https://www.youtube.com/embed/YLMtypDhXXI",
      "editable": ["src"]
  }
  },
  {
    name: 'Section',
    icon: FiCreditCard,
    config: {
      "id": nanoid(),
      "component": "section block",
      "children": null,
      "type": "container",
      "editable": ["children"]
  }
  },
  {
    name: 'box',
    icon: FiCreditCard,
    config: {
      "id": nanoid(),
      "component": "div block",
      "type": "container",
      "children": null,
      "editable": ["children"]
  }
  }
]