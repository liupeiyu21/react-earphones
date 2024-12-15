import '../../moneySearchcss/BrandsSearch.css'

const brandData = [
    {
        id:"0",
        english:"Airpods",
        japan:"エアポッド"
    },
    {
        id:"1",
        english:"Technics",
        japan:"テクニクス"
    },
    {
        id:"2",
        english:"水月雨",
        japan:"MoonDrop"
    },
    {
        id:"3",
        english:"SONY",
        japan:"ソニー"
    },
    {
        id:"4",
        english:"SENNHEISER",
        japan:"ゼンハイザー"
    },
    {
        id:"5",
        english:"DENON",
        japan:"デノン"
    },
    {
        id:"6",
        english:"YAMAHA",
        japan:"ヤマハ"
    },
    {
        id:"7",
        english:"Jabra",
        japan:"ジャブラ"
    },
    {
        id:"8",
        english:"JVC",
        japan:"ジェイブイシー"
    },
    {
        id:"9",
        english:"ag",
        japan:"エージー"
    },
    {
        id:"10",
        english:"NUARL",
        japan:"ヌアール"
    },
    {
        id:"11",
        english:"Acoustune",
        japan:"アコースチューン"
    },
    {
        id:"12",
        english:"intime",
        japan:"アンティーム"
    }   
];

function BrandList ({english, japan }) {
    return(
        <>
        <h5>{english}</h5>
        <p>{japan}</p>
        </>
    )
}


function BrandsSearch() {
    return(
        <>
        <div className="brand-search">
            <h3>ブランドから探す</h3>
            <h4>ブランド一覧から探す&#9654;</h4>
            <h4>人気ブランドから探す</h4>
        </div>
        {brandData.map((ba) =>(
              <div 
              className='brand-search-list'
              key={ba.id}
              >
            <BrandList 
            english={ba.english}
            japan={ba.japan}
            />
              </div>
        ) )}
        </>
    )
}

export default BrandsSearch;