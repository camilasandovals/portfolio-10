import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import About from './components/About';
import Header from './components/Header';
import Gallery from "./components/Gallery"
import Skill from './components/Skill';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Gallery />
      <Skill />
      <Footer />
    </div>
  );
}

export default App;
