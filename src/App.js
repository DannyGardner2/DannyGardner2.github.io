import './App.css';
import Header from './components/Header';
import MainPage from './components/MainPage';
import MyProjects from './components/MyProjects';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <MainPage />
      <MyProjects />
    </div>
  );
}

export default App;
