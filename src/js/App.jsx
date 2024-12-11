


import { Routes, Route} from "react-router-dom"


import Top from './top/top'
import '../css/App.css'
import '../css/guidance.css'

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
