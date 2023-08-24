import { useContext } from "react"
import { Authcontext } from "./Authprovider"


const UseAuth =()=>{
    return useContext(Authcontext)
}

export default UseAuth;