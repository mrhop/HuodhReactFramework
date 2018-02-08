import React, {Component} from 'react';
import ExampleContainer from './Example'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li><Link to="/">Example 1</Link></li>
            <li><Link to="/example2">Example 2</Link></li>
          </ul>
          <br/>
          <Switch>
            <Route exact path="/" component={ExampleContainer}/>
            <Route path="/example2" component={ExampleContainer}/>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
