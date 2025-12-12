import './theme/global.css';
import Navbar from './Components/nav-bar/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>   
    <Navbar/>   
    </BrowserRouter>
  )
}

export default App
