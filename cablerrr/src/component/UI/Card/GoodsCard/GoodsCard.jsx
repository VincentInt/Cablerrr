import Btn from '../../Btn/Btn';
import style from './GoodsCard.module.scss';

const GoodsCard = ({img, title, price, addBasket}) => {
  return (
    <div className={style.containerCard}>
      <div>
        <img
          className={style.imgIcon}
          src={img}
          alt="icon_card"
        />
        <div  className={style.textContainer}>
          <h6 className={style.titleText}>{title}</h6>
          <div className={style.flexPriceContainer}>
            <h6 className={style.titlePrice}>{price} ₽</h6>
            <Btn onClick={()=>addBasket()} style={{marginRight: "0px"}} type={'Big'} color={'black'}>
              В корзину
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodsCard;
