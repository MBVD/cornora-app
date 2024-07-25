import React, { useRef, useEffect } from "react";
import reg_back from "./source/images/login/reg-back.svg";
import reg_plus from "./source/images/login/reg-plus.svg";
import styles from "./source/css/owner_photo.module.css";

const OwnerPhoto = () => {
  const frontPopupRef = useRef(null);
  const backPopupRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    let startTouchY = 0;
    let currentY = 0;
    let front_popup = frontPopupRef.current
    front_popup.addEventListener("touchstart", (event) => {
      startTouchY = event.changedTouches[0].pageY;
      front_popup.style.transition = 'none';
    })

    front_popup.addEventListener("touchmove", (event) => {
      currentY = event.touches[0].pageY
      if (currentY - startTouchY > 10){
        front_popup.style.transform = `translateY(${currentY - startTouchY}px)`
      }
    })

    front_popup.addEventListener("touchend", (event) => {
      front_popup.style.transition = 'transform 0.3s ease-in-out';
      if (currentY - startTouchY > 100){
        let main_popup = front_popup
        console.log(main_popup)
        main_popup.classList.add(`${styles.visually_hidden}`)
        front_popup.classList.remove(`${styles.pop_animation}`)
        front_popup.style.transform = 'translateY(100%)';
        let background = formRef.current
        background.style.filter = 'blur(0px)'
      } else{
        front_popup.style.transform = 'translateY(0)';
      }
    })


    let back_popup = backPopupRef.current
    back_popup.addEventListener("touchstart", (event) => {
      startTouchY = event.changedTouches[0].pageY;
      back_popup.style.transition = 'none';
    })

    back_popup.addEventListener("touchmove", (event) => {
      currentY = event.touches[0].pageY
      if (currentY - startTouchY > 10){
        back_popup.style.transform = `translateY(${currentY - startTouchY}px)`
      }
    })

    back_popup.addEventListener("touchend", (event) => {
      back_popup.style.transition = 'transform 0.3s ease-in-out';
      if (currentY - startTouchY > 100){
        back_popup.classList.add(`${styles.visually_hidden}`)
        back_popup.classList.remove(`${styles.pop_animation}`)
        back_popup.style.transform = 'translateY(100%)';
        let background = formRef.current
        background.style.filter = 'blur(0px)'
      } else{
        back_popup.style.transform = 'translateY(0)';
      }
    })
  }, []);

  const Popup = (e) => {
    let button = e.target;
    const popupType = button.getAttribute('data-popup');
    let main_popup = null;
    if (popupType === 'front') {
      main_popup = frontPopupRef.current;
    } else if (popupType === 'back') {
      main_popup = backPopupRef.current;
    }
    main_popup.style.transform = 'translateY(0)';
    if (main_popup) {
      main_popup.classList.remove(`${styles.visually_hidden}`);
      let popup = main_popup.querySelector(`.${styles.main__pop_container}`);
      let background = formRef.current;
      background.style.filter = 'blur(2px)';
      popup.classList.add(`${styles.pop_animation}`);
      // popup.style.transform = 'translateY(0)';
    }
  }

  return (
    <body>
      <header className={styles.header}>
        <div className={styles.header__top}></div>
        <div className={styles.header__back}>
          <a href="owner" type="button" className={styles.header__back_button}>
            <img src={reg_back} className={styles.header__back_button_img} />
            <div className={styles.header__back_button_text}>Назад</div>
          </a>
        </div>
        <div className={styles.header__container}>
          <div className={styles.header__container_title}>Документы</div>
        </div>
      </header>

      <main className={styles.main}>
        <form action="owner.html" className={styles.main__form} ref={formRef}>
          <div className={styles.main__form_container}>
            <div className={styles.main__form_holder}>
              <label className={styles.main__form_container_label} htmlFor="front">
                Вид спереди
              </label>
              <button
                type="button"
                className={`${styles.main__form_container_add} ${styles.add}`}
                data-popup="front"
                onClick={Popup}
              >
                <img src={reg_plus} alt="plus icon"/>
              </button>
            </div>

            <div className={styles.main__form_holder}>
              <label className={styles.main__form_container_label} htmlFor="back">
                Вид сзади
              </label>
              <button
                type="button"
                className={`${styles.main__form_container_add} ${styles.add}`}
                data-popup="back"
                onClick={Popup}
              >
                <img src={reg_plus} alt="plus icon"/>
              </button>
            </div>
          </div>

          <input type="submit" value="Сохранить" className={styles.main__form_submit} />
        </form>

        <div ref={frontPopupRef} className={`${styles.main__pop} front ${styles.visually_hidden}`}>
          <div className={styles.main__pop_container}>
            <div className={styles.main__pop_container_holder}>
              <button type="button" className={styles.main__pop_container_label}>Сделать фото</button>
            </div>
            <div className={styles.main__pop_container_holder}>
              <label className={styles.main__pop_container_label} htmlFor="front-gallery">Выбрать из Галереи</label>
              <input type="file" id="front_gallery" className={styles.main__pop_container_input} accept=".pdf" required />
            </div>
          </div>
        </div>

        <div ref={backPopupRef} className={`${styles.main__pop} back ${styles.visually_hidden}`}>
          <div className={styles.main__pop_container}>
            <div className={styles.main__pop_container_holder}>
              <button type="button" className={styles.main__pop_container_label}>Сделать фото</button>
            </div>
            <div className={styles.main__pop_container_holder}>
              <label className={styles.main__pop_container_label} htmlFor="back-gallery">Выбрать из Галереи</label>
              <input type="file" id="back_gallery" className={styles.main__pop_container_input} accept=".pdf" required />
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}

export default OwnerPhoto;
