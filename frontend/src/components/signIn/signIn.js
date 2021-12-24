import React, { useState } from 'react'
import { GoogleAuthProvider, signInWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase-config'
import store from '../../store'
import './signIn.css'
import { googleAuthProvider } from '../../config/authMethods';

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

    function getErrorMsg(msg) {
        return msg.split('/')[1].replace(/[^a-zA-Z ]/g, " ")
    }

    const handleSocialAuth = async (provider) => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                store.dispatch({ type: 'App/authUser', payload: user })
                console.log(user.displayName);
                navigate('/');

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);

            });
    }

    return (
        <div className="sign-in-page">

            <div className="sign-in-form-box">
                {errorMsg && <div style={{ color: "red" }}>{errorMsg}</div>}
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
                <button className="btn btn-lg btn-outline-secondary m-2" onClick={() => handleSocialAuth(googleAuthProvider)}>Sign In with Google</button>
                <button className="btn btn-lg btn-success m-2" onClick={() => navigate('/sign-up')}>Create Account</button>
            </div>
        </div>
    )
}

export default SignIn
