import { useState, useMemo } from 'react';

const useBasket = () => {
  const [basket, setBasket] = useState([]);
  const addBasket = (item) => {
    setBasket((prev) => [...prev, item]);
  };
  const removeBasket = (item) => {
    setBasket((prev) => {
      return [...prev].filter((filter) => filter != item);
    });
  };
  return {addBasket, removeBasket, basket};
};

export default useBasket;
