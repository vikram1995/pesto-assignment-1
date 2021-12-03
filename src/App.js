
import './App.css';
import { useState, useEffect } from 'react';
import UserListPage from './Components/UserListPage/UserListPage'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import UserDetailsPage from './Components/UserDetailsPage/UserDetailsPage';

function App() {
  const [usersList, setUsersList] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  useEffect(() => {
    try {
      fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => {
      console.log(data);
      setUsersList(data);
    })
    } catch (error) {
      setErrorMsg("Failed to fetch data from server")
    }
    
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={usersList && <UserListPage usersList={usersList}/> } />
        <Route path="user/:id" element={usersList &&  <UserDetailsPage usersList={usersList}/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
