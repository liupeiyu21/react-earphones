

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import '../../topcss/ReadingItem.css'
import {SlidePrevButton} from "./SlidePrevButton"
import { SlideNextButton } from "./SlideNextButton"

import ReadItem from '../../assets/top-read-item.png'



const data = ["Slide 1", "Slide 2", "Slide 3", "Slide 4","Slide 5"] ;


function ReadingItem() {
  return (
    <>
    <div className="read-items">
       <h2>e☆イヤホンの読みもの！</h2>
      <Swiper
                breakpoints={{
          375:{
            slidesPerView:1,
            spaceBetween:20,
          },
          768:{
            slidesPerView:2,
            spaceBetween: 20,  
          },
          1024:{
            slidesPerView:3,
            spaceBetween:20, 
          }
        }}
        // spaceBetween={50}
        // slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Pagination]}
        pagination={{
          type: "fraction",
        }}
      >
        <div className="read-items-card">
          {data.map((d) => (
            <SwiperSlide>
            <img src={ReadItem} alt="読み物のバナーです。" />
            <h3 className="read-title">【2024年11月最新】 PS5におすすめのヘッドセット4選</h3>
            <p className="read-sentence">ワイヤレスモデルや3Dオーディオに最適なモデルまでご紹介！</p>
            
         
            </SwiperSlide>
          ))}
        </div>
          <div className="reading-item-btn">
  
              <SlidePrevButton />
              <SlideNextButton />
        
          </div>
      </Swiper>
      
      
     </div>
    </>
  );
}

export default ReadingItem;