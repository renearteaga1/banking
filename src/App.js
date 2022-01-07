
import './App.css';
import { Routes, Route, Outlet } from "react-router-dom";
// import { Tooltip } from 'bootstrap/dist/js/bootstrap.min.js';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.js';

import {UserContext} from './components/context.js';
import NavBar from './components/navbar.js';
import Home from './components/home.js';
import AllData from './components/alldata';
// import Balance from './components/balance.js';
import CreateAccount from './components/createaccount.js';
import Deposit from './components/deposit.js';
import Withdraw from './components/withdraw.js';
// import Login from './components/login.js';


function App() {
 
  return (
    <div className="App">
      <NavBar/>


      <header className="App-header">
      
      <UserContext.Provider value={{users:[{name:'rene',email:'rene@mit.edu',password:'clave',balance:100}]}}>
        <Routes>
            <Route path="index.html" element={<Home/>}/>
            <Route path="create-account" element={<CreateAccount/>}/>
            {/* <Route path="login" element={<Login/>}/> */}
            <Route path="withdraw" element={<Withdraw/>}/>
            {/* <Route path="balance" element={<Balance/>}/> */}
            <Route path="deposit" element={<Deposit/>}/>
            <Route path="alldata" element={<AllData/>}/>
        </Routes>
      </UserContext.Provider>
      {/* <div className="App-content">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div> */}
        
      </header>
    </div>
  );
}

export default App;
