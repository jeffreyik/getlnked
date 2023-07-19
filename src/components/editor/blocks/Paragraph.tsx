import { BlockInterface } from '@/interfaces/interfaces'

const Paragraph = ({ id, className, text, style }: BlockInterface) => {
    return (
        <p id={id} className={className} style={style}>{ text }</p>
    )
}

export default Paragraph