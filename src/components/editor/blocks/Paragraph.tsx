import { ReactNode } from 'react'
import ComponentWrapper from './ComponentWrapper'

interface paragraph {
    id?: string | undefined,
    className?: string | undefined,
    children?: ReactNode | string | null,
    style?: {} | undefined
}

const Paragraph = ({ id, className, children, style }: paragraph) => {
    return (
        <ComponentWrapper id={id}>
            <p className={className} style={style}>{ children }</p>
        </ComponentWrapper>
    )
}

export default Paragraph