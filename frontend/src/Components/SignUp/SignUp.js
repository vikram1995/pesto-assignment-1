import React, { useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase-config'
import './SignUp.css'

function SignUp(props) {
    const [registerEmail, setregisterEmail] = useState(null)
    const [registerPassword, setregisterPassword] = useState(null)
    const [errorMsg, seterrorMsg] = useState(null)
    let navigate = useNavigate();
    const registerUser = async (e) => {
        e.preventDefault();
        try {
            const authResponse = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            console.log(authResponse);
            props.setuserEmail(authResponse.user.email)
            navigate('/');
        } catch (error) {
            console.log(error);
            seterrorMsg(getErrorMsg(error.message))
        }
    }
    function getErrorMsg(msg) {
        return msg.split('/')[1].replace(/[^a-zA-Z ]/g, " ")
    }
    return (
        <div className="sign-up-page">
             
            <div className="sign-up-form-box">
            {errorMsg &&<div style={{color:"red"}}>{errorMsg}</div>}
                <form>
                    <div className="form-group">
                        <label>Email <input type="email" class="form-control" placeholder="Enter email" onChange={(e) => setregisterEmail(e.target.value)} /></label>
                    </div>
                    <div className="form-group">
                        <label>Password <input type="password" class="form-control" placeholder="Password" onChange={(e) => setregisterPassword(e.target.value)} /></label>
                    </div>
                    <button className="btn btn-primary" onClick={(e) => registerUser(e)}>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
