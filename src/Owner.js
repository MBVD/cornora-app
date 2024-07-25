import React from 'react'
import { useEffect, useRef, useState } from 'react'
import reg_back from './source/images/login/reg-back.svg'
import reg_camera from './source/images/login/reg-camera.svg'
import reg_upload from './source/images/login/reg-upload.svg'
import styles from './source/css/owner.module.css'


const Owner = ({api, phoneNumber, access_token}) => {
  const form_ref = useRef(null)
  const [inputs, setInputs] = useState();

  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    if (e.target.files && e.target.files.length > 0){
      console.log("heerjfkasljdfkls")
      value = e.target.files[0];
    }
    setInputs(values => ({...values, [name]: value}));
  }

  useEffect(() => {
    let startTouchY = 0;
    let currentY = 0;
    let popup = document.querySelector(`.${styles.main__pop_container}`)
    popup.addEventListener("touchstart", (event) => {
      startTouchY = event.changedTouches[0].pageY;
      popup.style.transition = 'none';
    })

    popup.addEventListener("touchmove", (event) => {
      currentY = event.touches[0].pageY
      if (currentY - startTouchY > 10){
        popup.style.transform = `translateY(${currentY - startTouchY}px)`
      }
    })

    popup.addEventListener("touchend", (event) => {
      popup.style.transition = 'transform 0.3s ease-in-out';
      if (currentY - startTouchY > 100){
        let main_popup = document.querySelector(`.${styles.main__pop}`)
        main_popup.classList.add(`${styles.visually_hidden}`)
        popup.classList.remove(`${styles.pop_animation}`)
        popup.style.transform = 'translateY(100%)';
        let background = document.querySelector(`.${styles.main__form}`)
        background.style.filter = 'blur(0px)'
      } else{
        popup.style.transform = 'translateY(0)';
      }
    })
  }, []);

  const Popup = (e) => {
    console.log(access_token)
    let main_popup = document.querySelector(`.${styles.main__pop}`)
    main_popup.classList.remove(`${styles.visually_hidden}`)
    let popup = document.querySelector(`.${styles.main__pop_container}`)
    let background = document.querySelector(`.${styles.main__form}`)
    background.style.filter = 'blur(2px)'
    popup.classList.add(`${styles.pop_animation}`)
    popup.style.transform = 'translateY(0)';
  }

  const handleUploadPhoto = (e) => {
    let button = document.querySelector(`.${styles.main__form_submit}`)
    console.log(button)
    button.removeAttribute('disabled');
    button.style.opacity = "1"
  }

  const sendPhoto = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("photo", inputs["photo"]);
    fetch(api + "auth/register/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': access_token
      },
      body: data
    }).then((response) => {
      if (response.ok){
        const targetUrl = "/who_are_you";
        window.location.href = targetUrl;
      }
    })
    console.log(inputs)
    console.log(access_token)
  }


  return (
    <body>
      <header className={styles.header}>
        <div className={styles.header__top}></div>
        <div className={styles.header__back}>
          <a href="who_are_you" type="button" className={styles.header__back_button}>
            <img src={reg_back} className={styles.header__back_button_img} /> 
            <div className={styles.header__back_button_text}>Назад</div>
          </a>
        </div>

        <div className={styles.header__container}>
          <div className={styles.header__container_title}>Документы</div>
        </div>
      </header>

      <main className={styles.main}>
        <form action="" className={styles.main__form} ref={form_ref} onSubmit={(e) => {sendPhoto(e)}}>

          <div className={styles.main__form_container}>
            <div className={styles.main__form_holder}>
              <label className={styles.main__form_label_avatar} for="avatar">
                <div className={styles.main__form_label_avatarCamera}>
                  <img src={reg_camera} className={styles.main__form_label_img} />
                </div>
                Добавить фото
              </label>
              <input type="file" id="avatar" className={styles.main__form_input_photo} accept="image/*" name = "photo" required onChange = {(e) => {handleUploadPhoto(e); handleChange(e)}}/>
            </div>


            <div className={styles.main__form_holder}>
              Удостоверение личности
              <label className={styles.main__form_label_photo} for="Udo" onClick = {(e) => {Popup(e)}}>
                <img src={reg_upload} className={styles.main__form_label_img} />
                Загрузите файл
              </label>
            </div>

          </div>

          <input style={{opacity: 0.5}} type="submit" value="Далее" className={styles.main__form_submit} disabled/>
        </form>
        <div className={`${styles.main__pop} ${styles.visually_hidden}`}>
          <div className={styles.main__pop_container}>
            <div className={styles.main__pop_container_holder}>
              <label className={styles.main__pop_container_label} for="PDF">Загрузить в PDF</label>
              <input type="file" id="PDF" className={styles.main__pop_container_input} accept=".pdf" required/>
            </div>

            <div className={styles.main__pop_container_holder}>
              <a href="owner_photo" className={styles.main__pop_container_label}>Сделать фото</a>
            </div>
          </div>
        </div>
      </main>
    </body>
  )
}

export default Owner;