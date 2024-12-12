


import { Routes, Route} from "react-router-dom"


import Top from './top/Top'
import '../topcss/App.css'
import '../topcss/Guidance.css'

import { MoneySearch } from './MoneySearch/MoneySearch'
import MoreInformation from "./MoneySearch/MoreInformation/MoreInformation"


function App() {


  return (
    <>
    
    <Routes>
      <Route path='/' element= { <Top /> } />
      <Route path="/買取金額を調べる" element= { <MoneySearch />} />
        <Route path="/買取商品の詳細" element={ <MoreInformation />} />
      
    </Routes>
    
   
    </>
  )
};

export default App
