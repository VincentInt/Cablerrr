import { Route, Routes } from 'react-router-dom';
import Goods from './component/Content/Goods/Goods';
import Katalog from './component/Content/Katalog/Katalog';
import Main from './component/Content/Main/Main';
import Layout from './component/Layout';
import Basket from './component/Content/Basket/Basket';
import useBasket from './hooks/useBasket';
function App() {
  const {addBasket, removeBasket, basket} = useBasket()
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main addBasket={addBasket}/>} />
          <Route path="katalog" element={<Katalog addBasket={addBasket}/>} />
          <Route path="goods" element={<Goods addBasket={addBasket}/>} />
          <Route path='basket' element={<Basket addBasket={addBasket} removeBasket={removeBasket} basket={basket}/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
