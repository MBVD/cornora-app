import logo from './logo.svg';
import './App.css';
import Login from './Login'
import RegistrationCode from './RegistrationCode';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RegistrationForm from './RegistrationForm';
import WhoAreYou from './WhoAreYou';
import Owner from './Owner';
import Carrier from './Carrier';
import Broker from './Broker'
import OwnerPhoto from './OwnerPhoto';

function App() {
  const [phoneNumber, setPhoneNumber] = useState(() => {
    const savedPhoneNumber = localStorage.getItem('tel');
    return savedPhoneNumber || "";
  });

  const api = "http://localhost:8000/"
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE5MjI1ODM3LCJpYXQiOjE3MTkyMjIyMzcsImp0aSI6Ijc2NjgzMjhjNmViNDQyOTA5N2U4NGY1ZTJmZjRlYzJjIiwidXNlcl9pZCI6MjR9.on_weFLiZPvN0QrxWVdisZ-5v19Ru_22S4X8cfp4ufw"

  useEffect (() => {
    localStorage.setItem('tel', phoneNumber)
  }, [phoneNumber])

  const set_number = (number) => {
    setPhoneNumber(number)
  }
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Login phoneNumber={phoneNumber} set_number={set_number} api = {api} token = {token}/>} />
        <Route path = "/registration" element = {<RegistrationCode phoneNumber = {phoneNumber} api = {api} token = {token}/>} />
        <Route path = "/registartion_form" element = {<RegistrationForm phoneNumber = {phoneNumber} api = {api} token = {token} />}/>
        <Route path = "/who_are_you" element = {<WhoAreYou/>}/>
        <Route path = "/owner" element = {<Owner/>}/>
        <Route path = "/carrier" element = {<Carrier/>}/>
        <Route path = "/broker" element = {<Broker/>}/>
        <Route path = "/owner_photo" element = {<OwnerPhoto/>}/>
      </Routes>
    </Router>
  );
}

export default App;
