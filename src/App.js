
import logo from './logo.svg';
import './App.css';
import Greet  from './component/Greet'; 
//import {Greet}  from './component/Greet'; 
import Welcome from './component/Welcome'
import React, { Component } from 'react';
import Jsx from './jsx/Jsx';
import Profile from './profile/Profile'
//Greet for default export to this page if we use export default 
//we can chage here import name and called id..most of the cases 
//we use default export.
import Message from './component/Message';

// function App() {

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         {/*Functional component*/}
//         <Greet text="Function Component"/> 
//         {/* class component */}
//         <Welcome/>
        
//         {/* JSX */}
//         <h3><u>JSX</u></h3>
//        {
//          React.createElement(
//            'h1',
//            {className: 'head-tag'},
//            'Hello JSX'
//          )
//        }
//        <Jsx/>
//        {/* PROP */}
//        <Profile name = 'Peter'  data = 'Peter-data' />
//        <p> This is children property</p>
//        <Profile name = 'Bruce'  data = 'Bruce-data' />
//        <p> This is action property</p>
//        <Profile name = 'Alice'  data = 'Alice-data' />
//        <p> This is hero property</p>
//       </header>
//     </div>
//   ); 
// }


//stste class component
class App extends Component{
  render(){
    return(
    <div className='App'>
      <Message/>
    </div>
    )
  }
}
export default App;
