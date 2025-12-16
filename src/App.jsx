import './theme/global.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './Pages/home-page/HomePage';
import Courses from './Pages/courses/courses';

function App() {
  return (
    <BrowserRouter>  
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/courses" elemnt={<Courses/>}></Route>
      </Routes> 
    </BrowserRouter>
  )
}

export default App
