import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/Services" component={Services}/>
        <Route exact path="/Contact" component={Contact}/>
        <Redirect to='/'/>
      </Switch>
    </>
  );
}


export default App;
