import { Route, Routes } from "react-router-dom";
import General from "./components/General";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Shop from "./pages/shop/Shop";
import Contact from "./pages/contact/Contact";

const App = () => {
  return <>
    <Routes>
      <Route element={<General/>}>
      <Route index element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Route>
    </Routes>
  </>;
};

export default App;

