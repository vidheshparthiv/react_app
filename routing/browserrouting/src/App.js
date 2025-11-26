
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import College from './Pages/College';  
import Navbar from './components/Navbar';
import Student from './Pages/Student';
import Department from './Pages/Department';
import Details from './Pages/Details';

function App() {
  return (
    <div className="App">
      <h1>hii </h1>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        {/* nesting of pages */}
        <Route path="/college" element={<College/>}>
          <Route path='/college/student' element={<Student/>}/>we dont have to give /student as it takes it putes / by default
          <Route path='department' element={<Department/>}/>
          <Route path='details' element={<Details/>}/>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
