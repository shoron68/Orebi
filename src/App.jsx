
import Layout from "./components/Layout"
import Home from "./components/pages/Home"
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route}from "react-router-dom"
import Shop from "./components/pages/Shop"


const router=createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
      <Route path="/" element={<Home/>}> </Route>
      <Route path="/shop" element={<Shop/>}> </Route>
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
