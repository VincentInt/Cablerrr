import style from './Katalog.module.scss';
import { katalog } from '../../../data/katalog.json';
import KatalogCard from '../../UI/Card/KatalogCard/KatalogCard';
import GoodsCard from '../../UI/Card/GoodsCard/GoodsCard';
import { cable } from '../../../data/cable.json';


const Katalog = ({addBasket}) => {
  return (
    <div>
      <div className={style.containerKatalog}>
        <h2>Каталог товаров</h2>
        <div>
          {katalog.map((item) => {
            return <KatalogCard key={item.id} title={item.title} img={item.img} />;
          })}
        </div>
        <h2 className={style.h2Text}>Персональные рекомендации</h2>
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
  );
};

export default Katalog;
