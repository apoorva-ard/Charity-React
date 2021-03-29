import './App.css';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Main from './Pages/Main';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';

if(localStorage.getItem('authenticated')){}
else{
  localStorage.setItem('authenticated','false');
}

function App(){
  return(
    <Router>
      <Main/>
    </Router>
  );
}


export default App;
