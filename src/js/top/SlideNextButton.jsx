import { useSwiper } from "swiper/react";
import OldNextButton from "../../assets/OldNextButton.png"


export const SlideNextButton = () => {
    const swiper = useSwiper();

    return(
     
       
        <img src={OldNextButton} alt="次に行く" onClick={() => swiper.slideNext()}/>
        
    )
}