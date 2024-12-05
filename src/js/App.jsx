import { useEffect,useState } from 'react'
import '../css/App.css'


import Header from './comment/header'
import Footer from './comment/footer'
import { Slider } from './top/fasview'

import RecentProducts from './top/recentlychecked'

import Products from './top/products/products'
import HighProducts from './top/highprice';



function App() {


  return (
    <>
     <Header />
    <Slider />
    <div className='repr'>
      <RecentProducts />
      <Products />
    </div>
    <HighProducts />
     <Footer />
     
    </>
  )
};

export default App
