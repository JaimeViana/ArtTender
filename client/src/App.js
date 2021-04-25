import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import Home from './components/Home';
import Info from './components/Info';
import Detail from './components/Detail';
import Navbar from './components/Navbar';
import { DataProvider } from './components/DataProvider';
import Footer from './components/Footer';


function App() {
  return (
    <DataProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/info">
            <Info />
          </Route>
          <Route path="/print/:id">
            <Detail />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </DataProvider>
  );
}

export default App;
