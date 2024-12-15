import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import NewPr from '../../assets/new-products.png'
import { SlideNextButton } from "./SlideNextButton";
import { SlidePrevButton } from "./SlidePrevButton";

import '../../topcss/RecentlySwiper.css'
const data = ["Slide 1", "Slide 2", "Slide 3", "Slide 4","Slide 5","Slide 6","Slide 7","Slide 8"] ;


function RecentlySwiper (){
    return(
        <>
        <div className="recentlycheck">
            <h2>最近チェックした商品</h2>
            <Swiper
                spaceBetween={0}
                slidesPerView={4}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Pagination]}
                pagination={{
                  type: "fraction",
                }}
            >
                <div className="recently-check">
                    {data.map(() => (
                       <SwiperSlide>
                    
                        <img className="check-img" src={NewPr} alt="2" />
                        <p className="check-brand">ブランド名</p>
                        <p className="check-name">商品の名前</p>
                        <p className="check-status">新品</p>
                        <p className="check-price">¥500,000</p>
                      
                       </SwiperSlide> 
                    ))
                    }
                </div>
                <div className="recently-check-btn">
                    <SlidePrevButton />
                    <SlideNextButton />
                </div>
            </Swiper>
        </div>
        </>
    )
}
export default RecentlySwiper;