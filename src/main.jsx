import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MyApi } from './components/MyApi.jsx'

createRoot(document.getElementById('root')).render(
  <MyApi>
    <App />
  </MyApi>
)
