


import { Routes, Route} from "react-router-dom"


import Top from './top/Top'
import '../topcss/App.css'
import '../topcss/Guidance.css'

import { MoneySearch } from './MoneySearch/MoneySearch'

function App() {


  return (
    <>
    
    <Routes>
      <Route path='/' element= { <Top /> } />
      <Route path="/買取金額を調べる" element= { <MoneySearch />} />
    </Routes>
    
   
    </>
  )
};

export default App
