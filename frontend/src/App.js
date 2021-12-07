
import './App.css';
import { useState, useEffect } from 'react';
import UserListPage from './Components/UserListPage/UserListPage'
import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner'
import SignUp from './Components/SignUp/SignUp';
import NavBar from './Components/Navbar/NavBar';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase-config'
import Config from './Config/config'
import store from './store'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import UserDetailsPage from './Components/UserDetailsPage/UserDetailsPage';
import SignIn from './Components/SignIn/SignIn';

function App() {
  const [usersList, setUsersList] = useState(null)
  const [userEmail, setuserEmail] = useState(null)

  const unsubscribe = store.subscribe(() => {
    const state = store.getState().Apps
    if (state.authUser) {
      setuserEmail(state.authUser.email)
    }
    else {
      setuserEmail(null)
    }
  })


  useEffect(async () => {
    try {
      const response = await fetch(`${Config.serverUrl}/users`)
      const data = await response.json();
      setUsersList(data);
      store.dispatch({ type: 'App/usersList', payload: data })
    } catch (error) {
      console.log("falied to fetch data from server")
    }
  }, [])

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setuserEmail(currentUser.email);
        store.dispatch({ type: 'App/authUser', payload: currentUser })
        console.log(currentUser.email)
      }
    })
  }, [])

  function PrivateRoute({ children }) {
    return userEmail ? children : <Navigate to="/sign-in" />;
  }

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={usersList && <UserListPage usersList={usersList} />} />
          <Route path="user/:id" element={usersList && <PrivateRoute><UserDetailsPage usersList={usersList} /></PrivateRoute>} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
      {!usersList && <LoadingSpinner />}
    </div>
  );
}

export default App;
