import { Link } from 'react-router-dom';
import Btn from '../UI/Btn/Btn';
import style from './Headers.module.scss';

const Headers = () => {
  return (
    <header className={style.headersContainer}>
      <div className={style.logoContainer}>
      <Link className='link' to={''}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0ZM13.822 31.848C15.67 32.976 17.89 33.54 20.482 33.54C23.47 33.54 25.96 32.796 27.952 31.308C29.944 29.808 31.342 27.792 32.146 25.26L27.772 24.054C27.268 25.734 26.41 27.054 25.198 28.014C23.986 28.974 22.414 29.454 20.482 29.454C18.742 29.454 17.29 29.064 16.126 28.284C14.962 27.504 14.086 26.412 13.498 25.008C12.922 23.592 12.634 21.936 12.634 20.04C12.646 18.144 12.94 16.494 13.516 15.09C14.104 13.674 14.974 12.576 16.126 11.796C17.29 11.016 18.742 10.626 20.482 10.626C22.414 10.626 23.986 11.106 25.198 12.066C26.41 13.014 27.268 14.334 27.772 16.026L32.146 14.82C31.342 12.288 29.944 10.278 27.952 8.79C25.96 7.29 23.47 6.54 20.482 6.54C17.89 6.54 15.67 7.11 13.822 8.25C11.974 9.378 10.552 10.956 9.556 12.984C8.572 15.012 8.08 17.364 8.08 20.04C8.08 22.716 8.572 25.068 9.556 27.096C10.552 29.124 11.974 30.708 13.822 31.848Z"
            fill="white"
          />
        </svg>
        <h4 className={style.logoText}>ablerrr</h4>
        </Link>
      </div>
      <nav className={style.BtnContainer}>
        <div className={style.insideBtnContainer}>
          <Link to={''}><Btn type={"small"}>Главная</Btn></Link>
          <Link className='link' to={"katalog"}><Btn type={'small'}>Каталог товаров</Btn></Link>
          <Link to={'goods'}><Btn type={'small'}>Товары</Btn></Link>
          <Link to={'basket'}><Btn type={'small'}>Корзина</Btn></Link>
        </div>
        <div className={style.insideBtnContainer}>
          <Btn type={'big'} className={style.BigBtn}>Регистрация</Btn>
          <Btn type={'big'} color={"white"} className={style.BigBtn}>Вход</Btn>
        </div>
      </nav>
    </header>
  );
};

export default Headers;
