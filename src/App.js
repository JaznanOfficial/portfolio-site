
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Blogs from "./Components/Blogs/Blogs";
import Home from './Components/Home/Home';
import Navigation from "./Components/Home/Navigation/Navigation";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navigation></Navigation>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='home' element={<Home></Home>}></Route>
          <Route path='blogs' element={<Blogs></Blogs>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
