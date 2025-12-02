import { BrowserRouter , Routes,Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Cars from './pages/Cars'

function App() {
  return (
  <BrowserRouter>
 <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<AboutUs/>}/>
    <Route path='/contact' element={<ContactUs/>}/>
    <Route path='/viewcars' element={<Cars/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
