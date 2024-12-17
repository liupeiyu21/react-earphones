import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/swiper-bundle.css'
import '../../topcss/FasView.css'

import Fasview from '../../assets/fasview-banner.png'
import Fasviewpre from '../../assets/fasview-pre.png'
import Fasviwenext from '../../assets/fasview-next.png'


export const FasView = () => {

    return (
        <>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          // centeredSlides={true}
          breakpoints={{
            640: {
              slidesPerView:1,
              spaceBetween:10,
              
            },
            768: {
              slidesPerView:3,
              spaceBetween: 20,  
            },
            1024:{
              slidesPerView:5,
              spaceBetween:20,
            }
          }}
       
          navigation = {{
            nextEl: '.pre',
            prevEl: '.next'
          }}

          //
          freeMode={{enabled:true}

          }
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop = {{loop: true}}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className='swiper-slide-content'>
                 <img src={Fasview} alt="バナーです" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='swiper-slide-content'>
                 <img src={Fasview} alt="バナーです" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='swiper-slide-content'>
                 <img src={Fasview} alt="バナーです" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='swiper-slide-content'>
                 <img src={Fasview} alt="バナーです" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='swiper-slide-content'>
                 <img src={Fasview} alt="バナーです" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='swiper-slide-content'>
                 <img src={Fasview} alt="バナーです" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='swiper-slide-content'>
                 <img src={Fasview} alt="バナーです" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='swiper-slide-content'>
                 <img src={Fasview} alt="バナーです" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='swiper-slide-content'>
                 <img src={Fasview} alt="バナーです" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='swiper-slide-content'>
                 <img src={Fasview} alt="バナーです" />
            </div>
          </SwiperSlide>
        <div className='swiper-movebtn'>
            <div className='pre'><img src={Fasviewpre} alt="" /></div>
            <div className='next'><img src={Fasviwenext} alt="" /></div>
        </div>
        
        </Swiper>

        </>
      );
}






































// // // Import Swiper React components
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import Fasview from '../../assets/fasview-banner.png'
// // import { Navigation, Pagination, Scrollbar } from "swiper/modules";

// // // Import Swiper styles
// // import 'swiper/css';

// //  function FasSwiper(){
// //   return (
// //     <>
// //     <Swiper
// //       spaceBetween={0}
// //       slidesPerView={3}
// //       onSlideChange={() => console.log('slide change')}
// //       onSwiper={(swiper) => console.log(swiper)}
// //       direction="vertical"
// //       loop={true}
// //       modules={[Navigation, Pagination, Scrollbar]}
// //       pagination={{ clickable: true }}
// //       navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
// //       scrollbar={{ draggable: true }}
      
// //     >
// //       <SwiperSlide><img src={Fasview} alt="バナーです" /></SwiperSlide>
// //       <SwiperSlide><img src={Fasview} alt="バナーです" /></SwiperSlide>
// //       <SwiperSlide><img src={Fasview} alt="バナーです" /></SwiperSlide>
// //       <SwiperSlide><img src={Fasview} alt="バナーです" /></SwiperSlide>
// //       <SwiperSlide><img src={Fasview} alt="バナーです" /></SwiperSlide>
// //       <SwiperSlide><img src={Fasview} alt="バナーです" /></SwiperSlide>
// //       <SwiperSlide><img src={Fasview} alt="バナーです" /></SwiperSlide>
// //       <SwiperSlide><img src={Fasview} alt="バナーです" /></SwiperSlide>
// //       <SwiperSlide><img src={Fasview} alt="バナーです" /></SwiperSlide>
// //       <SwiperSlide><img src={Fasview} alt="バナーです" /></SwiperSlide>
// //     </Swiper>
// //     <div class="swiper-pagination"></div>
// //     <div class="swiper-button-prev"></div>
// //     <div class="swiper-button-next"></div>
// //     </>
// //   );
// // };

// export default FasSwiper