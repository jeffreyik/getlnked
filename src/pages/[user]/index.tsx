import { renderer } from '@/components/Renderer';
import { supabase } from '@/utils/supabaseClient';
import {
    GetServerSideProps,
 } from 'next'
import { ParsedUrlQuery } from 'querystring';
import { useEffect } from 'react';

interface Params extends ParsedUrlQuery {
    user: string
}

interface UserData {
    username: string,
    template: []
}

interface User {
    userData: UserData,
}

 const Page = ({userData}: User) => {

    return (
        <>
           {userData?.template && <div>{userData?.template.map(component => renderer(component))}</div>}
           <div>Made with getlnked</div>
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