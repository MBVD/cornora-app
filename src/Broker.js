import React from 'react'
import styles from './source/css/broker.module.css'
import reg_back from './source/images/login/reg-back.svg'

const Broker = () => {
  return (
    <div style = {{height: '100vh'}}>
      <header className={styles.header}>
          <div className={styles.header_top}></div>
          
          <div className={`${styles.header__back} ${styles.visually_hidden}`}>
              <a href="who_are_you" type="button" className={styles.header__back_button}>
                  <img src={reg_back} className={styles.header__back_button_img} /> 
                  <div className={styles.header__back_button_text}>Назад</div>
              </a>
          </div>

          <div className={`${styles.header__container} ${styles.visually_hidden}`}>
              <div className={styles.header__container_title}>Регистрация брокера</div>
          </div>
      </header>

      <main className={styles.main}>
          <form action="broker-documents.html" className={styles.main__form}>
              <div className={styles.main__form_holder}>
                  <div className={styles.main__form_holder_item}>
                      <label className={styles.main__form_label} for="too">ТОО</label>
                      <input type="text" id="too" className={styles.main__form_input} placeholder="Введите название ТОО" required />
                  </div>

                  <div className={styles.main__form_holder_item}>
                      <label className={styles.main__form_label} for="bin">БИН</label>
                      <input type="text" id="bin" className={styles.main__form_input} placeholder="Введите БИН" required />
                  </div>

                  <div className={styles.main__form_holder_item}>
                      <label className={styles.main__form_label} for="adress">Адрес</label>
                      <input type="text" id="adress" className={styles.main__form_input} placeholder="Введите адрес" required />
                  </div>
              </div>
              <input style={{opacity: 0.5}} type="submit" value="Далее" className={styles.main__form_submit} disabled />
          </form>
      </main>
      
    </div>
  )
}

export default Broker;