
import './App.css';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { animal } from './data.js';

function App() {
  return (
    <div className="App">
      <Header name='name' type='type' />
      <Main animals = {animal} />
      <Footer />
    </div>
  );
}

export default App;
