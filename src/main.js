import React, { useState, useEffect, useCallback } from 'react';

import styles from './main.module.css';

import main_from from './source/images/main/main-from.svg';
import main_gradient from './source/images/main/main-gradient.png';
import main_home from './source/images/main/main-home.svg';
import main_location from './source/images/main/main-location.svg';
import main_message from './source/images/main/main-message.svg';
import main_notification from './source/images/main/main-notification.png';
import main_profile from './source/images/main/main-profile.svg';
import main_search from './source/images/main/main-search.svg';
import main_star from './source/images/main/main-star.svg';
import main_to from './source/images/main/main-to.svg';
import main_track from './source/images/main/main-track.svg';
import main_verified from './source/images/main/main-verified.svg';
import main_vremenno from './source/images/main/main-vremenno.svg';

const Card = ({ cityFrom, addressFrom, timeFrom, cityTo, addressTo, timeTo, price, weight, volume, status }) => (
    <div className={styles['main__card']}>
      <div className={styles['main__card-text']}>
        <div className={styles['main__card-text-holder']}>
          <img src={main_from} className={styles['main__card-text-image']} alt="From" />
          <div className={styles['main__card-text-item']}>
            <div className={styles['main__card-city']}>
              {cityFrom} <span className={styles['main__card-adress']}>{addressFrom}</span>
            </div>
            <div className={styles['main__card-time']}>{timeFrom}</div>
          </div>
          <div className={`${styles['main__card-text-status']} ${styles[status]}`}>
            {status === 'inPath' ? 'В пути' : 'Сегодня'}
          </div>
        </div>
        <div className={styles['main__card-text-holder']}>
          <img src={main_to} className={styles['main__card-text-image']} alt="To" />
          <div className={styles['main__card-text-item']}>
            <div className={styles['main__card-city']}>
              {cityTo} <span className={styles['main__card-adress']}>{addressTo}</span>
            </div>
            <div className={styles['main__card-time']}>{timeTo}</div>
          </div>
        </div>
      </div>
      <div className={styles['main__card-info']}>
        <div className={styles['main__card-info-block']}>
          <div className={styles['main__card-info-value']}>{price} тг</div>
        </div>
        <div className={styles['main__card-info-block']}>
          <div className={styles['main__card-info-desc']}>Вес</div>
          <div className={styles['main__card-info-num']}>{weight} кг</div>
        </div>
        <div className={styles['main__card-info-block']}>
          <div className={styles['main__card-info-desc']}>Объём</div>
          <div className={styles['main__card-info-num']}>
            {volume} м<sup className={styles['main__card-info-num-sup']}>3</sup>
          </div>
        </div>
      </div>
    </div>
  );
  
  const Footer = () => (
    <footer className={styles['footer']}>
      <nav className={styles['footer__menu']}>
        <ul className={styles['footer__menu-list']}>
          <li className={styles['footer__menu-item']}>
            <a href="#" className={styles['footer__menu-link']}>
              <img src={main_home} alt="Home" />
            </a>
          </li>
          <li className={styles['footer__menu-item']}>
            <a href="#" className={styles['footer__menu-link']}>
              <img src={main_search} alt="Search" />
            </a>
          </li>
          <li className={styles['footer__menu-item']}>
            <a href="#" className={styles['footer__menu-link']}>
              <img src={main_message} alt="Message" />
            </a>
          </li>
          <li className={styles['footer__menu-item']}>
            <a href="#" className={styles['footer__menu-link']}>
              <img src={main_profile} alt="Profile" />
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles['footer__down']}></div>
    </footer>
  );
  

const Main = () =>{
    return(
        <>
          <header className={styles.header}>
            <div className={styles['header__top']}></div>

            <div className={styles['header__profile']}>
                <div className={styles['header__holder']}>
                <div className={styles['header__holder-welcome']}>
                    Добрый день, Батырбек!
                    <img src={main_verified} alt="Verified" />
                </div>
                <div className={styles['header__holder-rating']}>
                    Отзывы
                    <div className={styles['header__holder-rating-number']}>
                    <img src={main_star} alt="Star" />
                    4.7 (16)
                    </div>
                </div>
                <div className={styles['header__holder-done']}>
                    Выполненные
                    <span className={styles['header__holder-done-number']}>56</span>
                </div>
                <div className={styles['header__holder-achievements']}>
                    Достижения
                    <div className={styles['header__holder-achievements-item']}>
                    40
                    <img className={styles['header__holder-achievements-item-image']} src={main_track} alt="Track" />
                    </div>
                    <div className={styles['header__holder-achievements-item']}>
                    40
                    <img className={styles['header__holder-achievements-item-image']} src={main_track} alt="Track" />
                    </div>
                </div>
                </div>

                <div className={styles['header__holder']}>
                <img className={styles['header__holder-image']} src={main_vremenno} alt="Profile" />
                </div>
            </div>

            <div className={styles['header__news']}>
                <div className={styles['header__news-slide']}>
                <div className={styles['header__news-slide-work']}>
                    Как это работает?
                </div>
                <div className={styles['header__news-slide-possibilities']}>
                    Используйте все возможности Cornora 👉
                </div>
                </div>
            </div>

            <div className={styles['header__news-navigation']}>
                <div className={`${styles['header__news-navigation-item']} ${styles['active']}`}></div>
                <div className={styles['header__news-navigation-item']}></div>
                <div className={styles['header__news-navigation-item']}></div>
                <div className={styles['header__news-navigation-item']}></div>
            </div>
          </header>

          <main className={styles['main']}>
            <nav className={styles['main__navigation']}>
              <button type='button' className={`${styles['main__navigation-button']} ${styles['active']}`}>Активные грузы</button>
              <button type='button' className={`${styles['main__navigation-button']} ${styles['offer']}`}>Мои предложения</button>
              <button type='button' className={styles['main__navigation-button']}>Выполнено</button>
            </nav>

            <hr className={styles['main__navigation-line']} />

            <div className={styles.main__cardholder}>
                <Card
                cityFrom="Астана"
                addressFrom="Кабанбай батыр 4, блок 5"
                timeFrom="Сегодня, 14:00-16:00"
                cityTo="Караганды"
                addressTo=" ул. Абая 45"
                timeTo="16 сент, 00:00-01:00"
                price="45 000"
                weight="450"
                volume="12"
                status="inPath"
                />
                <Card
                cityFrom="Астана"
                addressFrom="Кабанбай батыр 4, блок 5"
                timeFrom="Сегодня, 14:00-16:00"
                cityTo="Караганды"
                addressTo=" ул. Абая 45"
                timeTo="16 сент, 00:00-01:00"
                price="45 000"
                weight="450"
                volume="12"
                status="toDay"
                />
                <Card
                cityFrom="Астана"
                addressFrom="Кабанбай батыр 4, блок 5"
                timeFrom="Сегодня, 14:00-16:00"
                cityTo="Караганды"
                addressTo=" ул. Абая 45"
                timeTo="16 сент, 00:00-01:00"
                price="45 000"
                weight="450"
                volume="12"
                status="inPath"
                />
                <Card
                cityFrom="Астана"
                addressFrom="Кабанбай батыр 4, блок 5"
                timeFrom="Сегодня, 14:00-16:00"
                cityTo="Караганды"
                addressTo=" ул. Абая 45"
                timeTo="16 сент, 00:00-01:00"
                price="45 000"
                weight="450"
                volume="12"
                status="inPath"
                />
                <div className={styles.main__bottom}></div>
            </div>
          </main>
          <Footer />
        </>
    );
};

export default Main;