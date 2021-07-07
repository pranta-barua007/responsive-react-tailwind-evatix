import './App.css';

import {packages} from './mock-data/packages';

import Header from './components/Header';
import Hero from './components/Hero';
import Packages from './components/Packages';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Packages packagesData={packages}/>
    </div>
  );
}

export default App;
