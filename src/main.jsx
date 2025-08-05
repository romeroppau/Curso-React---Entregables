import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css' //se cargan estilos globales
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  //indica a React qur toda la app se va a manejar con rutas declaras <Route/> dentro de App.jsx
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
