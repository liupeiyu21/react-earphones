import { useState } from "react";
import FavoriteIcon from "../../assets/Favorite-icon.png";
import '../sp/css/HamburgerMenu.css'
import CardIcon from '../../assets/Card-icon.png'


function HamburgerMenu() {

    const [ isOpen, setIsOpen ] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    // カテゴリーの動き
    // const [ categoryOpen, setCategoroyOpen] = useState(false)
    // const toggleNew = () => {
    //     setCategoroyOpen(!categoryOpen)
    // }

    return(

        <>
        <div className="hamburger-menu">
          
            <div className={`header_btn ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className={`line1 ${isOpen ? 'open' : ''}`}></div>
                <div className={`line2 ${isOpen ? 'open' : ''}`}></div>
                <div className={`line3 ${isOpen ? 'open' : ''}`}></div>
            </div>
         
            <img className="cardicon" src={CardIcon} alt="カートのアイコンです。" />
           
        <div className={`menu ${isOpen ? 'open' : ''}`}>

            <div className="menu-btn">
                <button className="menu-btn1">ログイン</button>
                <button className="menu-btn2">新規会員登録</button>
            </div>
            <div className="menu-love">
                <h3>お気に入りアイテム</h3>
                <img src={FavoriteIcon} alt="気に入りのアイコン" />
            </div>
            <h3 className="sp-hamburger-cago">カテゴリから探す</h3>
            <h3>新品</h3>
         
        </div>

    </div>
        
          
      
        </>
    )
}

export default HamburgerMenu





{/* <h3>新品</h3>
<ul>
    <li>新品</li>
    <li>中古</li>
    <li>買取</li>
    <li>修理</li>
    <li>カスタムIEM</li>
    <li>店舗</li>
    <li>ご利用ガイド</li>
    <li>お問い合わせ</li>
</ul>
<h3>中古</h3>
<ul>
    <li>中古ワイヤレス</li>
    <li>中古ヘッドホン</li>
    <li>中古アンプ</li>
    <li>中古スピーカー</li>
    <li>中古イヤホン</li>
    <li>中古プレイヤー</li>
    <li>中古ケーブル</li>
    <li>中古アクセサリ</li>
</ul>
<h3>買取</h3>
<ul>
    <li>買取金額を調べる</li>
    <li>eイヤホンの買取サービス</li>
    <li>無料査定のお申し込み</li>
    <li>買取Q＆A</li>
</ul>
<h3>修理・自作</h3>
    <li>eイヤホンクリニック</li>
    <li>線材</li>
    <li>プラグ</li>
    <li>ジャック</li>
    <li>コネクタ</li>
    <li>収縮チューブ/絶縁キャップ</li>
    <li>自作キット</li>
    <li>はんだ</li>
    <li>ケーブルテスター</li>
    <li>MDR-CD900ST/M1ST用パーツ</li>
    <li>純正交換パーツ</li> */}
  