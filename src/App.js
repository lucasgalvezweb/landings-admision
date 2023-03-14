import {
  Routes,
  Route
} from 'react-router-dom';

import Admision from './pages/landings/Admision';

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Admision />} />
        <Route path='/landings/admision' element={<Admision />} />
      </Routes>
    </>
  );
}

export default App;
