import React, { useEffect, useState } from 'react';
import style from './Certificates.module.scss';

const Certificates = () => {
  const [pages, setPages] = useState([
    {
      img: 'https://s3-alpha-sig.figma.com/img/200e/b5d7/42afc4da7db81ffd927924f079dcbbe2?Expires=1693785600&Signature=fqIccAzWoVFNcFS3CCPt31o63xWUQD1Yj43IA0JV7H4HS~kU5DCrsQaC-ZqDZcCKL21raHK47Gm3NMd6udQyJlFVqkjAOyQQkn7H7aVKearFJH74fwvNvBHetz2Kpa-ZYMzUgVkgZZVfpU31d~jNzeSpnCc23StqmOiptIXocfhN2YP4G9cjbDL3UWbq-utsTdYdP25j3UFnXOgNoce2xZuhNNSgX2muIh~pQKZrpNVMoKpr-dtgg56ptHgYI43bQiVIfBvEqc29DTNDfjgAAFmGZN8YTnHwgt0HqOxmEbm0FUoK0tuJ52EF12ZmyQoB8wsTqFIrFbjjI1yvktQjIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/200e/b5d7/42afc4da7db81ffd927924f079dcbbe2?Expires=1693785600&Signature=fqIccAzWoVFNcFS3CCPt31o63xWUQD1Yj43IA0JV7H4HS~kU5DCrsQaC-ZqDZcCKL21raHK47Gm3NMd6udQyJlFVqkjAOyQQkn7H7aVKearFJH74fwvNvBHetz2Kpa-ZYMzUgVkgZZVfpU31d~jNzeSpnCc23StqmOiptIXocfhN2YP4G9cjbDL3UWbq-utsTdYdP25j3UFnXOgNoce2xZuhNNSgX2muIh~pQKZrpNVMoKpr-dtgg56ptHgYI43bQiVIfBvEqc29DTNDfjgAAFmGZN8YTnHwgt0HqOxmEbm0FUoK0tuJ52EF12ZmyQoB8wsTqFIrFbjjI1yvktQjIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/200e/b5d7/42afc4da7db81ffd927924f079dcbbe2?Expires=1693785600&Signature=fqIccAzWoVFNcFS3CCPt31o63xWUQD1Yj43IA0JV7H4HS~kU5DCrsQaC-ZqDZcCKL21raHK47Gm3NMd6udQyJlFVqkjAOyQQkn7H7aVKearFJH74fwvNvBHetz2Kpa-ZYMzUgVkgZZVfpU31d~jNzeSpnCc23StqmOiptIXocfhN2YP4G9cjbDL3UWbq-utsTdYdP25j3UFnXOgNoce2xZuhNNSgX2muIh~pQKZrpNVMoKpr-dtgg56ptHgYI43bQiVIfBvEqc29DTNDfjgAAFmGZN8YTnHwgt0HqOxmEbm0FUoK0tuJ52EF12ZmyQoB8wsTqFIrFbjjI1yvktQjIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
  ]);
  const [statePages, setStatePages] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setStatePages((prev) => (prev + 1) % pages.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);
//Пытался сделать бесконечный слайдер, но получилась херня
  return (
    <div className={style.containerCertificates}>
      <div
        className={style.window}
        style={{
          transform: `translateX(${statePages * 556}px)`,
          transition: 'transform 1s ease',
        }}>
        {pages.map((item, index) => (
          <img className={style.img} src={item.img} alt="certificates" key={index} />
        ))}
        {pages.map((item, index) => (
          <img className={style.img} src={item.img} alt="certificates" key={index + pages.length} />
        ))}
      </div>
    </div>
  );
};

export default Certificates;
