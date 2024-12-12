
import React, { useState } from "react";
import '../../moneySearchcss/MoneyCategory.css'

const Category = ( { title, items }) => {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggleCategory = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div onClick={toggleCategory} className="category-open">
                <h3>{title}<span className="isopen">{ isOpen ? '-' : '+' }</span></h3> 
            </div>

            {isOpen && (
                <div>
                    {items.map((item, index) => (
                        <div key={index} className="ca-item">
                            {item}
                        </div>
                    ))}
                </div>
            )
            }

        </>
    )
}

function MoneyCategory() {
    return(
        <>  
            <Category title="カテゴリーから探す" items={['ワイヤレス(100)','有線イヤホン(900)','有線ヘッドホン(100)','ゲーミング(200)','プレイヤー(233)','アンプ(333)','ケーブル(444)','スピーカー(323)','自作パーツ(123)','アクセサリ(324)']} />
        </>
    )
}

export default MoneyCategory;