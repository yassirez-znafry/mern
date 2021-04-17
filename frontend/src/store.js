import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { playlistReducer, playlistSongsReducer } from './reducers/playlistReducers.js'
import { userLoginReducer,  userRegisterReducer, userDetailsReducer, userUpdateProfileReducer } from "./reducers/userReducers.js";


const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null


const reducer = combineReducers({
    playlistList: playlistReducer,
    playlistSongsList: playlistSongsReducer,
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
     userDetails: userDetailsReducer,
      userUpdateProfile: userUpdateProfileReducer,
})
const initialState = {
    userLogin: { userInfo: userInfoFromStorage }
}
const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store
