import { FiYoutube } from "react-icons/fi"
import { nanoid } from "nanoid"
import Heading from "./components/editor/blocks/Heading"
import LinkBtn from "./components/editor/blocks/LinkBtn"
import ImgBlock from "./components/editor/blocks/ImgBlock"
import Paragraph from "./components/editor/blocks/Paragraph"
import Youtube from "./components/editor/blocks/Youtube"
import Section from "./components/editor/blocks/Section"
import Box from "./components/editor/blocks/Box"
import GridBlock from "./components/editor/blocks/GridBlock"
import BtnBlock from "./components/editor/blocks/BtnBlock"
import HeadingIcon from "./components/editor/sidebar/blockIcons/HeadingIcon"
import ParagraphIcon from "./components/editor/sidebar/blockIcons/ParagraphIcon"
import ImageIcon from "./components/editor/sidebar/blockIcons/ImageIcon"
import ButtonIcon from "./components/editor/sidebar/blockIcons/ButtonIcon"
import SectionIcon from "./components/editor/sidebar/blockIcons/SectionIcon"
import GridIcon from "./components/editor/sidebar/blockIcons/GridIcon"
import DivIcon from "./components/editor/sidebar/blockIcons/DivIcon"
import ContainerIcon from "./components/editor/sidebar/layersIcon/ContainerIcon"

export const KeysToComponentMap: any = {
  "heading block": Heading,
  "link block": LinkBtn,
  "image block": ImgBlock,
  "paragraph block": Paragraph,
  "youtube block": Youtube,
  "section block": Section,
  "div block": Box,
  "grid block": GridBlock,
  "button block": BtnBlock
}

export const components = [
  {
    name: 'Heading',
    icon: HeadingIcon,
    category: 'Basics',
    config: {
        "id": nanoid(),
        "className": "text-[48px] font-bold",
        "component": "heading block",
        "text": "Heading",
        "type": "heading",
        "editable": ['text']
    } 
  },
  {
    name: 'Paragraph',
    icon: ParagraphIcon,
    category: 'Basics',
    config: {
      "id": nanoid(),
      "text": "Paragraph",
      "className": "",
      "type": "paragraph",
      "component": "paragraph block",
      "editable": ["text"]
  }
  },
  {
    name: 'Image',
    icon: ImageIcon,
    category: 'Basics',
    config: {
      "id": nanoid(),
      "type": "image",
      "styles": [{
        "name": "width",
        "value": null
      },
      {
        "name": "height",
        "value": null,
      }],
      "url": "https://www.mbot.com/wp-content/uploads/2016/12/placeholder.png",
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
    icon: SectionIcon,
    category: 'Layout',
    layer: ContainerIcon,
    config: {
      "id": nanoid(),
      "component": "section block",
      "children": [],
      "type": "container",
      "editable": ["children"]
  }
  },
  {
    name: 'Div Block',
    icon: DivIcon,
    category: 'Layout',
    layer: ContainerIcon,
    config: {
      "id": nanoid(),
      "component": "div block",
      "type": "container",
      "children": [],
      "editable": ["children"]
  }
  },
  {
    name: 'Grid',
    icon: GridIcon,
    category: 'Layout',
    layer: ContainerIcon,
    config: {
      "id": nanoid(),
      "component": "grid block",
      "children": [],
      "type": "container",
      "editable": ["children"]
    }
  },
  {
    name: 'Button',
    icon: ButtonIcon,
    category: 'Basics',
    config: {
      "id": nanoid(),
      "component": "button block",
      "text": "label",
      "editable": ["text"],
      "styles": [
        {
          "name": "backgroundColor",
          "value": "black"
        }
      ]
    }
  }
]