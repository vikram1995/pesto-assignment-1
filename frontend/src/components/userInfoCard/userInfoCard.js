import React from 'react'
import './userInfoCard.css'
import { Link } from 'react-router-dom'
function UserInfoCard(props) {
    return (
        <div className="card-wrapper">
            <div className="card" style={{ width: "26rem" }}>
                <img src={`https://avatars.dicebear.com/v2/avataaars/${props.username}.svg?options[mood][]=happy`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <ul className="user-contact">
                        <li><i className="bi bi-envelope"></i>  {props.email}</li>
                        <li><i className="bi bi-telephone"></i>  {props.phone}</li>
                        <li><i className="bi bi-globe"></i>  {props.website}</li>
                    </ul>
                    <Link to={`user/${props.id}`} className="btn btn-outline-secondary">
                        View details
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UserInfoCard
