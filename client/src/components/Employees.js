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
align-content: center ;

*{
    margin: 0;
}
img{
  border: inset 2px;
}


// animation: color-change-5x 30s linear infinite alternate both;

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
width: 30vw;
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

const ProImg = styled.div`
display: flex ;
flex-direction: row ;
flex-wrap: wrap ;
justify-content: center ;
align-items: center ;
align-content: center ;
img{
  max-width: 150px;
  border-radius: 500px;    
 }

`

class Employee extends Component {
  state = {
    employees: [],
    newEmployee: {
      employeename: '',
      idnumber: '',
      email: '',
      phone: '',
      
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
        <br/>
          <h1>My Employees</h1>
<br/>
          {this.state.employees.map((employee) => (
            <div key={employee._id}>

              <EmployeeContainer>
                <Link to={`/employees/${employee._id}`}> 
                <h2>{employee.employeename}</h2>  
                
                </Link>
                <h5> {employee.idnumber}</h5> 
                <h5> {employee.email}</h5> 
                <h5> {employee.phone}</h5> 
              </EmployeeContainer>

            </div>

          ))} <br/>

          <h3>Sign-Up</h3>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="employeename">Employee Name: </label>
              <input onChange={this.handleChange} value={this.state.newEmployee.employeename} type="text" name="employeename" />
            </div>
            <div>
              <label htmlFor="idnumber">ID Number: </label>
              <input onChange={this.handleChange} value={this.state.newEmployee.password} type="password" name="password" />
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <input onChange={this.handleChange} value={this.state.newEmployee.email} type="text" name="email" />
            </div>
            <div>
              <label htmlFor="phone">Phone: </label>
              <input onChange={this.handleChange} value={this.state.newEmployee.bio} type="text" name="bio" />
            </div>

            <div>
              <label htmlFor="invoices">Invoices: </label>
              <input onChange={this.handleChange} value={this.state.newEmployee.invoices} type="text" name="invoices" />
            </div>
            <button type="submit">Create Employee</button>
          </form>
        </BkgdColors>
      </div>
    );
  }

}

export default Employee;