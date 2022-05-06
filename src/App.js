import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home/Home';
import Login from './pages/login/Login/Login';
import Register from './pages/login/Register/Register';
import Header from './pages/shared/Header/Header';
import RequireAuth from './pages/login/RequireAuth/RequireAuth';
import Footer from './pages/shared/Footer/Footer';
import Inventory from './pages/Inventory/Inventory';
import ManageInventory from './pages/ManageInventory/ManageInventory';
import UpdateProduct from './pages/UpdateProduct/UpdateProduct';
import AddNewItem from './pages/AddNewItem/AddNewItem';
import MyItems from './pages/MyItems/MyItems';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/inventory/:fruitId' element={<RequireAuth><Inventory></Inventory></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/manage-inventory' element={<RequireAuth><ManageInventory></ManageInventory></RequireAuth>}></Route>
        <Route path='/update-data/:fruitId' element={<RequireAuth><UpdateProduct></UpdateProduct></RequireAuth>}></Route>
        <Route path='/add-new-item' element={<RequireAuth><AddNewItem></AddNewItem></RequireAuth>}></Route>
        <Route path='/myitems' element={<RequireAuth><MyItems></MyItems></RequireAuth>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
