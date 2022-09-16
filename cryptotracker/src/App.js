
import './App.css';
import Header from './components/Header';
import Homepage from './Pages/Homepage';
import Coinpage from './Pages/Coinpage';

import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
    
    <Header />

    
    <Router>
      <Route path='/' component={Homepage}/>
     
    </Router>

    </>

  );
}

export default App;
