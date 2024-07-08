import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Utama from './Components/Utama.jsx'
import IndukAyam from './Pages/Induk-ayam.jsx'
import Navbar from './Components/Navbar.jsx'
import Sidebar from './Components/SideBar.jsx'
import Layout from './Components/Layout.jsx'
import Button from './Components/Button.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
)