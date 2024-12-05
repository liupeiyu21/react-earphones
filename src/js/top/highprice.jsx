import React from "react";


// const highProducts = [
//     {
//       id: 1,
//       brand: "Apple",
//       name: "AirPods Pro MWPP2J/A [美品]",
//       status: "最高買取金額",
//       price: "¥15,700",
//       image : Recentlychecked,
//     },
//     {
//       id: 2,
//       brand: "ANIMA",
//       name: "ANW03 Midnight Grand Orchestra Ver.",
//       status: "最高買取金額",
//       price: "¥25,700",
//       image: Recentlychecked,
//     },
//     {
//       id: 3,
//       brand: "FiiO",
//       name: "BTA30Pro [FiiO-BTA30PRO]",
//       status: "最高買取金額",
//       price: "¥23,700",
//       image: Recentlychecked,
//     },
//     {
//       id: 4,
//       brand: "FiiO",
//       name: "BTA30Pro [FiiO-BTA30PRO]",
//       status: "最高買取金額",
//       price: "¥23,700",
//       image: Recentlychecked,
//     },
// ];






import React, { useState } from "react";
import "./App.css"; // CSSを適用するためのファイルをインポート

// サンプルのアイテムデータ
const items = [
  { id: 1, name: "andme その他アウター", price: "¥8,590", colors: "全4色" },
  { id: 2, name: "andme ブルゾン", price: "¥7,090", colors: "全3色" },
  { id: 3, name: "GIRL パンツドレス", price: "¥18,900", colors: "全3色" },
  { id: 4, name: "CORNERS by KR ワンピース", price: "¥6,490", colors: "全4色" },
  { id: 5, name: "nano・universe ダウンジャケット", price: "¥60,500", colors: "全3色" },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0); // 現在のスライドインデックス

  // スライドを右に移動
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  // スライドを左に移動
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <h1>クーポン対象の人気アイテム</h1>
      <div className="slider">
        {/* 左矢印ボタン */}
        <button className="arrow-button left" onClick={handlePrev}>
          ◀
        </button>

        {/* 現在のアイテムを表示 */}
        <div className="slider-item">
          <h2>{items[currentIndex].name}</h2>
          <p>{items[currentIndex].price}</p>
          <p>{items[currentIndex].colors}</p>
        </div>

        {/* 右矢印ボタン */}
        <button className="arrow-button right" onClick={handleNext}>
          ▶
        </button>
      </div>
    </div>
  );
}

export default App;



.slider-container {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .slider {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    position: relative;
  }
  
  .slider-item {
    flex: 1;
    text-align: center;
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .arrow-button {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .arrow-button:hover {
    background-color: #0056b3;
  }
  
  .arrow-button.left {
    position: absolute;
    left: -50px;
  }
  
  .arrow-button.right {
    position: absolute;
    right: -50px;
  }
  