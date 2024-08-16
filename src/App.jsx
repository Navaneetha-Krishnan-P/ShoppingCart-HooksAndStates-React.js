import { createContext, useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './header'
import { Home } from './home'
import { Endtext } from './Endtext'
import { About } from './About'
import { Navbar } from './Navbar'
import { Cart } from './Cart'
import "bootstrap" 



export const cartContext = createContext();

function App() {
  const [cart, setCart] = useState([])

  return (
    <cartContext.Provider value={{ cart, setCart }}>

      <BrowserRouter>
        <Navbar cart={cart}/>
        <Routes>
          <Route path="/" element={<><Header/><br/><br/><Home/><Endtext/></>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Cart" element={<Cart/>}></Route>
        </Routes><br/><br/>
      </BrowserRouter>
    </cartContext.Provider>

  )
}

export default App
