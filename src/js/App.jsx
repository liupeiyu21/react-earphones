import { useEffect,useState } from 'react'
import '../css/App.css'


import Header from './comment/header'
import Footer from './comment/footer'
import { Slider } from './top/fasview'

import RecentProducts from './top/recentlychecked'

import Products from './top/products/products'
import HighProducts from './top/highprice';
import StaffReview from './top/staffreview/staffreview'
import TopUsersReview from './top/UsesrReview/UsersReview'
import ReadingItem from './top/readItem/readItem'
import Recommendation from './top/recommendation'
import News from './top/news'

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
    <StaffReview />
    <TopUsersReview />
    <ReadingItem />
    <Recommendation />
    <News />
     <Footer />
     
    </>
  )
};

export default App
