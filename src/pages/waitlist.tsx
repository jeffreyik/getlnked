import InputField from "@/components/forms/InputField";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

const Waitlist = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const apiKey: string | undefined = process.env.NEXT_PUBLIC_BREVO_API_KEY

    const sendWelcomeEmail = () => {
      const options = {
        method: 'POST',
        url: 'https://api.brevo.com/v3/smtp/email',
        headers: {accept: 'application/json', 'content-type': 'application/json', 'api-key': apiKey ?? ''},
        data: {
          sender: { name: 'getlnked', email: 'getlnkedapp@gmail.com' },
          to: [{email: email, name: name}],
          htmlContent: `<!DOCTYPE html> <html> <body> <h1>Thank you for joining our waitlist</h1> <p>Hey ${name} thank you for joining our waitlist</p> <p>Feel free to join our <a href="#">whatsapp community<a/></p> </body> </html>`,
          subject: 'Thank you for joining our waitlist',
          replyTo: {email: 'getlnkedapp@gmail.com', name: 'getlnked'}
        }
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }

    const joinWaitlist = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        const options = {
          method: 'POST',
          url: 'https://api.brevo.com/v3/contacts',
          headers: {accept: 'application/json', 'content-type': 'application/json', 'api-key': apiKey ?? ''},
          data: {updateEnabled: false, email: email, listIds: [3], attributes: { FIRSTNAME: name }}
        };
        
        setLoading(true)
        axios
          .request(options)
          .then(function (response) {
            sendWelcomeEmail()
            setLoading(false)
            setError(null)
            console.log(response.data);
          })
          .catch(function (error) {
            setLoading(false)
            setError(error)
            console.error(error);
          });
          setName('')
          setEmail('')
    }

    return ( 
        <div className="flex flex-col items-center h-screen mx-auto max-w-[70em] w-[90%]">
            <Image className="absolute top-0 w-full h-[24px] object-cover" src="/cover2.png" width={1440} height={54} alt="banner" />
            <div className="max-w-[415px] mt-24 flex flex-col justify-center items-center">
                <Image className="mb-[27px]" src="/waitlistlogo.svg" width={106} height={107.57} alt="getlnked logo" />
                <h1 className="text-[24px] mb-[27px] text-neutralGray text-center font-medium lg:text-[36px]">Join the waitlist <span className="text-black">to get early access</span></h1>
                <form className="space-y-7" onSubmit={joinWaitlist}>
                    <InputField type="text" placeholder="Name" setValue={setName} value={name} />
                    <InputField type="email" placeholder="Email address" setValue={setEmail} value={email} />
                    {error && <div className="text-red-500 text-[14px]">Contact already exists</div>}
                    <button className="py-[15px] mt-[55px] neo w-full rounded-[10px] h-[49px]">{loading ? 'Loading...' : 'Join waitlist'}</button>
                </form>
                <Link href="https://chat.whatsapp.com/C5t6UsN7BYuHTCgnWlCAya" target="_blank" className="text-center text-[14px] mt-7 hover:underline">Join our whatsapp community</Link>
            </div>
        </div>
     );
}
 
export default Waitlist;