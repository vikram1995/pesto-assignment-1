
import './App.css';
import { useState, useEffect } from 'react';
import UserListPage from './Components/UserListPage/UserListPage'
import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import UserDetailsPage from './Components/UserDetailsPage/UserDetailsPage';

function App() {
  const [usersList, setUsersList] = useState(null)
  useEffect(() => {
    try {
      fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => {
      console.log(data);
      setUsersList(data);
    })
    } catch (error) {
      console.log("falied to fetch data from server")
    }
    
  }, [])

  return (
    <div>
      {!usersList && <LoadingSpinner />}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={usersList && <UserListPage usersList={usersList}/> } />
        <Route path="user/:id" element={usersList &&  <UserDetailsPage usersList={usersList}/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
