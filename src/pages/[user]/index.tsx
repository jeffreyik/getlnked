import { supabase } from '@/utils/supabaseClient';
import {
    GetServerSideProps,
 } from 'next'

import { ParsedUrlQuery } from 'querystring';

interface Params extends ParsedUrlQuery {
    user: string
}

interface UserData {
    username: string
}

interface User {
    userData: UserData,
}

 const Page = ({userData}: User) => {
    console.log(userData)
    return (
        <>
            <div>user</div>
            <div>{ userData?.username }</div>
        </> 
     );
 }

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { user } = context.params as Params
    const { data: userData, error } = await supabase
        .from('profiles')
        .select('*')
        .eq("username", user.toLocaleLowerCase())
        .single()

        if (!userData || error) {
            return {
                redirect: {
                    destination: "/404",
                    permanent: false,
                }
            }
        }

    return {
        props: {
            userData
        }
    }
}

export default Page;