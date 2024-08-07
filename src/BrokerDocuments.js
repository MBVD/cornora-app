import React from 'react'
import { useRef, useState } from 'react'
import styles from './source/css/broker_documents.module.css'
import reg_back from './source/images/login/reg-back.svg'
import reg_camera from './source/images/login/reg-camera.svg'
import reg_upload from './source/images/login/reg-upload.svg'
import reg_add from './source/images/login/reg-add.svg';
import BrokerUserForm from './BrokerUserForm'


const BrokerDocuments = () => {
  const formRef = useRef(null);
  const [inputs, setInputs] = useState({});
  const [isFull, setIsFull] = useState(false)
  const user1 = useRef(null)
  const user2 = useRef(null)
  const [users, setUsers] = useState([{name: "1", formRef: user1}, {name: "2", formRef: user2}])

  const handleChange = (e) => {
    const inputs = formRef.current.querySelectorAll('input[required]');
    let allFilled = true;

    inputs.forEach(input => {
      if (!input.value) {
        allFilled = false;
      }
    });
    setIsFull(allFilled)
    let name = e.target.name
    let value = e.target.value
    if (e.target.files && e.target.files.length > 0){
      value = e.target.files[0];
    }
    setInputs(values => ({...values, [name]: value}));
  }

  const handleChangeForUser = (e, formRef) => {
    const userId = formRef.current.getAttribute('name');
    let name = e.target.name
    let value = e.target.value
    setInputs(prevInputs => ({
      ...prevInputs,
      [userId]: {
        ...prevInputs[userId],
        [name]: value
      }
    }));
  }

  const sendData = (e) => {
    e.preventDefault();
    console.log(inputs)
    if (0){
      const targetUrl = "";
      window.location.href = targetUrl;
    }
  }

  const createNewForm = (e) => {
    let name = users.length + 1
    const ref = { current: null };
    setUsers([...users, {name: name, formRef: ref }]);
  }

  return (
    <body>
    <header class={styles.header}>
        <div class={styles.header__top}></div>
        
        <div class={`${styles.header__back} ${styles.visually_hidden}`}>
            <a href="broker" type="button" class={styles.header__back_button}>
                <img src={reg_back} class={styles.header__back_button_img}/> 
                <div class={styles.header__back_button_text}>Назад</div>
            </a>
        </div>

        <div class={`${styles.header__container} ${styles.visually_hidden}`}>
            <div class={styles.header__container_title}>Документы</div>
        </div>
    </header>

    <main class={styles.main}>
        <form class={styles.main__form} ref = {formRef} onSubmit={(e) => {sendData(e)}}>

            <div class={styles.main__form_license}>
                <label class={styles.main__form_license_label_avatar} for="mainAvatar">
                    <div class={styles.main__form_license_label_avatarCamera}>
                        <img src={reg_camera} class={styles.main__form_license_label_img}/>
                    </div>
                    Добавить фото
                </label>
                <input type="file" id="mainAvatar" class={styles.main__form_license_input_photo} accept="image/*" required name = "mainAvatar" onChange={(e) => handleChange(e)}/>

                <div class={styles.main__form_license_holder}>
                    Лицензия на осуществление деятельности таможенного представителя
                    <label class={styles.main__form_license_label_photoBIG} for="mainUdo">
                        <img src={reg_upload} class={styles.main__form_license_label_img}/>
                        Загрузите файл
                    </label>
                    <input type="file" id="mainUdo" class={styles.main__form_license_input_photo} accept="image/*" required name = "mainUdo" onChange = {(e) => {handleChange(e)}}/>
                </div>
            </div>

            <div class={styles.main__form_desc}>*Количество сотрудников минимум 2 </div>

            {users.map((user) => (
              <BrokerUserForm name = {user.name} formRef = {user.formRef} handleChangeForUser={handleChangeForUser}/>
            ))}

            <buttom type="button" class={styles.main__form_add} onClick = {(e) => {createNewForm(e)}}>
                <img src={reg_add} class={styles.main__form_add_img}/>
                Добавить еще
            </buttom>

            <input type="submit" value="Далее" class={styles.main__form_submit} disabled = {!isFull} style={{opacity: isFull ? 1 : 0.5}} />
        </form>
    </main>
        
  </body>
  )
}

export default BrokerDocuments;