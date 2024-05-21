
import Layout from "./components/Layout"
import Home from "./components/pages/Home"
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route}from "react-router-dom"
import Shop from "./components/pages/Shop"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import Journal from "./components/pages/Journal"
import Products from "./components/pages/Products"
import ProductDetails from "./components/pages/ProductDetails"


const router=createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
      <Route path="/" element={<Home/>}> </Route>
      <Route path="/shop" element={<Shop/>}> </Route>
      <Route path="/shop/:id" element={<ProductDetails/>}> </Route>
      <Route path="/about" element={<About/>}> </Route>
      <Route path="/contact" element={<Contact/>}> </Route>
      <Route path="/journal" element={<Journal/>}> </Route>
      
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
