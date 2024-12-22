import ToastContainers from "./Utils/ToastContainer";
import PageNotFound404 from "./Errors/PageNotFound404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./Pages/Base";
import Home from "./Pages/Home";
import Manue from "./Pages/Manue";
import Cart from "./Pages/Cart";


function App() {
  return (
    <>
      <BrowserRouter>

        {/* ToastContainer */}
        <ToastContainers />

        {/* Routes */}
        <Routes>

          {/* Web Routes */}
          <Route path='/' element={<Base><Home/></Base>} />
          <Route path='/manue' element={<Base><Manue />  </Base>} />
          <Route path='/cart' element={<Base><Cart/></Base>} />

          <Route path='*' element={<PageNotFound404 />} />

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
