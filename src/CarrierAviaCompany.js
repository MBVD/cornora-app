import React from 'react'
import { useEffect, useRef, useState } from 'react'
import reg_back from './source/images/login/reg-back.svg'
import reg_camera from './source/images/login/reg-camera.svg'
import reg_upload from './source/images/login/reg-upload.svg'
import styles from './source/css/aviacompany.module.css'
import { Dropdown } from 'semantic-ui-react'


const CarrierAviaCompany = ({api, phoneNumber, access_token}) => {
  const formRef = useRef(null);
  const [isFull, setIsFull] = useState(false)
  const [inputs, setInputs] = useState()
  const [formData, setFormData] = useState({
    mark: '',
    model: ''
  });

  const handleChangeDropDown = (e, {name, value}) => {
    setFormData({
      ...formData,
      [name]: value
    });
    setInputs(values => ({...values, [name]: value}))
  }

  const handleChange = (e) => {
    const inputs = formRef.current.querySelectorAll('input[required]');
    let allFilled = true;

    inputs.forEach(input => {
      if (!input.value) {
        allFilled = false;
      }
    });
    console.log(allFilled)
    setIsFull(allFilled)
    let name = e.target.name
    let value = e.target.value
    if (e.target.files && e.target.files.length > 0){
      console.log("heerjfkasljdfkls")
      value = e.target.files[0];
    }
    setInputs(values => ({...values, [name]: value}));
  }

  const sendData = (e) => {
    e.preventDefault();
    console.log(inputs);
    if (1){
      const targetUrl = "/carrier_documents";
      window.location.href = targetUrl;
    }
  }
  return (
    <body>
      <header class={styles.header}>
          <div class={styles.header__top}></div>
          
          <div class={`${styles.header__back} ${styles.visually_hidden}`}>
              <a href="carrier" type="button" class={styles.header__back_button}>
                  <img src={reg_back} class={styles.header__back_button_img}/> 
                  <div class={styles.header__back_button_text}>Назад</div>
              </a>
          </div>

          <div class={`${styles.header__container} ${styles.visually_hidden}`}>
              <div class={styles.header__container_title}>Регистрация авиакомпании</div>
          </div>
      </header>

      <main class = {styles.main}>
          <form action="" class={styles.main__form} ref = {formRef}>
              <div class={styles.main__form_holder}>
                  <div class={styles.main__form_holder_item}>
                      <label class={styles.main__form_label} for="too">ТОО</label>
                      <input type="text" id="too" class={styles.main__form_input} placeholder="Введите название ТОО" required onChange={(e) => handleChange(e)}/>
                  </div>

                  <div class={styles.main__form_holder_item}>
                      <label class={styles.main__form_label} for="bin">БИН</label>
                      <input type="text" id="bin" class={styles.main__form_input} placeholder="Введите БИН" required onChange={(e) => handleChange(e)}/>
                  </div>

                  <div class={styles.main__form_holder_item}>
                      <label class={styles.main__form_label} for="adress">Адрес</label>
                      <input type="text" id="adress" class={styles.main__form_input} placeholder="Введите адрес" required onChange={(e) => handleChange(e)}/>
                  </div>
              </div>
              <input style={{opacity: isFull ? 1 : 0.5}} type="submit" value="Далее" class={styles.main__form_submit} disabled = {!isFull}/>
          </form>
      </main>
    </body>
  )
}

export default CarrierAviaCompany;