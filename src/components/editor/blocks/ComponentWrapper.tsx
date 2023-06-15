import { AppContext } from '@/context/AppContext'
import React, { MouseEvent, MouseEventHandler, ReactNode, useContext } from 'react'

interface Wrapper {
    children: ReactNode,
    id: string | undefined,
}

const ComponentWrapper = ({ children, id }: Wrapper) => {
    const { template, setSelectedComponent }: any = useContext(AppContext)

 const selectComponent = (id: string | undefined) => {
    const component = template.find((component: any) => component.id === id)
    setSelectedComponent(component)
 }

  return (
    <div onClick={() => selectComponent(id)}>{ children }</div>
  )
}

export default ComponentWrapper