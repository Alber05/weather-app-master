import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ApiContextProvider from './context/ApiContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApiContextProvider>
    <App />
  </ApiContextProvider>
)
