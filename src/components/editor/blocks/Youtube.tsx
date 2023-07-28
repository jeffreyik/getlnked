import { BlockInterface } from '@/interfaces/interfaces'

const Youtube = ({ id, src }: BlockInterface) => {
  return (
    <iframe className="rounded-[20px] w-full h-[250px]" src={src} />
  )
}

export default Youtube