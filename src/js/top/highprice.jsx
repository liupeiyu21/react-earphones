
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";


import Tophighprice from '../../assets/top-highprice.png'
import '../../css/HighPrice.css'
import { SlideNextButton } from "./SlideNextButton";
import { SlidePrevButton } from "./SlidePrevButton";
const data = ["Slide 1", "Slide 2", "Slide 3", "Slide 4","Slide 5","Slide 6","Slide 7","Slide 8"] ;


function HighPrice() {
  return (
    <>
    <div className="old-items">
       <h2>高価買取中</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Pagination]}
        pagination={{
          type: "fraction",
        }}
      >
        <div className="old-items-card">
          {data.map((d) => (
            <SwiperSlide>
            <img src={Tophighprice} alt="買取商品の画像" />
            <p className="old-brand">ブランド名</p>
            <p className="old-name">商品の名前</p>
            <p className="old-status">最高買取金額</p>
            <p className="old-price">¥500,000</p>
            </SwiperSlide>
          ))}
        </div>
          <div className="old-item-btn">
              <SlidePrevButton />
              <SlideNextButton />
        </div>
      </Swiper>
      
        <button className="old-btn">売れる価格をチェックする ＞</button>
      
     </div>
    </>
  );
}

export default HighPrice;









  