import React from 'react';
import { useState } from 'react'
import login_reg_back from './source/images/login/reg-back.svg';


const RegistrationForm = ({phoneNumber, api, token, set_token}) => {
  const [inputs, setInputs] = useState({phone: phoneNumber});

  const handleChange = (e) => {
    let name = e.target.name
    console.log(name)
    let value = e.target.value
    setInputs(values => ({...values, [name]: value}));
  }

  const send_registration_form_data = (e) => {
    e.preventDefault();
    console.log(inputs)
    fetch(api + "auth/register/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        inputs
      ),
    }).then((response) => {
      if (response.ok){
        var body = response.json()
        body.then(response => {
          const accessToken = response.access_token;
          set_token(accessToken);
        });
        const targetUrl = "/who_are_you";
        window.location.href = targetUrl;
      }
    })
  }

  const handlePoliticChange = (e) => {
    const button = document.querySelector(".main__form-submit")
    if (button.hasAttribute('disabled')) {
      button.style.opacity = "1";
      button.removeAttribute('disabled');
    } else {
      button.style.opacity = "0.5";
      button.setAttribute('disabled', '');
    }
  }
  return (
    <div>
    <header class="header">
        <div class="header__top"></div>
        
        <div class="header__back">
            <a href="/registration" type="button" class="header__back-button">
                <img src={login_reg_back} class="header__back-button-img" /> 
                <div class="header__back-button-text">Назад</div>
            </a>

            <div class="header__back-title">Инфо</div>
        </div>
    </header>

    <main class="main">
        <form onSubmit={(e) => send_registration_form_data(e)} class="main__form">
            <div class="main__form-container">
                <div class="main__form-holder">
                    <label class="main__form-label" for="name">Имя</label>
                    <input type="text" id="name" class="main__form-input" name = "name" placeholder="Иван" required onChange={(e) => handleChange(e)}/>
                </div>

                <div class="main__form-holder">
                    <label class="main__form-label" for="surname">Фамилия</label>
                    <input type="text" id="surname" class="main__form-input" placeholder="Иванов" name = "surname" required onChange={(e) => handleChange(e)}/>
                </div>
            
                <div class="main__form-holder">
                    <label class="main__form-label" for="date">Дата рождения</label>
                    <input type="date" id="date" class="main__form-input" placeholder="дд/мм/гггг" required name = "date" onChange={(e) => handleChange(e)}/> 
                </div> 

                <div class="main__form-holder">
                    <label class="main__form-label" for="email">Почта</label>
                    <input type="email" id="email" class="main__form-input" placeholder="Введите почту" required name = "email" onChange={(e) => handleChange(e)}/>
                </div>    

                <div class="main__form-holder">
                    <label class="main__form-label" for="password">Пароль</label>
                    <input type="text" id="password" class="main__form-input"
                    placeholder="Придумайте надежный пароль" required name = "password" onChange={(e) => handleChange(e)}/>

                    <div class="main__form-holderCheck">
                        <input type="checkbox" id="check" class="main__form-input-check" required onChange={(e) => {handlePoliticChange(e)}}/>
                        <label for="check">Я согласен с политикой конфиденциальности</label>
                    </div> 
                </div>    
            </div>

            <input style={{opacity: 0.5}} type="submit" value="Далее" class="main__form-submit" disabled/>
        </form>
    </main>
  </div>
  )
}

export default RegistrationForm;