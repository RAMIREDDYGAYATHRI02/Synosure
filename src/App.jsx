import Cards from '../src/cards';
import Event from './event';

import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Cards />} />
      <Route path="/event" element={<Event />} />
    </Routes>
 </BrowserRouter>
    </>
  )
}
export default App
