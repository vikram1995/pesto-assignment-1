import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signOut } from "firebase/auth";
import { auth } from '../../firebase-config'
import './NavBar.css'
function NavBar(props) {
    //const [userEmail, setuserEmail] = useState(props.userEmail)
    const userEmail =props.userEmail
    const signOutUser = async() => {
        await signOut(auth)
        props.setuserEmail(null)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
            <Link to={`/`} className="nav-link">
                <h3 style={{ color: "white" }}>User List</h3>
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="user-auth-box">
                    <div>
                        <ul className="navbar-nav mr-auto">
                            {userEmail &&  <li className="nav-item"><div className="nav-link"><i class="bi bi-person-circle"></i> {userEmail}</div></li>}
                            {!userEmail && <li className="nav-item"><Link to={`sign-in`} className="nav-link">Sign In</Link></li>}
                            {userEmail && <li className="nav-item"><button className="btn nav-link" onClick={signOutUser}>Logout</button></li>} 
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default NavBar
