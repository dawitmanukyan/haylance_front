import Login from './pages/Login';
import Signup from './pages/Signup';
import Header from './components/Header';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Identify from './pages/Identify';

function App() {
  return (
    <div className='App'>
      <Header />
      <header className='App-header'>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/signin' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/identify' element={<Identify />} />
      </Routes>
      </header>
      <Footer />
    </div>
  );
}

export default App;
