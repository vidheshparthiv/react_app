import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LifeCycle2 from './component/LifeCycle2.jsx'
import { HelloWorld } from './component/HelloWorld.jsx'
import TimerApp from './component/TimerApp.jsx'
import KillSwitch from './component/killSwitch.jsx'
import UseEffectMethod from './component/UseEffectMethod.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <UseEffectMethod/>
  </StrictMode>
)
