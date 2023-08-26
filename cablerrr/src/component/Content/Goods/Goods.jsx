import { cable } from '../../../data/cable.json';
import style from './Goods.module.scss';
import GoodsCard from '../../UI/Card/GoodsCard/GoodsCard';
import Btn from '../../UI/Btn/Btn';
import { useEffect, useState } from 'react';

const Goods = ({addBasket}) => {
  const [typeSort, setTypeSort] = useState('Алфавиту');
  const [sort, setSort] = useState(cable);
  useEffect(() => {
    return setSort((prev) => {
      switch (typeSort) {
        case 'Алфавиту':
          return [...prev].sort((a, b) => a.title.localeCompare(b.title));
        case 'Популярности':
          return [...prev].sort((a, b) => b.popular - a.popular);
        case 'Дешевизне':
          return [...prev].sort((a, b) => a.price - b.price);
        case 'Дороговизне':
          return [...prev].sort((a, b) => b.price - a.price);
      }
    });
  }, [typeSort]);
  
  return (
    <div>
      <div className={style.containerGoods}>
        <div className={style.containerTitleFlex}>
          <h2>Кабеля и провода</h2>
          <h6 className={style.h6Text}>{cable.length} товаров</h6>
        </div>
        <div className={style.selectAndTitleFlex}>
          <h4>Сортировка по:</h4>
          <div className={style.btnSelect}>
            <Btn setTypeSort={setTypeSort} onClick={() => setTypeSort('Алфавиту')}>
              Алфавиту
            </Btn>
            <Btn setTypeSort={setTypeSort} onClick={() => setTypeSort('Популярности')}>
              Популярности
            </Btn>
            <Btn setTypeSort={setTypeSort} onClick={() => setTypeSort('Дешевизне')}>
              Дешевизне
            </Btn>
            <Btn setTypeSort={setTypeSort} onClick={() => setTypeSort('Дороговизне')}>
              Дороговизне
            </Btn>
          </div>
        </div>
        <div className={style.goodsCardFlex}>
          {sort.map((item) => {
            return (
              <GoodsCard addBasket={()=>addBasket(item)} key={item.id} title={item.title} img={item.img} price={item.priceTitle} />
            );
          })}
        </div>
        <div className={style.containerRecommend}>
          <h2>Персональные рекомендации</h2>
          <div className={style.goodsCardFlex}>
            {cable.map((item, index) => {
              if (index < 3) {
                return (
                  <GoodsCard
                    addBasket={()=>addBasket(item)}
                    key={item.id}
                    title={item.title}
                    img={item.img}
                    price={item.priceTitle}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goods;
