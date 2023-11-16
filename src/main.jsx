import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import SideBarContext from './ContextApi/SideBarContext.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SideBarContext>
        <App />
      </SideBarContext>

    </BrowserRouter>
  </React.StrictMode>,
)
