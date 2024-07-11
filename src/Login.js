import React, { useState, useEffect } from 'react';
import './source/css/login.css';
import login_reg_add from './source/images/login/reg-add.svg';
import login_reg_point from './source/images/login/reg-point.svg';
import login_reg_back from './source/images/login/reg-back.svg';
import login_reg_broken from './source/images/login/reg-broker.svg';
import login_reg_camera from './source/images/login/reg-camera.svg';
import login_reg_carrier from './source/images/login/reg-carrier.svg';
import login_reg_carrierAvia from './source/images/login/reg-carrierAvia.svg';
import login_reg_carrierCar from './source/images/login/reg-carrierCar.svg';
import login_reg_cornora from './source/images/login/reg-cornora.svg';
import login_reg_imageWHO from './source/images/login/reg-imageWHO.svg';
import login_reg_owner from './source/images/login/reg-owner.svg';
import login_reg_plus from './source/images/login/reg-plus.svg';
import login_reg_track from './source/images/login/reg-track.png';
import login_reg_upload from './source/images/login/reg-upload.svg';

const Login = () => {
  const [showSwipe, setShowSwipe] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  const handleSwipe = () => {
    setShowSwipe(false);
    setShowRegistration(false);
    const main = document.querySelector(".main")
    if (main){
      main.classList.remove("reset-animation")
      main.classList.add("main-animation")
    }
    setShowLogin(true);
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setCurrentX(e.touches[0].clientX);
    updateButtonBackground();
  };

  const handleTouchEnd = () => {
    if (isSwipeSuccessful()) {
      hideContainer();
    } else {
      resetButtonBackground();
    }
  };

  const updateButtonBackground = () => {
    const button = document.querySelector('.main__container-first-button');
    if (!button) return;

    const buttonWidth = button.offsetWidth;
    let diffX = currentX - startX;

    if (diffX < 0) {
      diffX = 0;
    } else if (diffX > buttonWidth) {
      diffX = buttonWidth;
    }

    const percentage = (diffX / buttonWidth) * 100;
    button.style.background = `linear-gradient(to right, var(--color-lightOrange) ${percentage}%, var(--color-orange) ${percentage}%)`;
  };

  const isSwipeSuccessful = () => {
    const button = document.querySelector('.main__container-first-button');
    if (!button) return false;

    const buttonWidth = button.offsetWidth;
    const diffX = currentX - startX;
    return diffX >= buttonWidth * 0.75;
  };

  const resetButtonBackground = () => {
    const button = document.querySelector('.main__container-first-button');
    if (button) {
      button.style.background = 'var(--color-orange)';
    }
  };

  const hideContainer = () => {
    setShowLogin(false);
    setShowRegistration(true);
  };

  const registerContainer = () => {
    setShowLogin(false);
    const main = document.querySelector(".main")
    if (main){
      main.classList.add("reset-animation")
    }
    setShowRegistration(true);
  };

  const formatPhoneInput = (e) => {
    const input = e.target;
    const formattedNumber = formatPhoneNumber(input.value);
    input.value = formattedNumber;
  };

  const formatPhoneNumber = (value) => {
    let phoneNumber = value.replace(/[^\d]/g, '').slice(1);
    const defaultCountryCode = '+7 ';
    const kz = '🇰🇿 | ';

    if (phoneNumber.length > 3 && phoneNumber.length <= 6) {
      phoneNumber = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else if (phoneNumber.length > 6 && phoneNumber.length <= 10) {
      phoneNumber = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
    } else if (phoneNumber.length > 10) {
      phoneNumber = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 8)}-${phoneNumber.slice(8)}`;
    }

    return kz + defaultCountryCode + phoneNumber;
  };

  useEffect(() => {
    const button = document.querySelector('.main__container-first-button');
    const regButton = document.querySelector('.main__container-second-form-reg');
    const backButton = document.querySelector('.header__back-button');
    const phoneInputs = document.querySelectorAll('input[type="tel"]');

    if (button) {
      button.addEventListener('touchstart', handleTouchStart);
      button.addEventListener('touchmove', handleTouchMove);
      button.addEventListener('touchend', handleTouchEnd);
    }

    if (regButton) {
      regButton.addEventListener('click', registerContainer);
    }

    if (backButton) {
      backButton.addEventListener('click', hideContainer);
    }

    phoneInputs.forEach(phoneInput => {
      phoneInput.addEventListener('input', formatPhoneInput);
    });

    return () => {
      if (button) {
        button.removeEventListener('touchstart', handleTouchStart);
        button.removeEventListener('touchmove', handleTouchMove);
        button.removeEventListener('touchend', handleTouchEnd);
      }

      if (regButton) {
        regButton.removeEventListener('click', registerContainer);
      }

      if (backButton) {
        backButton.removeEventListener('click', hideContainer);
      }

      phoneInputs.forEach(phoneInput => {
        phoneInput.removeEventListener('input', formatPhoneInput);
      });
    };
  }, []);

  return (
    <div>
      <header className="header">
        <div className="header__top"></div>

        <div className={`header__back ${!showLogin ? '' : 'visually-hidden'}`}>
          <button type="button" className="header__back-button" onClick = {handleSwipe}>
            <img src={login_reg_back} alt="Back" className="header__back-button-img" />
            <div className="header__back-button-text">Назад</div>
          </button>
        </div>

        <div className={`header__container ${showLogin ? 'headerContainer-animation' : 'visually-hidden'}`}>
          <div className="header__container-enter header__container-title">Вход</div>
          <div className="header__container-welcome header__container-title visually-hidden">Добро пожаловать!</div>
        </div>
      </header>

      <main className="main">
        <img src={login_reg_track} alt="Track" className="main__track" />
        <div className="main__container">
          <div className="main__container-title">
            <img src={login_reg_cornora} alt="Cornora" className="main__container-title-cornora" />
            <p className="main__container-title-text">
              Перевозчики и грузополучатели, <br />
              объединенные технологией.
            </p>
          </div>
          <div className={`main__container-first ${showSwipe ? '' : 'visually-hidden'}`}>
            <button type="button" className="main__container-first-button" onClick={handleSwipe}>
              <img src={login_reg_point} alt="Point" className="main__container-first-button-point" />
              Смахните чтобы начать
            </button>
          </div>

          <div className={`main__container-second ${showLogin ? '' : 'visually-hidden'}`}>
            <form action="confirm.html" className="main__container-second-form">
              <label htmlFor="main__container-second-number" className="main__container-second-form-inputText">
                Номер телефона
              </label>
              <input
                type="tel"
                className="main__container-second-form-input"
                id="main__container-second-number"
                placeholder="Введите номер телефона"
                required
              />

              <label htmlFor="main__container-second-password" className="main__container-second-form-inputText">
                Пароль
              </label>
              <input
                type="password"
                className="main__container-second-form-input"
                id="main__container-second-password"
                placeholder="Введите пароль"
                required
              />

              <div className="main__container-second-form-forgot">
                <a href="#" className="main__container-second-form-forgot">
                  Забыли пароль?
                </a>
              </div>

              <input type="submit" value="Войти в аккаунт" className="main__container-second-form-submit" />

              <div className="main__container-second-form-account">
                Нет учетной записи? <button type="button" className="main__container-second-form-reg">Зарегистрируйтесь</button>
              </div>
            </form>
          </div>

          <div className={`main__container-registration ${showRegistration ? '' : 'visually-hidden'}`}>
            <form action="registration" className="main__container-registration-form">
              <label htmlFor="main__container-registration-number" className="main__container-registration-form-inputText">
                Введите номер телефона
              </label>
              <input
                type="tel"
                className="main__container-registration-form-input"
                id="main__container-registration-number"
                placeholder="Введите номер телефона"
                required
              />
              <input type="submit" value="Далее" className="main__container-registration-form-submit" />
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
