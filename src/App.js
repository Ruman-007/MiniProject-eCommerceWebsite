import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {Header,Footer} from './components';
import {Home ,Contact, Login, Register, Reset, Cart} from "./pages";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
    <BrowserRouter>
    <ToastContainer/>
      <Header/>
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/contact"  element={<Contact/>} />
          <Route path="/login"  element={<Login/>} />
          <Route path="/Register"  element={<Register/>} />
          <Route path="/Reset"  element={<Reset/>} />
          <Route path="/pages/Cart"  element={<Cart/>} />
          </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
