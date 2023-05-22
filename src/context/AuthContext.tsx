import React, { createContext, useState } from "react";

export interface AuthInterface {
    username: string,
    setUsername: (username: string) => void
}

type Layout = {
    children: React.ReactNode,
}

export const AuthContext = createContext<AuthInterface | null>(null)

export const AuthProvider = ({ children }: Layout) => {
    const [username, setUsername] = useState('')

    return (
        <AuthContext.Provider value={{username, setUsername}}>
            { children }
        </AuthContext.Provider>
    )
}