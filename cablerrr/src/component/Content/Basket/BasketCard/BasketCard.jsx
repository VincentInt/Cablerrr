import Btn from '../../../UI/Btn/Btn';
import style from './BasketCard.module.scss';

const BasketCard = ({ img, title, voltage, glow, priceTitle, removeBasket }) => {
  return (
    <div className={style.containerBasketCardFlex}>
      <div className={style.flexContainer}>
        <img className={style.img} src={img} alt="icon" />
        <div className={style.textContainer}>
          <h6 className={style.h6Title}>{title}</h6>
          <h6>Напряжение: {voltage}кВ</h6>
          <h6>Сечение: {glow}</h6>
        </div>
      </div>
      <div className={style.priceContainer}>
        <div>
          <h6 className={style.h6Title}>{priceTitle} ₽</h6>
          <Btn onClick={()=>removeBasket()} style={{ margin: '0px' }} color={'black'}>
            Удалить
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
