import { useContext } from "react"
import { auth, Authincation } from "../context/Authprovider"



export const useAuth = (): Authincation => {
    return useContext(auth)
}