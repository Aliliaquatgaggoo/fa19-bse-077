import './App.css';

import Home from './materials/Home';
import About from './materials/About';
import Shop from './materials/Shop';
import Contact from './materials/Contact';
import Login from './materials/Login';
import Wish from './materials/Wish';
import Shopping from './materials/Shopping';
import Screen from './materials/Screen'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/product/:_id' element={<Screen/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
     <Route path='/wish' element={<Wish/>}/>
      <Route path='/shopping' element={<Shopping/>}/>


    </Routes>
   
    </div>
    </Router>

    
  );
}

export default App;
