import './source/css/registration_code.css';

const RegistrationCode = () => {
  return (
    <div>
      <header className="header">
        <div className="header__top"></div>
        
        <div className="header__back">
            <a href="login.html" type="button" className="header__back-button">
                <img src="images/login/reg-back.svg" className="header__back-button-img" alt="Назад"/> 
                <div className="header__back-button-text">Назад</div>
            </a>

            <div className="header__back-title">Регистрация</div>
        </div>
      </header>

      <main className="main">
        <form action="registrationForm.html" className="main__form">
          <div className="main__form-desc">
            <div className="main__form-text">
              Мы отправили проверочный код на номер <br />
              +7(ххх)-ххх-хх-хх. Введите код из SMS ниже,
              <br /> чтобы продолжить
            </div>

            <div className="main__form-inputs">
              <input type="number" min="0" max="9" className="main__form-inputs-item" required/>
              <input type="number" min="0" max="9" className="main__form-inputs-item" required/>
              <input type="number" min="0" max="9" className="main__form-inputs-item" required/>
              <input type="number" min="0" max="9" className="main__form-inputs-item" required/>
            </div>

            <div className="main__form-sms">Не получили SMS код? Повторная отправка 
              <br /> через <span className="main__form-timer"> 00:30 </span>
            </div>
          </div>

          <input style={{opacity: 0.5}} type="submit" value="Далее" className="main__form-submit" disabled/>
        </form>

      </main>
    </div>
  );
}

export default RegistrationCode;