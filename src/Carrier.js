import React from 'react'
import { useState } from 'react'
import reg_back from './source/images/login/reg-back.svg'
import reg_carrier_car from './source/images/login/reg-carrierCar.svg'
import reg_carrier_avia from './source/images/login/reg-carrierAvia.svg'

import reg_owner from './source/images/login/reg-owner.svg'
import reg_broker from './source/images/login/reg-broker.svg'
import styles from './source/css/carrier.module.css'

const Carrier = () => {
  const [redirectUrl, changeRedirectUrl] = useState('')

  const chooseOption = (e) => {
    changeRedirectUrl(e.target.value);
    const button = document.querySelector(`.${styles.main__form_submit}`)
    button.style.opacity = "1"
    button.removeAttribute("disabled")
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = redirectUrl;
  };

  return (
    <body>
      <header className={styles.header}>
          <div className="header__top"></div>
          
          <div className={styles.header__back}>
              <a href="who_are_you" type="button" className={styles.header__back_button} onClick={(e) => chooseOption(e)}>
                  <img src={reg_back} className={styles.header__back_button_img} /> 
                  <div className={styles.header__back_button_text}>Назад</div>
              </a>
          </div>

          <div className={styles.header__container}>
              <div className={styles.header__container_title}>Регистрация перевозчика</div>
          </div>
      </header>
      

      <main className={styles.main}>
          <form action="" className={styles.main__form} onSubmit={(e) => {handleSubmit(e)}}>
              <div className={styles.main__holder}>
                  <input type="radio" name="type" id="option1" value="carrier_car_info" required onClick={(e) => chooseOption(e)} />
                  <label for="option1" className={styles.main__form_item}>
                      <img src={reg_carrier_car} className={styles.main__form_item_img} />
                      <div className={styles.main__form_item_title}>Автомобиль</div>
                  </label>

                  <input type="radio" name="type" id="option2" value="carrier_aviacompany" required onClick={(e) => chooseOption(e)}/>
                  <label for="option2" className={styles.main__form_item}>
                      <img src={reg_carrier_avia} className={styles.main__form_item_img} />
                      <div className={styles.main__form_item_title}>Авиакомпания</div>
                  </label>
              </div>

              <input style={{opacity: 0.5}} type="submit" value="Далее" className={styles.main__form_submit} disabled/>
          </form>
      </main>
    </body>
  )
}

export default Carrier;