import React from 'react'
import { useEffect, useRef, useState } from 'react'
import reg_back from './source/images/login/reg-back.svg'
import reg_camera from './source/images/login/reg-camera.svg'
import reg_upload from './source/images/login/reg-upload.svg'
import styles from './source/css/carrier_documents.module.css'
import { Dropdown } from 'semantic-ui-react'


const CarrierDocuments = ({api, phoneNumber, access_token}) => {
  const [inputs, setInputs] = useState({});
  const [isFull, setIsFull] = useState(false)
  const formRef = useRef(null)
  const buttonRef = useRef(null)

  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    if (e.target.files && e.target.files.length > 0){
      console.log("heerjfkasljdfkls")
      value = e.target.files[0];
    }
    setInputs(values => ({...values, [name]: value}));
    const inputs = formRef.current.querySelectorAll('input[required]');
    let allFilled = true;

    inputs.forEach(input => {
      if (!input.value) {
        allFilled = false;
      }
    });
    setIsFull(allFilled)
  }

  const sendData = (e) => {
    e.preventDefault();
    console.log(inputs);
    if (0){
      const targetUrl = "/who_are_you";
      window.location.href = targetUrl;
    }
  }
  return (
    <body>
      <header class={styles.header}>
          <div class={styles.header__top}></div>
          
          <div class={styles.header__back}>
              <a href="carrier_car_info" type="button" class={styles.header__back_button}>
                  <img src={reg_back} class={styles.header__back_button_img}/> 
                  <div class={styles.header__back_button_text}>Назад</div>
              </a>
          </div>

          <div class={styles.header__container}>
              <div class={styles.header__container_title}>Автомобиль</div>
          </div>
      </header>
      <main class={styles.main}>
          <form action="carrier-documents.html" class={styles.main__form} onSubmit={(e) => sendData(e)} ref = {formRef}>

              <div class={styles.main__form_container}>
                  <div class={styles.main__form_holder}>
                      <label class={styles.main__form_label_avatar} for="avatar">
                          <div class={styles.main__form_label_avatarCamera}>
                              <img src={reg_upload} class={styles.main__form_label_img}/>
                          </div>
                          Добавить фото
                      </label>
                      <input name = "avatar" type="file" id="avatar" class={styles.main__form_input_photo} accept="image/*" required onChange={(e) => handleChange(e)}/>                    
                  </div>


                  <div class={styles.main__form_holder}>
                      Удостоверение личности
                      <label class={styles.main__form_label_photo} for="Udo">
                          <img src={reg_upload} class={styles.main__form_label_img}/>
                          Загрузите файл
                      </label>
                      <input type="file" id="Udo" name = "udo" class={styles.main__form_input_photo} accept="image/*" required onChange={(e) => handleChange(e)}/>
                  </div>

                  <div class={styles.main__form_holder}>
                      Водительские права
                      <label class={styles.main__form_label_photo} for="driverLicense">
                          <img src={reg_upload} class={styles.main__form_label_img}/>
                          Загрузите файл
                      </label>
                      <input type="file" id="driverLicense" name = "driverLicense" class={styles.main__form_input_photo} accept="image/*" required onChange={(e) => handleChange(e)}/>
                  </div>
              </div>

              <input style={{opacity: isFull ? 1 : 0.5}} type="submit" value="Далее" class={styles.main__form_submit} disabled = {!isFull} ref = {buttonRef}/>
          </form>
      </main>
    </body>
  )
}

export default CarrierDocuments;