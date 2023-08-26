import style from './KatalogCard.module.scss'

const KatalogCard = ({title, img}) => {
  return ( 
    <button className={style.cardContainer}>
      <h2 className={style.titleText}>{title}</h2>
      <img className={style.img} src={img} alt="iconCard" />
    </button>
   );
}
 
export default KatalogCard;