import topBanner1 from '../../assets/top-banner1.png'
import topBanner2 from '../../assets/top-banner2.png'
import topBanner3 from '../../assets/top-banner3.png'
import topBanner4 from '../../assets/top-banner4.png'
import topBanner5 from '../../assets/top-banner5.png'
import topBanner6 from '../../assets/top-banner6.png'

import '../../topcss/Banner.css'


function Banner(){

    return(
        <>
        <div className="banner">
            <img src={topBanner1} alt="バナーです" />
            <img src={topBanner2} alt="バナーです" />
            <img src={topBanner3} alt="バナーです" />
            <img src={topBanner4} alt="バナーです" />
            <img src={topBanner5} alt="バナーです" />
            <img src={topBanner6} alt="バナーです" />
            <img src={topBanner6} alt="バナーです" />
            <img src={topBanner6} alt="バナーです" />
        </div>
        </>
    )
}

export default Banner;