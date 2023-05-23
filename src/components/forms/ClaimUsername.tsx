import { AuthContext, AuthInterface } from "@/context/AuthContext";
import { supabase } from "@/supabase";
import { useRouter } from "next/router";
import { FC, MouseEvent, ChangeEvent, useState, useContext } from "react";
import Loader from "../Loader";

interface Props {
    text?: string;
    variant?: string;
    value: string;
    setValue: (name: string) => void
}

const ClaimUsername: FC<Props> = ({ text, variant, value, setValue }) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { setUsername } = useContext(AuthContext) as AuthInterface

  const goToWaitlist = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    router.push('/signup')
  }

  const checkIfUserExists = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setLoading(true)
    const { data, error } = await supabase
      .from("users")
      .select('username')

      const user = data?.find(user => user.username === value)

      if (value.includes(' ')) {
        setError('there appears to be space')
        console.log('space error')
        setLoading(false)
      } else {
        if (user === undefined) {
        setError('')
        console.log(error)
        setLoading(false)
        router.push('/signup')
        setUsername(value)
      } 
      else {
        setError('user exists')
        console.log(error)
        setLoading(false)
      }
      }

      


  }

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setValue?.(e.target.value)
  }

  if (variant === "secondary") return (
      <div className="px-[15px] text-[15px] flex items-center border-neutralGray border-[1px] rounded-[10px] max-w-full w-full h-[55px]">
          <p className="font-medium">getlnked/</p>
          <input value={value} onChange={handleChange} className="text-[15px] outline-none w-full" type="text" placeholder="Jeffrey" required />
          {loading ? <Loader /> : error ? <div>{error}</div> : '' }
      </div>
  )

  return (
    <form className="flex items-center sm:gap-4 w-full lg:w-[500px]">
        <div className="px-[15px] text-[15px] flex items-center border-black border-[1px] rounded-[10px] max-w-full w-[70%] h-[55px]">
            <p className="font-medium">getlnked/</p>
            <input value={value} onChange={handleChange} className="text-[15px] outline-none w-full" type="text" placeholder="Jeffrey" required />
            {loading ? <Loader /> : error ? <div>{error}</div> : '' }
        </div>
        <button onClick={checkIfUserExists} className="neo rounded-[10px] w-[30%] h-[55px]">{ text }</button>
    </form>
  )

}

export default ClaimUsername