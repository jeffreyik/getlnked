import { ReactNode } from 'react'
import ComponentWrapper from './ComponentWrapper'

interface paragraph {
    id?: string | undefined,
    className?: string | undefined,
    text?: string | null,
    style?: {} | undefined
}

const Paragraph = ({ id, className, text, style }: paragraph) => {
    return (
        <ComponentWrapper id={id}>
            <p className={className} style={style}>{ text }</p>
        </ComponentWrapper>
    )
}

export default Paragraph