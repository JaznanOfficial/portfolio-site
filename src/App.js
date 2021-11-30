
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Blogs from "./Components/Blogs/Blogs";
import Contact from "./Components/ContactMe/Contact";
import Footer from "./Components/Footer/Footer";
import Home from './Components/Home/Home';
import Navigation from "./Components/Home/Navigation/Navigation";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navigation></Navigation>
        <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>
          <Route exact path='home' element={<Home></Home>}></Route>
          <Route exact path='contact' element={<Contact></Contact>}></Route>
          <Route exact path='blogs' element={<Blogs></Blogs>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
