import React, { useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase-config'
import './SignUp.css'

function SignUp() {
    const [registerEmail, setregisterEmail] = useState(null)
    const [registerPassword, setregisterPassword] = useState(null)
    const [user, setuser] = useState(null)
    const registerUser = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            console.log(user);
        } catch (error) {
            console.log(error);
        }
    }

    onAuthStateChanged(auth, (currentUser) => {
        setuser(currentUser);
    })

    return (
        <div className="sign-up-page">
            <div className="sign-up-form-box">
                <>
                    <div className="form-group">
                        <label>Email <input type="email" class="form-control" placeholder="Enter email" onChange={(e) => setregisterEmail(e.target.value)} /></label>
                    </div>
                    <div className="form-group">
                        <label>Password <input type="password" class="form-control" placeholder="Password" onChange={(e) => setregisterPassword(e.target.value)} /></label>
                    </div>
                    <button className="btn btn-primary" onClick={registerUser}>Sign Up</button>
                </>
            </div>
        </div>
    )
}

export default SignUp
