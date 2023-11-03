import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Create from './Pages/Create';
import Read from './Pages/Read';
import Update from './Pages/Update';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/read/:id' element={<Read/>}></Route>
      <Route path='/update/:id' element={<Update/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
