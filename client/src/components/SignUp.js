import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const BkgdColors = styled.div`
display: flex ;
flex-direction: column ;
flex-wrap: wrap ;
justify-content: center ;
align-items: center ;
align-content: center ;*{
    margin: 0;
}
img{
  border: inset 2px;
}


animation: color-change-5x 30s linear infinite alternate both;

@keyframes color-change-5x {
  0% {
    background: #19dcea;
  }
  25% {
    background: #b22cff;
  }
  50% {
    background: #ea2222;
  }
  75% {
    background: #f5be10;
  }
  100% {
    background: #3bd80d;
  }
}

`
const EmployeeContainer = styled.div`

border: inset #C0C0C0;
background-color: #ffffff70;
width: 50vw;
height: 100vh;
border-radius: 15px;
display: flex ;
flex-direction: column ;
flex-wrap: wrap ;
justify-content: center ;
align-items: center ;
align-content: center ;
padding: 10px;
box-shadow: 1px 1px 1px;
`

class Employee extends Component {
    state = {
      employees: [],
      newEmployee: {
        employeename: '',
        idnumber: '',
        email: '',
        phone: '',
        image: '',
      }
    }
  
    handleChange = (event) => {
      const updatedNewEmployee = { ...this.state.newEmployee }
  
      updatedNewEmployee[event.target.name] = event.target.value
      this.setState({ newEmployee: updatedNewEmployee })
    }
  
    handleSubmit = (event) => {
      event.preventDefault()
  
      axios.post('/api/employees', this.state.newEmployee).then(res => {
        console.log(res.data)
        this.props.history.push(`/employees/${res.data._id}`)
      })
  
    }
  
    getAllEmployees = () => {
      axios.get('/api/employees').then((res) => {
        this.setState({ employees: res.data })
      })
    }
  
    componentDidMount() {
      this.getAllEmployees()
    }
  
    render() {
      return (
        <div>
 
 <BkgdColors>
 <EmployeeContainer>
            <h1>Sign-Up to be a featured Invoicemaker</h1>
            <br/>
            <h2>   <form onSubmit={this.handleSubmit}>
            <br/>

              <div>
                <label htmlFor="employeename">Employee Name: </label>
                <input onChange={this.handleChange} value={this.state.newEmployee.employeename} type="text" name="employeename" />
              </div>
              <br/>

              <div>
                <label htmlFor="idnumber">ID Number: </label>
                <input onChange={this.handleChange} value={this.state.newEmployee.idnumber} type="idnumber" name="idnumber" />
              </div>
              <br/>

              <div>
                <label htmlFor="email">Email: </label>
                <input onChange={this.handleChange} value={this.state.newEmployee.email} type="text" name="email" />
              </div>
              <br/>

              <div>
                <label htmlFor="phone">phone: </label>
                <input onChange={this.handleChange} value={this.state.newEmployee.phone} type="text" name="phone" />
              </div>
              <br/>

              <div>
                <label htmlFor="image">Image: </label>
                <input onChange={this.handleChange} value={this.state.newEmployee.image} type="text" name="image" />
              </div>
              <br/>

              <div>
                <label htmlFor="invoices">Invoices: </label>
                <input onChange={this.handleChange} value={this.state.newEmployee.invoices} type="text" name="invoices" />
              </div>
              <br/>
              <button type="submit">Create Employee</button>
            </form></h2>
            </EmployeeContainer>
            </BkgdColors>
        </div>
      )} }
  export default Employee;