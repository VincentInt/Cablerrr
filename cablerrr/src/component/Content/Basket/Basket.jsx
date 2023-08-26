import { useState, useMemo } from 'react';
import Btn from '../../UI/Btn/Btn';
import style from './Basket.module.scss';
import BasketCard from './BasketCard/BasketCard';

const Basket = ({ addBasket, removeBasket, basket }) => {
  const sizeBasket = useMemo(() => basket.length, [basket]);
  const totalPrice = useMemo(() => {
    if (sizeBasket > 0) {
      let totalNum = 0;
      for (let index = 0; index < sizeBasket; index++) {
        totalNum += basket[index].price;
      }
      return totalNum;
    }
    return 0;
  }, [basket]);

  return (
    <div className={style.containerBasket}>
      <div className={style.flexContainer}>
        {sizeBasket > 0 ? <div><h2>Корзина</h2><h2>{sizeBasket} товара</h2></div> : null}
      </div>
      <div className={style.flexContainer}>
        <div>
          {sizeBasket > 0 ? (
            basket.map((item) => (
              <BasketCard
                key={item.id}
                removeBasket={() => removeBasket(item)}
                img={item.img}
                title={item.title}
                voltage={item.voltage}
                glow={item.glow}
                priceTitle={item.priceTitle}
              />
            ))
          ) : (
            <h2>Корзина пуста</h2>
          )}
        </div>
        {sizeBasket > 0 ? (
          <div className={style.basketContainerInfo}>
            <div className={style.Line}>
              <div className={style.flexContainerBasket}>
                <h6 className={style.h6TitleText}>Ваша корзина</h6>
                <h6>2 товара</h6>
              </div>
            </div>
            <div className={style.Line}>
              <div className={style.flexContainerBasket}>
                <h6>Доставка</h6>
                <h6>Бесплатно</h6>
              </div>
              <div className={style.flexContainerBasket}>
                <h6>Общая цена</h6>
                <h6 className={style.h6TitleText}>{totalPrice} ₽</h6>
              </div>
            </div>
            <div className={style.btnContainer}>
              <Btn style={{ margin: '0px' }} color={'black'}>
                Перейти к оформлению
              </Btn>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Basket;
