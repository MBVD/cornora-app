import React, { useState, useEffect, useCallback } from 'react';
import { Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import './carrier-infoCar.css';

import login_reg_add from './source/images/login/reg-add.svg';
import login_reg_point from './source/images/login/reg-point.svg';
import login_reg_back from './source/images/login/reg-back.svg';
import login_reg_broken from './source/images/login/reg-broker.svg';
import login_reg_camera from './source/images/login/reg-camera.svg';
import login_reg_carrier from './source/images/login/reg-carrier.svg';
import login_reg_carrierAvia from './source/images/login/reg-carrierAvia.svg';
import login_reg_carrierCar from './source/images/login/reg-carrierCar.svg';
import login_reg_cornora from './source/images/login/reg-cornora.svg';
import login_reg_imageWHO from './source/images/login/reg-imageWHO.svg';
import login_reg_owner from './source/images/login/reg-owner.svg';
import login_reg_plus from './source/images/login/reg-plus.svg';
import login_reg_track from './source/images/login/reg-track.png';
import login_reg_upload from './source/images/login/reg-upload.svg';


const carBrands = [
    { key: 'toyota', value: 'toyota', text: 'Toyota' },
    { key: 'honda', value: 'honda', text: 'Honda' },
    { key: 'ford', value: 'ford', text: 'Ford' },
    { key: 'chevrolet', value: 'chevrolet', text: 'Chevrolet' },
    { key: 'nissan', value: 'nissan', text: 'Nissan' },
  ];

  const carTypes = [
    { key: 'sedan', value: 'sedan', text: 'Sedan' },
    { key: 'suv', value: 'suv', text: 'SUV' },
    { key: 'truck', value: 'truck', text: 'Truck' },
    { key: 'coupe', value: 'coupe', text: 'Coupe' },
    { key: 'hatchback', value: 'hatchback', text: 'Hatchback' },
  ];

  const CarrierInfoCar = () => {
    const [formData, setFormData] = useState({
      mark: '',
      type: '',
      size: '',
      passport: null,
      carPhoto: null,
    });
    const [isFormValid, setIsFormValid] = useState(false);

    const handleChange = (e, { name, value }) => {
      setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
      const { name, files } = e.target;
      setFormData({ ...formData, [name]: files[0] });
    };

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    useEffect(() => {
      const { mark, type, size, passport, carPhoto } = formData;
      setIsFormValid(mark && type && size && passport && carPhoto);
    }, [formData]);

    const handleSubmit = (e) => {
      e.preventDefault();
    };

    return (
      <div>
        <header className="header">
          <div className="header__top"></div>
          <div className="header__back">
            <a href="carrier.html" className="header__back-button">
              <img src={login_reg_back} className="header__back-button-img" alt="Back" />
              <div className="header__back-button-text">Назад</div>
            </a>
          </div>
          <div className="header__container">
            <div className="header__container-title">Автомобиль</div>
          </div>
        </header>
        <main className="main">
          <form onSubmit={handleSubmit} className="main__form">
            <div className="main__form-container">
              <div className="main__form-holder">
                <label className="main__form-label" htmlFor="mark">
                  Выберите марку автомобиля
                </label>
                <Dropdown
                  placeholder="Выберите марку"
                  fluid
                  search
                  selection
                  options={carBrands}
                  name="mark"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="main__form-holder">
                <label className="main__form-label" htmlFor="type">
                  Тип кузова
                </label>
                <Dropdown
                  placeholder="Выберите тип кузова"
                  fluid
                  search
                  selection
                  options={carTypes}
                  name="type"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="main__form-holder">
                <label className="main__form-label" htmlFor="size">
                  Габариты кузова
                </label>
                <input
                  type="text"
                  id="size"
                  className="main__form-input"
                  placeholder="д/ш/в"
                  name="size"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="main__form-holder">
                Тех.паспорт
                <label className="main__form-label-photo" htmlFor="passport">
                  <img src={login_reg_upload} className="main__form-label-img" alt="Upload" />
                  Загрузите файл
                </label>
                <input
                  type="file"
                  id="passport"
                  className="main__form-input-photo"
                  name="passport"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                />
              </div>
              <div className="main__form-holder">
                Фото машины
                <label className="main__form-label-photo" htmlFor="carPhoto">
                  <img src={login_reg_upload} className="main__form-label-img" alt="Upload" />
                  Загрузите файл
                </label>
                <input
                  type="file"
                  id="carPhoto"
                  className="main__form-input-photo"
                  name="carPhoto"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="main__form-submit"
              disabled={!isFormValid}
              style={{ opacity: isFormValid ? 1 : 0.5 }}
            >
              Далее
            </button>
          </form>
        </main>
      </div>
    );
  };

  export default CarrierInfoCar;