import { useEffect,useState } from 'react'
import '../css/App.css'


import Header from './comment/header'
import Footer from './comment/footer'
import { Slider } from './top/fasview'

import RecentProducts from './top/recentlychecked'

import Products from './top/products/products'



function App() {


  return (
    <>
     <Header />
    <Slider />
    <div className='repr'>
      <RecentProducts />
      <Products />
    </div>
  
     <Footer />
     
    </>
  )
};

export default App
