import React, { useEffect } from 'react'
import './App.css'
import Homescreen from './screens/Homescreen'
import LoginScreen from './screens/LoginScreen'
import ProfileScreen from './screens/ProfileScreen'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { auth } from './firebase'
import { useDispatch, useSelector } from 'react-redux'
import { logout, login, selectUser } from './features/userSlice'

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        //  console.log(userAuth)
         dispatch(login({
           uid: userAuth.uid,
           email: userAuth.email
         }))
      }else{
        // show him the login screen.
        dispatch(logout())
      }
    })
    return unsubscribe
  }, [])

  return (
    <div className="app">
      <Router>
        {!user? (
          <LoginScreen/>
        ): (
        <Switch>
          <Route exact path='/'>
            <Homescreen/>
          </Route>
          <Route path='/profile'>
            <ProfileScreen />
          </Route>
        </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
