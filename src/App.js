import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Product from './Products/LoadProduct'
import Home from './Home/Home'




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Product" element={<Product />} />
        <Route path="/" element={<Home />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
