import axios from 'axios';
import './App.css';
import CompA from './components/CompA';
import Content from './components/Content';
import Header from './components/Header';
import Products from './components/Products';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Mobiles from './components/Mobiles';
import Laptops from './components/Laptops';
function App() {
 
  
  return (
    <>
    <BrowserRouter>
    <div className='row'>
  <Header/>
  <h1 style={{textAlign:'center', backgroundColor:'lightgray'}}>ITEMS</h1>
  <Products/>
  {/* <Content/> */}
  <Routes>
    <Route path='/Mobiles' element={<Mobiles/>}></Route>
    <Route path='/Laptops' element={<Laptops/>}></Route>
  </Routes>
  </div>
  </BrowserRouter>
    </>
  );
}

export default App;