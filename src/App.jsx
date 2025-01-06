import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'
function App() {
  let multipage = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route path='/' element={<Home/>}></Route>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={multipage}/>
    </>
  )
}

export default App
