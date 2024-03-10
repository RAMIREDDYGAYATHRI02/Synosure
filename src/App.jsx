import Cards from '../src/cards';
import Hackathon from '../src/pages/Hackathon';
import Caperwithciper from '../src/pages/Caperwithciper';
import  BrainBattleBlitz from '../src/pages/BrainBattleBlitz';
import  Dazzlecoding from '../src/pages/Dazzlecoding';
import  Innovator from '../src/pages/Innovator';
import  Mistrysolving from '../src/pages/Mistrysolving';
import  Querycrackers from '../src/pages/Querycrackers';
import  Techquiz from '../src/pages/Techquiz';
import  Webwreathe from '../src/pages/Webwreathe';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Cards />} />
      <Route path="/Hackathon" element={<Hackathon />} />
      <Route path="/Caperwithciper" element={<Caperwithciper/>} />
      <Route path="/BrainBattleBlitz" element={<BrainBattleBlitz />} />
      <Route path="/Dazzlecoding" element={<Dazzlecoding/>} />
      <Route path="/Innovator" element={<Innovator/>} />
      <Route path="/Mistrysolving" element={<Mistrysolving/>} />
      <Route path="/Querycrackers" element={<Querycrackers/>} />
      <Route path="/Techquiz" element={<Techquiz />} />
      <Route path="/Webwreathe" element={< Webwreathe/>} />
    </Routes>
 </BrowserRouter>
    </>
  )
}
export default App
