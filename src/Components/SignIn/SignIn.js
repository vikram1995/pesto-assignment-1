import React from 'react'

function SignIn() {
    return (
        <div className="sign-in-page">
            <div className="sign-in-form-box">
                <form>
                    <div className="form-group">
                        <label>Email <input type="email" class="form-control" placeholder="Enter email" /></label>
                    </div>
                    <div className="form-group">
                        <label>Password <input type="password" class="form-control" placeholder="Password" /></label>
                    </div>
                    <button className="btn btn-primary">Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default SignIn
