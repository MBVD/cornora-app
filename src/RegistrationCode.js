import React from 'react';
import { useState } from 'react';
import styles from './source/css/registration_code.module.css';
import login_reg_back from './source/images/login/reg-back.svg';



const RegistrationCode = () => {

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
    e.target.onkeydown = (event) => handleBackspace(event, index);
    setInputValues([...inputValues, e.target.value]);
    const nextInputIndex = index + 1 < 4 ? index + 1 : index;
    setInputIndex(nextInputIndex);

    setTimeout(async () => {
      const inputs = document.querySelectorAll(`.${styles.main__form_inputs_item}`);
      if (inputs[nextInputIndex]) {
        inputs[nextInputIndex].focus();
      }
    }, 0);
  };
  const endTime = Date.now() + 30 * 1000; // Устанавливаем конечное время

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

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.header__top}></div>
        
        <div className={styles.header__back}>
            <a href="login.html" type="button" className={styles.header__back_button}>
                <img src={login_reg_back} className={styles.header__back_button_img} alt="Назад"/> 
                <div className={styles.header__back_button_text}>Назад</div>
            </a>

            <div className={styles.header__back_title}>Регистрация</div>
        </div>
      </header>

      <main className={styles.main}>
        <form action="registration" className={styles.main__form}>
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

          <input style={{opacity: 0.5}} type="submit" value="Далее" className={styles.main__form_submit} disabled/>
        </form>

      </main>
    </div>
  );
}

export default RegistrationCode;