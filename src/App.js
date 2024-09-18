
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './componnent/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
