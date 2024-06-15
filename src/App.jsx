
import Layout from "./components/Layout"
import Home from "./components/pages/Home"
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route}from "react-router-dom"
import Shop from "./components/pages/Shop"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import Journal from "./components/pages/Journal"
import ProductDetails from "./components/pages/ProductDetails"
import Cart from "./components/pages/Cart"
import Login from "./components/pages/Login"
import SignUp from "./components/pages/SignUp"
import MyAccount from "./components/pages/MyAccount"
import CheckOut from "./components/pages/CheckOut"
import Error404 from "./components/pages/Error404"


const router=createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
      <Route path="/" element={<Home/>}> </Route>
      <Route path="/shop" element={<Shop/>}> </Route>
      <Route path="/shop/:id" element={<ProductDetails/>}> </Route>
      <Route path="/about" element={<About/>}> </Route>
      <Route path="/contact" element={<Contact/>}> </Route>
      <Route path="/journal" element={<Journal/>}> </Route>
      <Route path="/cart" element={<Cart/>}> </Route>
      <Route path="/login" element={<Login/>}> </Route>
      <Route path="/signup" element={<SignUp/>}> </Route>
      <Route path="/myaccount" element={<MyAccount/>}> </Route>
      <Route path="/checkout" element={<CheckOut/>}> </Route>
      <Route path="/404error" element={<Error404/>}> </Route>
      
      
  </Route>
))


function App() {
 

  return (
  <>
  <RouterProvider router={router}></RouterProvider>

  </>
  )
}

export default App
