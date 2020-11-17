
import {   Route, Switch } from 'react-router-dom';
import './App.css';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import Reservation from './pages/Reservation';
import Footer from './components/Footer';
import ScrollToTop from './helpers/scroltop'

function App() {
  return (
 
    <div className="App container-fluid  p-0">
      <TopBar />
        <ScrollToTop >
          <Switch>
            <Route exact path="/"  component={Home} />
            <Route exact path="/reservation/:id" component={Reservation} />
          </Switch>
        </ScrollToTop>
       <Footer />
      
    </div>
   

  );
}

export default App;
