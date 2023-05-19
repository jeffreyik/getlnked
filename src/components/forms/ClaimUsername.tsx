import { useRouter } from "next/router";
import { FC, MouseEvent, ChangeEvent } from "react";

interface Props {
    text?: string;
    variant?: string;
    value: string;
    setValue: (name: string) => void
}

const ClaimUsername: FC<Props> = ({ text, variant, value, setValue }) => {
  const router = useRouter()

  const goToWaitlist = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    router.push('/waitlist')
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue?.(e.target.value)
  }

  if (variant === "secondary") return (
      <div className="px-[15px] text-[15px] flex items-center border-neutralGray border-[1px] rounded-[10px] max-w-full w-full h-[55px]">
          <p className="font-medium">getlnked/</p>
          <input value={value} onChange={handleChange} className="text-[15px] outline-none w-full" type="text" placeholder="Jeffrey" />
      </div>
  )

  return (
    <form className="flex items-center sm:gap-4 w-full lg:w-[500px]">
        <div className="px-[15px] text-[15px] flex items-center border-black border-[1px] rounded-[10px] max-w-full w-[70%] h-[55px]">
            <p className="font-medium">getlnked/</p>
            <input value={value} onChange={handleChange} className="text-[15px] outline-none w-full" type="text" placeholder="Jeffrey" />
        </div>
        <button onClick={goToWaitlist} className="neo rounded-[10px] w-[30%] h-[55px]">{ text }</button>
    </form>
  )

}

export default ClaimUsername