import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPhoto from './Components/AddPhoto';
import SearchPhoto from './Components/SearchPhoto';
import DeletePhoto from './Components/DeletePhoto';
import ViewAllPhoto from './Components/ViewAllPhoto';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddPhoto/>} />
      <Route path='/Search' element={<SearchPhoto/>} />
      <Route path='/Delete' element={<DeletePhoto/>} />
      <Route path='/View' element={<ViewAllPhoto/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
