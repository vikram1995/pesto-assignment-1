import { put,takeLatest } from 'redux-saga/effects'
import Api from './urls/urls'
import axios from 'axios'
import { USERS_LIST_SCHEMA } from './schema/usersList'
// worker Saga: will be fired on USER_FETCH_REQUESTED actions

function* fetchUser(action) {
   try {
      const usersList = yield axios(Api.fetchUser, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
         },
         data: JSON.stringify({ query: USERS_LIST_SCHEMA })
      })
      yield put({ type: 'App/usersList', payload: usersList.data.data.users });
   } catch (e) {

      yield put({ type: "USER_FETCH_FAILED", message: e.message });
   }
}

function* mySaga() {
   yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga;