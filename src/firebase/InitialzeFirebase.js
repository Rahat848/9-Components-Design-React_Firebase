import firebaseConfig from "./Firebase.config";
import {initializeApp} from "firebase/app";

const InitialzeFirebase = () => {
   
    initializeApp(firebaseConfig);
};

export default InitialzeFirebase;