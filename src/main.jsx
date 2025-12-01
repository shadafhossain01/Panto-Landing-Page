import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.jsx'
import ThemeContext from './context/ThemeContext.jsx';
import CartContext from './context/CartContext.jsx';

createRoot(document.getElementById("root")).render(
  <CartContext>
    <ThemeContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeContext>
  </CartContext>
);
