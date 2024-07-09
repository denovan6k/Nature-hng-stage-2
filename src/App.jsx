import React from 'react'
// import ProductCard from './pages/pageData/products/ProductCard'
// import ChartPage from './pages/ChartPage'
import Checkout from './pages/Checkout'
import LandingPage from './pages/LandingPage'
import ChartPage from './pages/ChartPage'
// import ChartDelivery from './pages/pageData/chart/ChartDelivery'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
const App = () => {
  return (
    <div>

      {/* <ChartPage/> */}
     {/* <ChartDelivery/> */}
     {/* <ProductCard/> */}
     {/* <Checkout/> */}
     <Router>
     
        
     <Routes>
     {/* {isLoggedIn && <div></div> <Sidebar/> } */}
       <Route path="/" element={<LandingPage/>} />
    <Route path="/cart" element={<ChartPage/>} />
    
    {/* <Route path="/Dashboard" element={<Dashboard/>} /> */}
    <Route path="/checkout" element={<Checkout/>} />
    
    </Routes>
    
    
  {/* </div> */}
</Router>
    </div>
  )
}

export default App