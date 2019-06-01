import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Films from './components/Films'
import Users from './components/Users'
import Info from './components/Info'
import UserShow from './components/UserShow';
import infoShow from './components/infoShow';
import Profile from './components/Profile';
import SignUp from './components/SignUp';







class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/users" component={Users}/>
            <Route exact path="/films/:filmId" component={Films}/>
            <Route exact path="/users/:userId" component={UserShow}/>
            <Route exact path="/infos/:infoId" component={Info}/>
            <Route exact path='/api/films/:filmId/infoId' component={infoShow}/>
            <Route exact path="/users/:userId/profile/" component={Profile}/>
            <Route exact path="/signup" component={SignUp}/>


            
            <Route path="/" component={Home}/>

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
