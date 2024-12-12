import '../../moneySearchcss/BreadList.css'
import { Link  } from 'react-router-dom';
function BreadList() {
    return(
        <ul className="breadlist">
            <li className='breadlist-top'>
             <Link to="/" >Top</Link>  
            </li>
            <li>&gt;</li>
            <li>買取金額を調べる</li>
        </ul>
    )
}

export default BreadList;