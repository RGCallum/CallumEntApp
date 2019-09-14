import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Invoices from './components/Invoices'
import Employees from './components/Employees'
import AllClient from './components/AllClient'
import EmployeeShow from './components/EmployeeShow';
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import styled from 'styled-components'




class App extends Component {

  render() {
    return (
      <Router>
        <div>
          
          {/* <NavBar /> */}
          <Switch>
            <Route exact path="/employees" component={Employees}/>
            <Route exact path="/employees/:employeeId/invoices/:invoiceId" component={Invoices}/>
            <Route exact path="/employees/:employeeId" component={EmployeeShow}/>
            <Route exact path="/allClients/:allClientsId" component={AllClient}/>
            <Route exact path="/employees/:employeeId/profile" component={Profile}/>
            <Route exact path="/signup" component={SignUp}/>
      
            <Route path="/" component={Home}/>

          </Switch>
          
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
