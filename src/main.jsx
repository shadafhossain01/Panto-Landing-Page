import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.jsx'
import ThemeContext from './context/ThemeContext.jsx';

createRoot(document.getElementById("root")).render(
  <ThemeContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeContext>
);
