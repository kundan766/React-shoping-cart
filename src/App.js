import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Product from './component/Product';
import About from './component/About';
import {BrowserRouter,Route,Routes}from "react-router-dom";
// import { createContext } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  // const ShopContext = createContext({
  //   products: [],
  //   cartItems: [],
  //   addToCart: () => {},  
  // });
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
    <Navbar/>
    <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/product" element={<Product/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          
    </Routes>
     </BrowserRouter>
      </Provider>
   
     
     
    </div>
  );
}

export default App;
