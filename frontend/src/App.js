
import './App.css';
import { useState, useEffect } from 'react';
import UserListPage from './Components/UserListPage/UserListPage'
import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner'
import SignUp from './Components/SignUp/SignUp';
import NavBar from './Components/Navbar/NavBar';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase-config'
import store from './store'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import UserDetailsPage from './Components/UserDetailsPage/UserDetailsPage';
import SignIn from './Components/SignIn/SignIn';
import PrivateRoute from './Components/privateRoute/privateRoute';

function App() {
  const [userEmail, setuserEmail] = useState(null)
  const [usersList, setUsersList] = useState(null)

  store.subscribe(() => {
    const state = store.getState().Apps
    console.log(state);
    if (state.authUser) {
      setuserEmail(state.authUser.email)
    }
    else {
      setuserEmail(null)
    }
    if (state.usersList && state.usersList.length > 0) {
      setUsersList(state.usersList)
    }
    else {
      setUsersList(null)
    }
  })

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        store.dispatch({ type: 'App/authUser', payload: currentUser })
        console.log(currentUser.email)
      }
    })

    store.dispatch({ type: 'USER_FETCH_REQUESTED' })
  }, [])

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={usersList && <UserListPage usersList={usersList} />} />
          <Route path="user/:id" element={usersList && <PrivateRoute userEmail={userEmail}><UserDetailsPage usersList={usersList} /></PrivateRoute>} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
      {!usersList && <LoadingSpinner />}
    </div>
  );
}

export default App;
