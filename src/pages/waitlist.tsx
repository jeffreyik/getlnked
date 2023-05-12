import InputField from "@/components/forms/InputField";
import axios from "axios";
import Image from "next/image";
import { useWindowSize } from "react-use";
import Link from "next/link";
import Confetti from 'react-confetti'
import { ChangeEvent, useState } from "react";
import Modal from "@/components/Modal";

const Waitlist = () => {
  const {width, height} = useWindowSize()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [hasJoinedWaitlist, setHasJoinedWaitlist] = useState(false)

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
          htmlContent: `<!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charhttp://img.mailinblue.com/6059027/images/645ba6199b386_1683727897.png="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">
            <title>Thank You for Joining our Waitlist!</title>
            <style>
              /* Add your custom styles here */
            body {
             font-family: 'Poppins', sans-serif;
          }
          
             .banner {
                  width: 100%;
                  height: 32px;
                  object-fit: cover;
          }
            </style>
          </head>
          <body>
          <img src="http://img.mailinblue.com/6059027/images/645ba6199b386_1683727897.png" class="banner" alt="getlnked banner">
            <div>
              <img src="http://img.mailinblue.com/6059027/images/645ba501b00b1_1683727617.png" alt="getlnked logo" style="max-width: 100%; height: auto;">
          <p>Hey ${name}</p>
          <h1>Welcome to the Waitlist!</h1>
            <p>We're so excited to have you join our waitlist. We're still working on some final details, but we'll be sure to keep you updated on our progress.</p>
            <p>In the meantime, we'd love for you to join our WhatsApp community. This is a great way to stay connected with us and also contribute to our project. You can join the community by clicking the link below.</p>
            <a href="https://chat.whatsapp.com/C5t6UsN7BYuHTCgnWlCAya">Join the WhatsApp Community</a>
            <p>Thank you for your interest in our product! We'll be in touch soon.</p>
            </div>
          </body>
          </html>
          `,
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
            setHasJoinedWaitlist(true)
            setError(null)
            console.log(response.data);
          })
          .catch(function (error) {
            setLoading(false)
            setHasJoinedWaitlist(false)
            setError(error)
            console.error(error);
          });
          setHasJoinedWaitlist(false)
          setName('')
          setEmail('')
    }

    return ( 
        <div className="flex flex-col items-center h-screen mx-auto max-w-[70em] w-[90%]">
        {/* <Modal text="Congratulations on joining the waitlist" toggleModal={hasJoinedWaitlist} /> */}
          {hasJoinedWaitlist && <Confetti className="relative z-20" width={width} height={height} recycle={false} />}
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