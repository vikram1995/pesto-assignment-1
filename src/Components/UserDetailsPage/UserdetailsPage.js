import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

function UserdetailsPage(props) {
    const { id } = useParams();
    const { usersList } = props;
    const user = usersList[id - 1];
    return (
        <div className="container">
            <div className="row jumbotron jumbotron-fluid">
                <div className="col-md-4">
                    <div className="card" style={{ width: "100%",height:"100%"}}>
                        <img className="card-img-top" src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`} alt="Card image cap" />
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card"style={{ width: "100%",height:"100%"}}>
                        <div className ="card-body">
                        <h1 className="display-4">{user.name}</h1>
                            <div style={{fontSize: "1.5em"}}>
                                <div><i className="bi bi-person-fill"></i> {user.username}</div>
                                <div><i className="bi bi-envelope"></i> {user.email}</div>
                                <div><i className="bi bi-telephone"></i> {user.phone}</div>
                                <div><i className="bi bi-globe"></i> {user.website}</div>
                                <div><i className="bi bi-building"></i> {user.company.name}</div>
                                <div><i className="bi bi-geo-alt"></i> 
                                <span>{user.address.suite}, {user.address.street}, {user.address.city}, zipcode: {user.address.zipcode}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserdetailsPage
