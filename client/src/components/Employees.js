import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const BkgdColors = styled.div`
*{
  margin: 0;
}
font-size: 12px;
color: white;
display: flex ;
justify-content: center ;
font-family: helvetica;
background-image: url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80');
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;

h1{
  color: rgb(28, 147, 145);
text-shadow: 1px 1px 1px black;
display: flex;
justify-content: center;
}
a{
  text-decoration: none;
  color: rgb(28, 147, 145);
}
a:hover{
  color: blue;
}
a:visited{
}


.addemp{
  background-color: rgba(255,255,255,0.94);
padding: 20px;
border: inset #C0C0C0;
color: black;
text-shadow: none;
}
.overlay{
  background-color:  rgba(255,255,255,0.94);
  border: inset #C0C0C0 1px;

}



`
const EmployeeContainer = styled.div`
border: inset #C0C0C0;
background-color: rgba(255,255,255,0.94);
// width: 30vw;
// border-radius: 5px;
display: flex ;
flex-direction: column ;
flex-wrap: wrap ;
justify-content: center ;
align-items: center ;
align-content: center ;
padding: 10px;
box-shadow: 1px 1px 1px;
color: black;
text-shadow: none;

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
      <div >
        <BkgdColors>
          <div className="overlay">
          <h1>
            {/* 👩🏾‍🦱👨🏽‍🦳👩🏾‍🦳🧔🏾👱🏽‍♀️👨🏾‍👵🏾👨🏿‍🦱👨🏼‍👩🏾👴🏾👩🏻  */}
            <br/>Employee Directory</h1>
          
<br/>
          {this.state.employees.map((employee) => ( 
            <div key={employee._id}>

              <EmployeeContainer>
                
                <Link to={`/employees/${employee._id}`}> 
                <h3>{employee.employeename}</h3>  
                
                </Link>
                <h5> {employee.idnumber}</h5> 
                <h5> {employee.email}</h5> 
                <h5> {employee.phone}</h5> 
              </EmployeeContainer>

            </div>

          ))} <br/>

          <form onSubmit={this.handleSubmit} className='addemp' id='employeename'>
          <h3>Add New Employee</h3> 
You can also use emojis <br/>
<h3> 👩🏾‍🦱 👨🏽‍🦳 👩🏾‍🦳 🧔🏾 👱🏽‍♀️ 👨🏾‍ 👵🏾 👨🏿‍🦱 👨🏼‍ 👩🏾 👴🏾 👩🏻 😎 😃<br/></h3>
            <div>
              <label htmlFor="employeename" >Employee Name: </label>
              <input onChange={this.handleChange} value={this.state.newEmployee.employeename} type="text" name="employeename" />
            </div>
            <div>
              <label htmlFor="idnumber">ID Number: </label>
              <input onChange={this.handleChange} value={this.state.newEmployee.idnumber} type="idnumber" name="idnumber" />
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <input onChange={this.handleChange} value={this.state.newEmployee.email} type="text" name="email" />
            </div>
            <div>
              <label htmlFor="phone">Phone: </label>
              <input onChange={this.handleChange} value={this.state.newEmployee.phone} type="text" name="phone" />
            </div>

            {/* <div>
              <label htmlFor="invoices">Invoices: </label>
              <input onChange={this.handleChange} value={this.state.newEmployee.invoices} type="text" name="invoices" />
            </div> */}
            <button type="submit">Create Employee</button>
          </form>
          </div>
        </BkgdColors>
      </div>
    );
  }

}

export default Employee;