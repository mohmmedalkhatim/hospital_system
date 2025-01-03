import { createContext, ReactElement, SetStateAction, useState } from "react"

type user = {
    name: string | null,
    gmail: string | null,
    token: string | null
}
export type Authincation = {
    Auth: user | undefined,
    setAuth: React.Dispatch<SetStateAction<user | undefined>>
}
const authincation: Authincation = {
    Auth: {
        name: null,
        gmail: null,
        token: null
    },
    setAuth: function (value: SetStateAction<user | undefined>): void {
        console.log(value)
        throw new Error("Function not implemented.")
    }
}

export const auth = createContext(authincation)

type Children = {
    children: ReactElement | ReactElement[]
}

const Authprovider = ({ children }: Children) => {
    const [Auth, setAuth] = useState<user>()
    return (
        <auth.Provider value={{ Auth, setAuth }}>
            {children}
        </auth.Provider>
    )
}
export default Authprovider