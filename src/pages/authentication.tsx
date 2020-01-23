import React from "react";
import {Firebase} from "../firebase/firebase.config";
import firebase from "firebase";

export const SignUp: React.FC = () => {
    return <div>
        Signing Up :)
    </div>
};

export const SignIn: React.FC = () => {
    return <div>
        <button onClick={() => Firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(console.log)}>
            Sign in
        </button>
    </div>
};
