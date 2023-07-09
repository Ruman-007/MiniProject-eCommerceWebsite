import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {Header,Footer} from './components';
import {Home ,Contact, Login, Register, Reset} from "./pages";
function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/contact"  element={<Contact/>} />
          <Route path="/login"  element={<Login/>} />
          <Route path="/Register"  element={<Register/>} />
          <Route path="/Reset"  element={<Reset/>} />
          </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
