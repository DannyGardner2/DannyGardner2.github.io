import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import MainPage from './components/MainPage';
import MyProjects from './components/MyProjects';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Header />}/>
        <Route path="/" element={<MainPage />}/>
        <Route path="/" element={<MyProjects />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
