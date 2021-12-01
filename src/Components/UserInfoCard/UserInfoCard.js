import React from 'react'
import './UserInfoCard.css'
import { Link } from 'react-router-dom'
function UserInfoCard(props) {
    return (
        <div className="card-wrapper">
            <div className="card" style={{ width: "26rem" }}>
                <img src={`https://avatars.dicebear.com/v2/avataaars/${props.username}.svg?options[mood][]=happy`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <div className="user-contact">
                        <div><i className="bi bi-envelope"></i>  {props.email}</div>
                        <div><i className="bi bi-telephone"></i>  {props.phone}</div>
                        <div><i className="bi bi-globe"></i>  {props.website}</div>
                    </div>
                    <Link to={`user/${props.id}`} className="btn btn-primary">
                        View details
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UserInfoCard
