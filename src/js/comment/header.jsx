
import logoTop from '../../assets/logoTop.png'
import searchIcon from '../../assets/search-icon.png'
import loginIcon from '../../assets/login-icon.png'
import favoriteIcon from '../../assets/favorite-icon.png'
import cardIcon from '../../assets/card-icon.png'
import '../../css/header.css'














export default function Header() {

  // const [menuBtn ,setMenuBtn]= useState(false);

  // const toggleMenu = () => {
  //   setMenuBtn(!menuBtn);
  // };

    return (
      <>
      <nav>
        <div className='logo'>        
          <h1>
            <img src={logoTop} alt="サイトlogoの画像" />
          </h1>
          <p className='logo-text'>世界中のイヤホン・ヘッドホンが試聴・買取・購入できる専門店</p>
        </div>
        <ul>
          <li><button  className='menu-button'>新品</button></li>
          <li><button>中古</button></li>
          <li><button>買取</button></li>
          <li><button>修理・自作</button></li>
          <li><button>カスタムIEM</button></li>
          <li><button>店舗一覧</button></li>
        </ul>
        <div className='headIcon'>
          <div className='searchIcon'>
            <img src={searchIcon} alt="探すアイコン" />
            <p>検索</p>
          </div>
          <div className='loginIcon'>
            <img src={loginIcon} alt="ログインのアイコン" />
            <p>ログイン</p>
          </div>
          <div className='favoriteIcon'> 
            <img src={favoriteIcon} alt="お気に入りのアイコン" />
            <p>お気に入り</p>
         </div>
         <div className='cardIcon'>
         <img src={cardIcon} alt="カードのアイコン" />
         <p>カード</p>
         </div>
        </div>
      </nav>


      <div className='navCategory'>
        <div className='wireless'>
          <h3>ワイヤレス</h3>
          <ul>
            <li><a href="">完全ワイヤレスイヤホン</a></li>
            <li><a href="">左右一体型ワイヤレス
            イヤホン</a></li>
            <li><a href="">ワイヤレスヘッドホン</a></li>
            <li><a href="">Bluetoothケーブル</a></li>
            <li><a href="">骨伝導型</a></li>
            <li><a href="">通話用ヘッドセット</a></li>
            <li><a href="">Bluetoothレシーバー</a></li>
            <li><a href="">Bluetoothトランス
            ミッター</a></li>
          </ul>
        </div>

        <div className='wiredear'>
        <h3>有線イヤホン</h3>
          <ul>
            <li><a href="">カナル型</a></li>
            <li><a href="">インナーイヤー型</a></li>
            <li><a href="">イヤーハンガー</a></li>
            <li><a href="">モニターイヤホン</a></li>
            <li><a href="">骨伝導型</a></li>
            <li><a href="">マイク付き</a></li>
            <li><a href="">オーダーメイド
            イヤホン</a></li>
            <li><a href="">耳をふさがない
            有線イヤホン</a></li>
          </ul>
        </div>

        <div className='wiredhead'>
          <h3>有線ヘッドホン</h3>
          <ul>
            <li><a href="">アラウンドイヤー/
            オーバーイヤー型</a></li>
            <li><a href="">オンイヤー型</a></li>
            <li><a href="">子供向けヘッドホン</a></li>
            <li><a href="">通話用ヘッドホン</a></li>
            <li><a href="">モニターヘッドホン</a></li>
            <li><a href="">DJヘッドホン</a></li>
            <li><a href="">ケーブル着脱可能モデル</a></li>
          </ul>
        </div>

        <div className='gaming'>
          <h3>ゲーミング</h3>
          <ul>
            <li><a href="">ゲーミングヘッドセット</a></li>
            <li><a href="">ゲーミングイヤホン</a></li>
            <li><a href="">マイク</a></li>
            <li><a href="">ゲーミングアンプ</a></li>
            <li><a href="">スピーカー</a></li>
          </ul>
        </div>

        <div className='player'>
          <h3>プレイヤー</h3>
          <ul>
            <li><a href="">ポーラブルプレイヤー</a></li>
            <li><a href="">CDプレイヤー</a></li>
            <li><a href="">ネットワークプレイヤー</a></li>
            <li><a href="">レコードプレイヤー</a></li>
          </ul>
        </div>

        <div className='amp-dac'>
          <h3>AMP・DAC</h3>
          <ul>
            <li><a href="">ワイヤレス対応</a></li>
            <li><a href="">ポーラブル</a></li>
            <li><a href="">据え置き</a></li>
          </ul>
        </div>

        <div className='cable'>
          <h3>ケーブル</h3>
          <ul>
            <li><a href="">イヤホン用ケーブル</a></li>
            <li><a href="">ヘッドホン用ケーブル</a></li>
            <li><a href="">ワイヤレスケーブル</a></li>
            <li><a href="">機器接続用オーディオ
            ケーブル</a></li>
            <li><a href="">変換アダプター</a></li>
            <li><a href="">延長ケーブル</a></li>
          </ul>
        </div>

        <div className='speaker'>
          <h3>スピーカ</h3>
          <ul>
            <li><a href="">デスクトップスピーカ</a></li>
            <li><a href="">ワイヤレススピーカ</a></li>
            <li><a href="">ウェアエアブルスピーカ</a></li>
            <li><a href="">スマートスピーカ</a></li>
            <li><a href="">サウンドバー</a></li>
            <li><a href="">コンポ</a></li>
          </ul>
        </div>

        <div className='accessories'>
          <h3>アクセサリ</h3>
          <ul>
            <li><a href="">イヤーピース</a></li>
            <li><a href="">イヤホンアクセサリ</a></li>
            <li><a href="">AirPodsアクセサリ</a></li>
            <li><a href="">変換アダプター/変換機</a></li>
            <li><a href="">ヘッドホンアクセサリ</a></li>
            <li><a href="">メンテナンスグッズ</a></li>
            <li><a href="">スマホアクセサリ</a></li>
            <li><a href="">耳栓/イヤーマフ</a></li>
            <li><a href="">雑貨</a></li>
            <li><a href="">スマホ用変換</a></li>
            <li><a href="">音質改善/ノイズ防止</a></li>
            <li><a href="">充電器・電源ケーブル</a></li>
            <li><a href="">ケース・フィルム</a></li>
            <li><a href="">アンプアクセサリ</a></li>
          </ul>
        </div>
      </div>

      </>
    );
  }