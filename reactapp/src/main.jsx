import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LifeCycle2 from './component/LifeCycle2.jsx'
import { HelloWorld } from './component/HelloWorld.jsx'
import TimerApp from './component/TimerApp.jsx'
import PropsDemo from './component/PropsDemo.jsx'
import UseEffectMethod from './component/UseEffectMethod.jsx'


createRoot(document.getElementById('root')).render(

  <StrictMode>
  <PropsDemo name={[
  { name: "Vidhesh", role: "Developer", salary: 55000 },
  { name: "Parthiv", role: "Designer", salary: 38500 },
  { name: "Rahul", role: "Manager", salary: 66000 },
  { name: "Anu", role: "Intern", salary: 22000 }
]}/>
  </StrictMode>
)
