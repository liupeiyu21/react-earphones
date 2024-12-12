
import React, { useState } from "react"
import '../../moneySearchcss/SearchForm.css'



function SearchForm() {
    const [ keyword, setKeyword ] = useState("");
    const [ category, setCategory ] = useState("");
    const [ brand, setBrand ] = useState("");

    const handleReset = (e) => {
        setKeyword("");
        setCategory("");
        setBrand("");
    }

    return(
        <>
            <form className="formContainer">
                
            
                <div className="inputGroup">
                    <label>キーワード</label>
                    <input 
                    type="text" 
                    placeholder="キーワードを入力する"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    />
                </div>

                <div className="inputGroup">
                    <label >カテゴリー</label>
                    <select 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">選択してください</option>
                        <option value="wireless">ワイヤレス</option>
                        <option value="wiredear">有線イヤホン</option>
                        <option value="wierdhead">有線ヘッドホン</option>
                    </select>
                </div>

                <div className="inputGroup">
                    <label>ブランド</label>
                    <select 
                    value={brand}
                    onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">選択してください</option>
                        <option value="airpods">Airpods</option>
                        <option value="sony">SONY</option>
                        <option value="sennheiser">SENNHEISER</option>
                    </select>
                </div>


                <div>
                    <button onClick={handleReset}>
                        条件をリセット
                    </button>
                    <button type="submit">
                        検索
                    </button>
                </div>
            </form>
        </>
    )
}

export default SearchForm;