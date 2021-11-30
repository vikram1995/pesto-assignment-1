
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './Components/UserCard/UserCard';

function App() {
  const [usersList, setUsersList] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then(response  => response.json()).then(data=> {
      console.log(data);
      setUsersList(data);
    })
  }, [])

  return (
    <div className="App container">
      {usersList && usersList.map(user => {
        return <UserCard {...user} key={user.id} />
      })}
    </div>
  );
}

export default App;
