import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'
function App() {
  let multipage = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/shop' element={<Shop/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={multipage}/>
    </>
  )
}

export default App
