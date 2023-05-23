import { supabase } from '@/supabase';
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
        .from('users')
        .select('*')
        .eq("username", user)
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

// export const getStaticProps: GetStaticProps = async (context) => {
//     const { user } = context.params as Params
//     const { data, error } = await supabase
//       .from('users')
//       .select('*')
//     const userData = data?.find(singleUser => singleUser.username === user)

//     if (!userData) {
//         return {
//             props: {},
//             notFound: () => <h1>Page not found</h1>
//         }
//     }

//     return { 
//         props: {
//             userData
//         }
//     }
// }

// export const getStaticPaths = async () => {
//     const { data, error } = await supabase
//       .from('users')
//       .select('*')

//       const paths = data?.map(user => {
//         return {
//             params: { user : user.username }
//         }
//       })

//       return {
//         fallback: true,
//         paths,
//     }
// }
  
 export default Page;