import { useContext, useState, useEffect } from 'react'
import { AppContext } from "@/context/AppContext"
import { nanoid } from "nanoid"
import { components } from "@/componentConfig"
import Block from "./Block"

const BlocksTab = () => {
    const { template, setTemplate, selectedComponent, setSelectedComponent, setCurrentTab }: any = useContext(AppContext)

    const addComponent = ((config: any) => {
        const newConfig = { ...config, id: nanoid() }
        if (selectedComponent?.type === 'container') {
            const newState = template?.map((component: any) => {
                if(component?.id === selectedComponent?.id) {
                    return { ...component, 
                        children: component.children === null ? [newConfig] : [...component.children, newConfig]
                    }
                } else {
                    return component
                }
            })
            setTemplate(newState)
            setSelectedComponent(newConfig)
        } else {
            setTemplate([...template, newConfig])
            setSelectedComponent(newConfig)
        }
        setCurrentTab('edit')
        console.log(template)
    })

    return ( 
        <div className="grid grid-cols-3 gap-2 pt-4">
            { components.map((component: any) => (
                <Block handleClick={() => addComponent(component?.config)} key={component.name} name={component.name}>
                    { component.icon }
                </Block>
            )) } 
        </div>
     );
}
 
export default BlocksTab;