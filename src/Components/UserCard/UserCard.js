import React from 'react'
import './UserCard.css'
function UserCard(props) {
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
                    <a href="#" className="btn btn-primary">View details</a>
                </div>
            </div>
        </div>
    )
}

export default UserCard
