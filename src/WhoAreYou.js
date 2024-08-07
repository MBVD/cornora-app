import React from 'react';
import { useState } from 'react';
import styles from './source/css/WhoAreYou.module.css'
import login_reg_back from './source/images/login/reg-back.svg';
import reg_carrier_car from './source/images/login/reg-carrierCar.svg'
import reg_owner from './source/images/login/reg-owner.svg'
import reg_broker from './source/images/login/reg-broker.svg'

const WhoAreYou = () => {
  
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
    <div style = {{height: '100vh'}}>
      <header className={styles.header}>
          <div className={styles.header__top}></div>
          
          <div className={styles.header__back}>
              <a href="/registartion_form" type="button" className={styles.header__back_button}>
                  <img src={login_reg_back} alt="Назад" className={styles.header__back_button_img}/> 
                  <div className={styles.header__back_button_text}>Назад</div>
              </a>
          </div>

          <div className={styles.header__container}>
              <div className={styles.header__container_title}>Кто вы?</div>
          </div>
      </header>

      <main className={styles.main}>
          <form action="" className={styles.main__form} onSubmit={handleSubmit}>
              <div className={styles.main__holder}>
              <input type="radio" name="role" id="option1" value="owner" required onChange={(e) => {chooseOption(e)}}/>
              <label htmlFor="option1" className={styles.main__form_item}>
                  <img src={reg_owner} alt="Грузовладелец" className={styles.main__form_item_img}/>
                  <section className={styles.main__form_item_desc}>
                      <div className={styles.main__form_item_desc_title}>Грузовладелец</div>
                      Вам нужно перевести груз.
                  </section>
              </label>

              <input type="radio" name="role" id="option2" value="carrier" required onChange={(e) => {chooseOption(e)}}/>
              <label htmlFor="option2" className={styles.main__form_item}>
                  <img src={reg_carrier_car} alt="Перевозчик" className={styles.main__form_item_img}/>
                  <section className={styles.main__form_item_desc}>
                      <div className={styles.main__form_item_desc_title}>Перевозчик</div>
                      Вы оказываете услуги по транспортировке грузов.
                  </section>
              </label>

              <input type="radio" name="role" id="option3" value="broker" required onChange={(e) => {chooseOption(e)}}/>
              <label htmlFor="option3" className={styles.main__form_item}>
                  <img src={reg_broker} alt="Брокер" className={styles.main__form_item_img}/>
                  <section className={styles.main__form_item_desc}>
                      <div className={styles.main__form_item_desc_title}>Брокер</div>
                      Вы оказываете услуги по растоможке и затоможке грузов.
                  </section>
              </label>
          </div>
          <input style={{ opacity: 0.5 }} type="submit" value="Далее" className={styles.main__form_submit} disabled/>
          </form>
        </main>
    </div>
  );
}

export default WhoAreYou;