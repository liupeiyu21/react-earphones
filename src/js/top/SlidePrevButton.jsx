import { useSwiper } from "swiper/react";
import OldPreButton from '../../assets/OldPreButton.png'

export const SlidePrevButton = () => {
    const swiper = useSwiper();
    return(
      
        <img src={OldPreButton} alt="前に行く" onClick={() => swiper.slidePrev()}/>
    )
}
