import React from 'react'
import ReactDOM from 'react-dom/client'
import Apps from './Apps.jsx'
import './index.css'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:5177/'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Apps />
  </React.StrictMode>,
)
