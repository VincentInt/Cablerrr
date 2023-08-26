import style from './Btn.module.scss';
const Btn = ({ children, type, color, setTypeSort, ...props }) => {
  return (
    <>
      {type === 'small' ? (
        <button  {...props} className={style.smallBtn}>{children}</button>
      ) : (
        <button {...props}
          className={
            color === 'white'
              ? style.BigBtnWhite
              : style.BigBtn && color === 'black'
              ? style.BigBtnBlack
              : style.BigBtn
          }>
          {children}
        </button>
      )}
    </>
  );
};

export default Btn;
