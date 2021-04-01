import React from 'react';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Demo from './pages/chaitra/Demo'
import Page1 from './pages/nikita/Page1'



function App() {
  return (
  <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/chaitra">chaitra</Link>s
            </li>
            <li>
              <Link to="/nikita" >nikitas</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/chaitra" component={Demo} />
          <Route path="/nikita" exact component={Page1} />
        </Switch>
      </div>
    </Router>
  );
}




export default App;
