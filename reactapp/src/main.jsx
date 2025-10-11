import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UseEffect from './component/UseEffect.jsx'
import PropsDemo from './component/PropsDemo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PropsDemo/>
  </StrictMode>,
)
