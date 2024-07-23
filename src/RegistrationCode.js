import React from 'react';
import { useState, useParams } from 'react';
import styles from './source/css/registration_code.module.css';
import login_reg_back from './source/images/login/reg-back.svg';



const RegistrationCode = ({phoneNumber, api, token}) => {

  const [inputValues, setInputValues] = useState([]);
  const [inputIndex, setInputIndex] = useState(0);

  async function handleBackspace(event, currentIndex) {
    if (event.key === 'Backspace' && event.target.value === '') {
      const inputs = document.querySelectorAll(`.${styles.main__form_inputs_item}`);
      if (currentIndex > 0) {
        inputs[currentIndex - 1].focus();
      }
    }
  }

  const handleInputsChanges = async (e, index) => {
    if (e.target.value.length > 1) {
      e.target.value = e.target.value.charAt(0);
    }
    e.target.onkeydown = (event) => handleBackspace(event, index);
    let cmp = inputValues;
    cmp[index] = e.target.value;
    setInputValues(cmp);
    const nextInputIndex = index + 1 < 4 ? index + 1 % 4 : index;
    setInputIndex(nextInputIndex);
    if (inputValues.length == 3){
      const button = document.querySelector(`.${styles.main__form_submit}`)
      console.log(button)
      button.style.opacity = "1";
      button.removeAttribute('disabled');
    }
    if (e.target.value.length === 1) {
      setTimeout(async () => {
        const inputs = document.querySelectorAll(`.${styles.main__form_inputs_item}`);
        if (inputs[nextInputIndex] && e.target.value.length === 1 && nextInputIndex < 4) {
          inputs[nextInputIndex].focus();
        } else {
          console.log('here')
          e.target.blur();
      }
      }, 0);    }
  };
  const endTime = Date.now() + 30 * 1000;

  const countdown = setInterval(() => {
    const timer = document.querySelector(`.${styles.main__form_timer}`);
    const now = Date.now();
    const timeLeft = Math.round((endTime - now) / 1000); // Рассчитываем оставшееся время

    timer.textContent = `00:${timeLeft < 10 ? '0' : ''}${timeLeft}`;
    if (timeLeft <= 0) {
      clearInterval(countdown);
      timer.textContent = '00:00';
    }
  }, 1000);

  const submitCode = (e) => {
    e.preventDefault();
    let input_values_string = inputValues.join("").toString()
    fetch(api + "auth/verify/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token 
      },
      body: JSON.stringify({
        phone: phoneNumber,
        passcode: input_values_string
      }),
    }).then((response) => {
      if (response.ok){
        console.log(phoneNumber)
        const targetUrl = "/registartion_form";
        window.location.href = targetUrl;
      }
    })
  }

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.header__top}></div>
        
        <div className={styles.header__back}>
            <a href="/" type="button" className={styles.header__back_button}>
                <img src={login_reg_back} className={styles.header__back_button_img} alt="Назад"/> 
                <div className={styles.header__back_button_text}>Назад</div>
            </a>

            <div className={styles.header__back_title}>Регистрация</div>
        </div>
      </header>

      <main className={styles.main}>
        <form className={styles.main__form} onSubmit={(e) => submitCode(e)}>
          <div className={styles.main__form_desc}>
            <div className={styles.main__form_text}>
              Мы отправили проверочный код на номер <br />
              +7(ххх)-ххх-хх-хх. Введите код из SMS ниже,
              <br /> чтобы продолжить
            </div>

            <div className={styles.main__form_inputs}>
              <input type="number" min="0" max="9" className={styles.main__form_inputs_item} required onChange={(e) => handleInputsChanges(e, 0)}/>
              <input type="number" min="0" max="9" className={styles.main__form_inputs_item} required onChange={(e) => handleInputsChanges(e, 1)}/>
              <input type="number" min="0" max="9" className={styles.main__form_inputs_item} required onChange={(e) => handleInputsChanges(e, 2)}/>
              <input type="number" min="0" max="9" className={styles.main__form_inputs_item} required onChange={(e) => handleInputsChanges(e, 3)}/>
            </div>

            <div className={styles.main__form_sms}>Не получили SMS код? Повторная отправка 
              <br /> через <span className={styles.main__form_timer}> 00:30 </span>
            </div>
          </div>

          <input style={{opacity: 0.5}} type="submit" value="Далее" onClick = {(e) => submitCode(e)} className={styles.main__form_submit} disabled/>
        </form>

      </main>
    </div>
  );
}

export default RegistrationCode;