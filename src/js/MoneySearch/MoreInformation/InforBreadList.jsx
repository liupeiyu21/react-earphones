import '../../../moreInformationcss/InforBreadList.css'
import { Link } from 'react-router-dom';

function InforBreadList () {
    return(
        <>
            <ul className="inforbreadlist">
                <li>Top</li>
                <li>&gt;</li>
                <li><Link to="/買取金額を調べる">買取金額を調べる</Link></li>
                <li>&gt;</li>
                <li>イヤホンの名前</li>
            </ul>
        </>
    )
}

export default InforBreadList;