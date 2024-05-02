import './App.css';
import FAQ from './components/faq/FAQ';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
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
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
