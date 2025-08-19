
import './App.css';
import First from './components/First';
import Fotter from './components/Fotter';
import Header from './components/Header';
import Event from './components/Event';
import Second from './components/Second';
import Third from './components/Third';
import Fourth from './components/Fourth';
import Fifth from './components/Fifth';
import Sixth from './components/Sixth';
import Employee from './components/Employee';
import Product from './components/Product';
import Student from './components/Student';

function App() {
  return (
    <div >
      {/* <h1>Welcome to react First App</h1>
      <p>Working with React is a fun.</p>
      <h3>Testing</h3>
      <h6>Heading</h6> */}
      <Header/>
      <First/>
      <Event/>
      <Second/>
      <Third/>
      <Fourth/>
      <Fifth/>
      <Sixth/>
      <Employee/>
      <Product/>
      <Student/>
      <Fotter/>
    </div>
  );
}

export default App;
