import logo from './logo.svg';
import './App.css';
import Greet  from './component/Greet'; 
//import {Greet}  from './component/Greet'; 
import Welcome from './component/Welcome'
import React from 'react';

import Jsx from './jsx/Jsx';
//Greet for default export to this page if we use export default 
//we can chage here import name and called id..most of the cases 
//we use default export.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greet text="Function Component"/> 
        <Welcome/>
       {/* {
         React.createElement(
           'h1',
           {className: 'head-tag'},
           'Hello JSX'
         )
       } */}
       <h1>JSX</h1>
       <Jsx/>
      </header>
    </div>
  );
}

export default App;
