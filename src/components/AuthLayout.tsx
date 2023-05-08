type Layout = {
    children: React.ReactNode,
}

const AuthLayout = ({ children }: Layout) => {
    return ( 
        <main>{ children }</main>
     );
}
 
export default AuthLayout;