import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Logout from './pages/Logout';
import Result from './pages/Result';
import Voting from './pages/Voting-Area';
import Voter_Register from './pages/Voter-registration';
import Signup from './pages/Signup';
import Info from './pages/Info';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<Signup/>}/>
      <Route path="/info"element={<Info/>}/>
      <Route path="/voter-registration"element={<Voter_Register/>}/>
      <Route path="/result"element={<Result/>}/>
      <Route path="/voting-area"element={<Voting/>}/>
      <Route path="/logout"element={<Logout/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}
export default App;
