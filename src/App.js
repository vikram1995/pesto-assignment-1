
import './App.css';
import { useState, useEffect } from 'react';
import UserListPage from './Components/UserListPage/UserListPage'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import UserdetailsPage from './Components/UserDetailsPage/UserdetailsPage';

function App() {
  const [usersList, setUsersList] = useState(null)
  const [fetchError, setFetchError] = useState(null)
  useEffect(() => {
    try {
      fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => {
      console.log(data);
      setUsersList(data);
    })
    } catch (error) {
      setFetchError(true)
    }
    
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={usersList && <UserListPage usersList={usersList}/> } />
        <Route path="user/:id" element={usersList &&  <UserdetailsPage usersList={usersList}/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
