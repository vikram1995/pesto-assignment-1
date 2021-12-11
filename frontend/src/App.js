
import './App.css';
import { useState, useEffect } from 'react';
import UserListPage from './components/userListPage/userListPage'
import LoadingSpinner from './components/loadingSpinner/loadingSpinner'
import SignUp from './components/signUp/signUp';
import NavBar from './components/navbar/navBar';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase-config'
import store from './store'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import UserDetailsPage from './components/userDetailsPage/userDetailsPage';
import SignIn from './components/signIn/signIn';
import PrivateRoute from './components/privateRoute/privateRoute';

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
