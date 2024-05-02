import './App.css';
import FAQ from './components/faq/FAQ';
import About from './pages/about/About';
import Areas from './pages/areas/Areas';
import Attorneys from './pages/attroneys/Attorneys';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Areas/>
      <Attorneys/>
      <FAQ/>
    </div>
  );
}

export default App;
