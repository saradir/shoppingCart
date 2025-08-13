import { Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Shop from './pages/Shop';
import Navbar from './components/Navbar'
import './App.css'; 

function App(){
  return (
    <div className='container'>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
    </div>

  )
}

export default App;