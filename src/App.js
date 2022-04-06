import logo from './logo.svg';
import './App.css';
import {Greet}  from './component/Greet'; 
import Welcome from './component/Welcome'
//Greet for default export to this page if we use export default 
//we can chage here import name and called id..most of the cases 
//we use default export.

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World..!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Greet/> 
      <Welcome/>
    </div>
  );
}

export default App;
