import { FiChevronDown, FiImage } from "react-icons/fi"
import { useContext, useEffect, useState } from 'react'
import Edit from "./Edit"
import { AppContext } from "@/context/AppContext"
import { selectClasses } from "@mui/material"
import ImageIcon from "../sidebar/blockIcons/ImageIcon"
import Width from "../editControllers/size/Width"

const EditImage = () => {
  const { setTemplate, template, selectedComponent }: any = useContext(AppContext)
  const [imageUrl, setImageUrl] = useState()
  
  const handleClick = () => {
    const fileInput = document.createElement('input')
    fileInput.type = 'file'

    fileInput.addEventListener('change', (event: any) => {
      const file = event.target.files[0]
      const reader = new FileReader()

      reader.onload = (e: any) => {
        const uploadImageUrl = e.target.result
        setImageUrl(uploadImageUrl)
        addImageToState(uploadImageUrl)
      }
      reader.readAsDataURL(file)
    })

    fileInput.click()
  }

  const addImage = (objects: any, parent: any, image?: any) => {
    return objects?.map((item: any) => {
      if (item?.id === parent.id) {
        return { ...item, url: image }
      }
      else if (item.children && item.children.length > 0) {
        item.children = addImage(item.children, parent, image)
    }
    return item
    })

  }

  const addImageToState = (image: any) => {
    const newState = addImage(template, selectedComponent, image)
    setTemplate(newState)
  }

  return (
      <div onClick={handleClick} style={{backgroundImage: `url(${selectedComponent?.url})`}} className="w-full h-[134px] mt-4 cursor-pointer hover:bg-[#eaeaea] rounded-[10px] bg-[#dfdfdf] bg-gradient-to-l flex flex-col items-center justify-center bg-center bg-cover">
        <FiImage />
        <p>Add image</p>
      </div>
  )
}

export default EditImage