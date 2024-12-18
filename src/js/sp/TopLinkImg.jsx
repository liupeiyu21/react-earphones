import SpLink from '../../assets/sp-toplink.png'

function TopLinkImg() {
    return(
        <>
        <div className='sp-link-img'>
            <div className='sp-new-img'>
                <img src={SpLink} alt="イヤホンの写真" />
                <p>新着</p>
            </div>
            <div className='sp-old-img'>
                <img src={SpLink} alt="イヤホンの写真" />
                <p>中古</p>
            </div>
            <div className='sp-second-img'>
                <img src={SpLink} alt="イヤホンの写真" />
                <p>買取</p>
            </div>
            
        </div>
        </>
    )
}

export default TopLinkImg;