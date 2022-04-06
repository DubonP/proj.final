import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./Pages/Home";
import Initial from "./Pages/Initial";
import NotFound	from "./Pages/404";
import Details from "./Pages/Details";
import NavBar from "./Pages/NavBar";
import Footer from "./Pages/Footer";
import Cart from "./Pages/Cart";
import Fav from "./Pages/Favoritos";


export default function App(){
  return(

    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/details" element={<Details/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/fav" element={<Fav/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

