import './App.css';
import React, {useEffect} from 'react';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import { Helmet } from 'react-helmet';

const title = 'Amazon Clone'

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('User is :', authUser);
      if(authUser){
        //if user is logged in or was loggin in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <>
    <Helmet>
          <title>{ title }</title>
    </Helmet>
    <Router>
      <div className="App">
        <Switch>
          <Route path = '/login'>
            <Login />
          </Route>
          <Route path = '/checkout'>
            <Header />
            <Checkout/>
          </Route>
          <Route path = '/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
