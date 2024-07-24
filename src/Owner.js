import React from 'react'
import { useEffect } from 'react'
import reg_back from './source/images/login/reg-back.svg'
import reg_camera from './source/images/login/reg-camera.svg'
import reg_upload from './source/images/login/reg-upload.svg'
import styles from './source/css/owner.module.css'


const Owner = () => {

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
    let main_popup = document.querySelector(`.${styles.main__pop}`)
    main_popup.classList.remove(`${styles.visually_hidden}`)
    let popup = document.querySelector(`.${styles.main__pop_container}`)
    let background = document.querySelector(`.${styles.main__form}`)
    background.style.filter = 'blur(2px)'
    popup.classList.add(`${styles.pop_animation}`)
    popup.style.transform = 'translateY(0)';
  }


  return (
    <body>
      <header class={styles.header}>
          <div class={styles.header__top}></div>
          
          <div class={styles.header__back}>
              <a href="who_are_you" type="button" class={styles.header__back_button}>
                  <img src={reg_back} class={styles.header__back_button_img} /> 
                  <div class={styles.header__back_button_text}>Назад</div>
              </a>
          </div>

          <div class={styles.header__container}>
              <div class={styles.header__container_title}>Документы</div>
          </div>
      </header>

      <main class={styles.main}>
          <form action="" class={styles.main__form}>

              <div class={styles.main__form_container}>
                  <div class={styles.main__form_holder}>
                      <label class={styles.main__form_label_avatar} for="avatar">
                          <div class={styles.main__form_label_avatarCamera}>
                              <img src={reg_camera} class={styles.main__form_label_img} />
                          </div>
                          Добавить фото
                      </label>
                      <input type="file" id="avatar" class={styles.main__form_input_photo} accept="image/*" required />
                  </div>


                  <div class={styles.main__form_holder}>
                      Удостоверение личности
                      <label class={styles.main__form_label_photo} for="Udo" onClick = {(e) => {Popup(e)}}>
                          <img src={reg_upload} class={styles.main__form_label_img} />
                          Загрузите файл
                      </label>
                  </div>

              </div>

              <input style={{opacity: 0.5}} type="submit" value="Далее" class={styles.main__form_submit} disabled/>
          </form>
          



          <div class={`${styles.main__pop} ${styles.visually_hidden}`}>
              <div class={styles.main__pop_container}>
                  <div class={styles.main__pop_container_holder}>
                      <label class={styles.main__pop_container_label} for="PDF">Загрузить в PDF</label>
                      <input type="file" id="PDF" class={styles.main__pop_container_input} accept=".pdf" required/>
                  </div>

                  <div class={styles.main__pop_container_holder}>
                      <a href="owner_photo" class={styles.main__pop_container_label}>Сделать фото</a>
                  </div>
              </div>
          </div>

      </main>
    </body>
  )
}

export default Owner;