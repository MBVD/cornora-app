import React from 'react'
import { useRef, useState, useImperativeHandle, forwardRef } from 'react'
import styles from './source/css/broker_documents.module.css'
import reg_back from './source/images/login/reg-back.svg'
import reg_camera from './source/images/login/reg-camera.svg'
import reg_upload from './source/images/login/reg-upload.svg'
import reg_add from './source/images/login/reg-add.svg';


const BrokerUserForm = ({name, formRef, handleChangeForUser}) => {
  const handleChangeUser = (e) => {
    handleChangeForUser(e, formRef)
  }

  const preventRedirect = (e) =>{
    e.preventDefault();
  }
  return (
    <form name = {name} ref = {formRef} onSubmit={(e) => {preventRedirect(e)}}>
      <div class={styles.main__form_employee}>
        <div class={styles.main__form_employee_title}>Сотрудник {name}</div>
        <div class={styles.main__form_employee_holder}>
            <label class={styles.main__form_employee_label} for="name">Имя</label>
            <input type="text" id="name" class={styles.main__form_employee_input} placeholder="Введите имя" required name = "name" onChange={(e) => handleChangeUser(e)}/>
        </div>

        <div class={styles.main__form_employee_holder}>
            <label class={styles.main__form_employee_label} for="surname">Фамилия</label>
            <input type="text" id="surname" class={styles.main__form_employee_input} placeholder="Введите фамилию" required name = "surname" onChange={(e) => handleChangeUser(e)}/>
        </div>


        <div class={styles.main__form_employee_holder}>
            Удостоверение личности
            <label class={styles.main__form_employee_label_photo} for={`Udo${name}`}>
                <img src={reg_upload} class={styles.main__form_employee_label_img}/>
                Загрузите файл
            </label>
            <input type="file" id={`Udo${name}`} class={styles.main__form_employee_input_photo} accept="image/*" required name = "udo" onChange={(e) => handleChangeUser(e)}/>
        </div>

        <div class={styles.main__form_employee_holder}>
            Аттестат специалиста
            <label class={styles.main__form_employee_label_photo} for={`Attestat${name}`} >
                <img src={reg_upload} class={styles.main__form_employee_label_img}/>
                Загрузите файл
            </label>
            <input type="file" id={`Attestat${name}`} class={styles.main__form_employee_input_photo} accept="image/*" required name = "attestat" onChange={(e) => handleChangeUser(e)}/>
        </div>
      </div>
    </form>
  )
}

export default BrokerUserForm;