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
import HeroIcon from "./components/editor/sidebar/blockIcons/HeroIcon"
import HeroBlock from "./components/editor/blocks/HeroBlock"
import NavIcon from "./components/editor/sidebar/blockIcons/NavIcon"
import NavBlock from "./components/editor/blocks/NavBlock"

export const KeysToComponentMap: {} = {
  "heading block": Heading,
  "link block": LinkBtn,
  "image block": ImgBlock,
  "paragraph block": Paragraph,
  "youtube block": Youtube,
  "section block": Section,
  "div block": Box,
  "grid block": GridBlock,
  "button block": BtnBlock,
  "Hero section": HeroBlock,
  'nav block': NavBlock,
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
  },
  {
    name: 'Navbar',
    icon: NavIcon,
    category: 'Layout',
    config: {
      "id": nanoid,
      "component": 'nav block',
      "logo": "Logo",
      "navLinks": ['Home', 'About Us', 'Blog']
    }
  },
  {
    name: 'Hero',
    icon: HeroIcon,
    category: 'Layout',
    config: {
      "id": nanoid(),
      "component": "Hero section",
      "children": [
        {
            "id": nanoid(),
            "component": "div block",
            "type": "container",
            "children": [
                {
                  "id": nanoid(),
                  "className": "text-[48px] font-bold",
                  "component": "heading block",
                  "text": "This should contain the heading text",
                  "type": "heading",
                  "editable": ['text']
            },
              {
                  "id": nanoid(),
                  "text": "This should contain the sub heading text or paragraph",
                  "className": "",
                  "type": "paragraph",
                  "component": "paragraph block",
                  "editable": ["text"]
              },
              {
                "id": nanoid(),
                "component": "button block",
                "text": "Get Started",
                "editable": ["text"],
                "styles": [
                  {
                    "name": "backgroundColor",
                    "value": "black"
                  }
                ]
              }
            ],
            "editable": ["children"]
        },
        {
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
      ],
      "type": "container",
      "editable": ["children"]
    }
  }
]