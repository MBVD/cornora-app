import React from 'react'
import { useEffect, useRef, useState } from 'react'
import reg_back from './source/images/login/reg-back.svg'
import reg_camera from './source/images/login/reg-camera.svg'
import reg_upload from './source/images/login/reg-upload.svg'
import styles from './source/css/carrier_car_info.module.css'
import { Dropdown } from 'semantic-ui-react'

const carsOptions = [
  { key: 'Toyota', value: 'toyota', text: "Toyota" },
  { key: 'Honda', value: 'honda', text: "Honda" },
  { key: 'Ford', value: 'ford', text: "Ford" },
  { key: 'Chevrolet', value: 'chevrolet', text: "Chevrolet" },
  { key: 'Nissan', value: 'nissan', text: "Nissan" },
]

const carsBodyOptions = [
  { key: 'Sedan', value: 'sedan', text: "Sedan" },
  { key: 'SUV', value: 'SUV', text: "SUV" },
  { key: 'Truck', value: 'truck', text: "Truck" },
  { key: 'Coupe', value: 'coupe', text: "Coupe" },
  { key: 'Hatchback', value: 'hatchback', text: "Hatchback" },
]


const CarrierCarInfo = ({api, phoneNumber, access_token}) => {
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
        
        <div class={styles.header__back}>
          <a href="carrier" type="button" class={styles.header__back_button}>
            <img src={reg_back} class={styles.header__back_button_img}/> 
            <div class={styles.header__back_button_text}>Назад</div>
          </a>
        </div>

        <div class={styles.header__container}>
          <div class={styles.header__container_title}>Автомобиль</div>
        </div>
      </header>
      <main class={styles.main}>
        <form ref={formRef} action="carrier-documents.html" class={styles.main__form} onSubmit={(e) => (sendData(e))}>
          <div class={styles.main__form_container}>
            <div class={styles.main__form_holder}>
              <label class={styles.main__form_label} for="mark">Выберите марку автомобиля</label>
              <Dropdown
                placeholder='Выберите марку автомобиля'
                fluid
                search
                selection
                options={carsOptions}
                name = "mark"
                value={formData.mark}
                onChange={handleChangeDropDown}
              />
            </div>

            <div class={styles.main__form_holder}>
                <label class={styles.main__form_label} for="type">Тип кузова</label>
                <Dropdown
                  placeholder='Выберите тип кузова'
                  fluid
                  search
                  selection
                  options={carsBodyOptions}
                  name = "model"
                  value={formData.model}
                  onChange={handleChangeDropDown}
                />
            </div>

            <div class={styles.main__form_holder}>
              <label class={styles.main__form_label} for="size">Габариты кузова</label>
              <input type="text" id="size" class={styles.main__form_input} placeholder="д/ш/в" name = "sizes" required/>
            </div>

            <div class={styles.main__form_holder}>
              Тех.паспорт
              <label class={styles.main__form_label_photo} for="passport">
                <img src={reg_upload} class={styles.main__form_label_img}/>
                Загрузите файл
              </label>
              <input type="file" id="passport" class={styles.main__form_input_photo} accept="image/*" required name = "passport" onChange={(e) => handleChange(e)}/>
            </div>

            <div class={styles.main__form_holder}>
              Фото машины
              <label class={styles.main__form_label_photo} for="carPhoto">
                <img src={reg_upload} class={styles.main__form_label_img}/>
                Загрузите файл
              </label>
              <input type="file" id="carPhoto" class={styles.main__form_input_photo} accept="image/*" required name = "car_photo" onChange={(e) => handleChange(e)}/>
            </div>
          </div>
          <input style={{opacity: !isFull ? 0.5 : 1 }} type="submit" value="Далее" class={styles.main__form_submit} disabled={(!isFull)}/>
        </form>
      </main>
    </body>
  )
}

export default CarrierCarInfo;