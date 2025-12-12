import './theme/global.css';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './Pages/home-page/HomePage';

function App() {
  return (
    <BrowserRouter>   
      <HomePage/>
    </BrowserRouter>
  )
}

export default App
