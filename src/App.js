
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Blogs from "./Components/Blogs/Blogs";
import ContactMe from "./Components/ContactMe/Contact";
import Footer from "./Components/Footer/Footer";
import Home from './Components/Home/Home';
import Navigation from "./Components/Home/Navigation/Navigation";
import AboutMe from "../src/Components/AboutMe/about";

import Porjects from "./Components/Projects/Porjects";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navigation></Navigation>
        <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>
          <Route exact path='home' element={<Home></Home>}></Route>
          <Route exact path='about' element={<AboutMe></AboutMe>}></Route>
          <Route exact path='projects' element={<Porjects></Porjects>}></Route>
          <Route exact path='contact' element={<ContactMe></ContactMe>}></Route>
        
          <Route exact path='blogs' element={<Blogs></Blogs>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
