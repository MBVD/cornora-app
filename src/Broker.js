import React from 'react'
import { useRef, useState } from 'react'
import styles from './source/css/broker.module.css'
import reg_back from './source/images/login/reg-back.svg'

const Broker = () => {
  const formRef = useRef(null);
  const [inputs, setInputs] = useState();
  const [isFull, setIsFull] = useState(false)

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
          <form action="broker-documents.html" className={styles.main__form} ref = {formRef} onSubmit={(e) => {sendData(e)}}>
              <div className={styles.main__form_holder}>
                  <div className={styles.main__form_holder_item}>
                      <label className={styles.main__form_label} for="too">ТОО</label>
                      <input type="text" id="too" className={styles.main__form_input} placeholder="Введите название ТОО" name = "too" required onChange={(e) => handleChange(e)} />
                  </div>

                  <div className={styles.main__form_holder_item}>
                      <label className={styles.main__form_label} for="bin">БИН</label>
                      <input type="text" id="bin" className={styles.main__form_input} placeholder="Введите БИН" name = "bin" required onChange={(e) => handleChange(e)}/>
                  </div>

                  <div className={styles.main__form_holder_item}>
                      <label className={styles.main__form_label} for="adress">Адрес</label>
                      <input type="text" id="adress" className={styles.main__form_input} placeholder="Введите адрес" required />
                  </div>
              </div>
              <input style={{opacity: isFull ? 1 : 0.5}} type="submit" value="Далее" class={styles.main__form_submit} disabled = {!isFull} />
          </form>
      </main>
      
    </div>
  )
}

export default Broker;