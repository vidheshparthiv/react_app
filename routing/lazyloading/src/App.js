import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { Suspense } from 'react';

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));  


function App() {
  return (
    <div>
  
        <Link to="/home">Home </Link>
        <Link to="/about">About </Link>
        <Link to ="/contact">contact</Link>

      <h1>hi i am your laptop</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="./home" element={<Home/>}/>
        <Route path="./about" element={<About/>}/>
        <Route path="./contact" element={<Contact/>}/>
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;
