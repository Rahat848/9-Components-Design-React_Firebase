import  {useState } from 'react';
import InitialzeFirebase from '../firebase/InitialzeFirebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

InitialzeFirebase()
const auth = getAuth();

const Usefirebase = () => {
const googleprovider = new GoogleAuthProvider();

const [user,setUser] = useState([])
const googleHandaler = ()=>{
    signInWithPopup(auth, googleprovider)
    .then(result => {
        const user = result.user;
        setUser(user)
    })
}
const googleLogout = ()=>{
    localStorage.removeItem('token-info');
    setUser(false)
}

    return{user,googleHandaler,googleLogout}
};

export default Usefirebase;