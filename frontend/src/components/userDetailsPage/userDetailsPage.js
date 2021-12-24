import React from 'react'
import { useParams } from "react-router-dom";
import './userDetailsPage.css'
function UserdetailsPage(props) {
    const { id } = useParams();
    const { usersList } = props;
    const userIdDetailsMap = {}

    const createUserIdDetailsMap = () => {
        usersList.forEach(user => {
            userIdDetailsMap[user.id] = user
        });
    }
    createUserIdDetailsMap();
    const user = userIdDetailsMap[id];

    return (
        <div className="container mt-4">
            <div className="row jumbotron jumbotron-fluid">
                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`} alt="Card image cap" />
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card user-detail">
                        <div className="card-body">
                            <h1 className="display-4">{user.name}</h1>
                            <ul>
                                <li><div data-toggle="tooltip" data-placement="right" title="Username"><i className="bi bi-person-fill"></i> {user.username}</div></li>

                                <li><a href={`mailto:${user.email}`}><div data-toggle="tooltip" data-placement="right" title="Email"><i className="bi bi-envelope"></i> {user.email}</div></a></li>

                                <li><a href={`tel:${user.phone}`}><div data-toggle="tooltip" data-placement="right" title="Phone"><i className="bi bi-telephone"></i> {user.phone}</div></a></li>

                                <li><a href={`http://${user.website}`} target="_blank"><div data-toggle="tooltip" data-placement="right" title="Website"><i className="bi bi-globe"></i> {user.website}</div></a></li>

                                <li><a href={`http://www.google.com/search?q=${user.company.name}`} target="_blank"><div data-toggle="tooltip" data-placement="right" title="Company"><i className="bi bi-building"></i> {user.company.name}</div></a></li>

                                <li><a href={`http://maps.google.com/maps?z=12&t=m&q=loc:${user.address.geo.lat}+${user.address.geo.lng}`} target="_blank"> <div data-toggle="tooltip" data-placement="right" title="Address"><i className="bi bi-geo-alt"></i>
                                    <address>{user.address.suite}, {user.address.street}, {user.address.city}, zipcode: {user.address.zipcode}</address></div></a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserdetailsPage
