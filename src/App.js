import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import './App.css';
import Welcome from './pages/welcome';
import Home from './pages/home';


function App() {
  return (
    <Router>
       <Routes>
         <Route path='/' element={<Welcome/>}/>
         <Route path='/home' element={<Home/>}/>
       </Routes>
    </Router>
  );
}

export default App;
