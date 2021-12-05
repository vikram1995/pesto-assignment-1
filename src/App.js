
import './App.css';
import { useState, useEffect } from 'react';
import UserListPage from './Components/UserListPage/UserListPage'
import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner'
import SignUp from './Components/SignUp/SignUp';
import NavBar from './Components/Navbar/NavBar';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase-config'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import UserDetailsPage from './Components/UserDetailsPage/UserDetailsPage';
import SignIn from './Components/SignIn/SignIn';

function App() {
  const [usersList, setUsersList] = useState(null)
  const [userEmail, setuserEmail] = useState(null)

  useEffect(async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json();
      setUsersList(data);
    } catch (error) {
      console.log("falied to fetch data from server")
    }
  }, [])

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setuserEmail(currentUser.email);
        console.log(currentUser.email)
      }
    })
  }, [])


  return (
    <div>
      <BrowserRouter>
        <NavBar userEmail={userEmail ? userEmail : ""} setuserEmail={setuserEmail}/>
        <Routes>
          <Route path="/" element={usersList && <UserListPage usersList={usersList} />} />
          <Route path="user/:id" element={usersList && <UserDetailsPage usersList={usersList} />} />
          <Route path="sign-up" element={<SignUp setuserEmail={setuserEmail} />} />
          <Route path="sign-in" element={<SignIn setuserEmail={setuserEmail} />} />
        </Routes>
      </BrowserRouter>
      {!usersList && <LoadingSpinner />}
    </div>
  );
}

export default App;
