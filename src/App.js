import './App.css';

import {packages} from './mock-data/packages';

import Header from './components/Header';
import Hero from './components/Hero';
import Packages from './components/Packages';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Packages packagesData={packages}/>
      <Footer />
    </div>
  );
}

export default App;
