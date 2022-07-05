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
      <div className='main'>

      <Routes>
        {/* <Route path="/" element={<Header />}/> */}
        <Route path="/MyPortfolio" element={<MainPage />}/>
        <Route path="/MyPortfolio/stuff" element={<MyProjects />}/>
        <Route path="/MyPortfolio/about" element={<About />}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
