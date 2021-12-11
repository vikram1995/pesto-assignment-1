import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase-config'
import store from '../../store'
import './signIn.css'

function SignIn(props) {
    const [signInEmail, setsignInEmail] = useState(null)
    const [signInPassword, setsignInPassword] = useState(null)
    const [errorMsg, seterrorMsg] = useState(null)
    let navigate = useNavigate();
    const signIn = async (e) => {
        e.preventDefault();
        try {
            const authResponse = await signInWithEmailAndPassword(auth, signInEmail, signInPassword)
            console.log(authResponse);
            store.dispatch({ type: 'App/authUser', payload: authResponse.user })
            navigate('/');
        } catch (error) {
            console.log(error.message);
            seterrorMsg(getErrorMsg(error.message))
        }
    }

    function getErrorMsg (msg){
        return msg.split('/')[1].replace(/[^a-zA-Z ]/g, " ")
    }

    return (
        <div className="sign-in-page">
            
            <div className="sign-in-form-box">
            {errorMsg &&<div style={{color:"red"}}>{errorMsg}</div>}    
                <form>
                    <div className="form-group">
                        <label>Email <input type="email" class="form-control" placeholder="Enter email" onChange={(e) => setsignInEmail(e.target.value)} /></label>
                    </div>
                    <div className="form-group">
                        <label>Password <input type="password" class="form-control" placeholder="Password" onChange={(e) => setsignInPassword(e.target.value)} /></label>
                    </div>
                    <button className="btn btn-primary" onClick={e => signIn(e)}>Sign In</button>
                </form>
                <hr className="my-4"></hr>
                <button className="btn btn-lg btn-success" onClick={() => navigate('/sign-up')}>Create Account</button>
            </div>
        </div>
    )
}

export default SignIn
