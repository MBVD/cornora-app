import logo from './logo.svg';
import './App.css';
import Login from './Login'
import RegistrationCode from './RegistrationCode';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Login/>} />
        <Route path = "/final" element = {<RegistrationCode/>} />
      </Routes>
    </Router>
  );
}

export default App;
