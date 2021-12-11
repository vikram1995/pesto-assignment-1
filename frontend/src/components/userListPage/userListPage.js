import React from 'react'
import UserInfoCard from '../UserInfoCard/userInfoCard'

function UserListPage({usersList}) {
    console.log("user list page",usersList)
 
    return (
        <div>
            <div className="App container mt-3">
                {usersList && usersList.map(user => {
                    return <UserInfoCard {...user} key={user.id} />
                })}
            </div>
        </div>
    )
}

export default UserListPage
