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
width: 100vw;
margin-left: -10px;
margin-top: -10px;
height: 100vh;
form{
  justify-content: center;
}
input{
  background: rgba(151, 240, 240, 0.2);
  border:.5px solid rgba(0,0,0, 0.2);
border-radius: 2px;
padding: 5px;
width: 100%;

}
input:focus, textarea:focus{
  background: rgba(255, 212, 39, 0.2);

}
.required:after {
  content: "*";
  color: red;
}

h1{
  color: rgb(28, 147, 145);
// text-shadow: 1px 1px 2px rgba(0,0,0, .5);
display: flex;
justify-content: center;

}

h2, h3{
  color: rgb(28, 147, 145);
  text-align: left;
  // text-align: center;

}

a{
  margin-left: 10%;
  text-decoration: none;
  color: rgb(28, 147, 145);
}
 a:hover{
  color: blue;
  h3{
    color: blue;
  }
}
a:visited{
}

button{
background: #6A7FDB;
color: white;
border-radius: 5px;
font-size: 16px;
font-weight: 300;
cursor: pointer;
}
button:hover{
  background: white;
  
      color: #6A7FDB;
  
}
.addemp{
  background-color: rgba(255,255,255,0.95);
padding-left: 10px;
padding-right: 20px;

border-top: inset #C0C0C0 .5px;
color: black;
text-shadow: none;
h2, h3{
  text-align: center;
}
}

.overlay{
  background-color:  rgba(255,255,255,0.95);
  border-top: inset #C0C0C0 .5px;
  // width: 40vw;

}



`
const EmployeeContainer = styled.div`
border-top: inset #C0C0C0 .5px;
// background-color: rgba(255,255,255,0.6);
// border-radius: 5px;
display: flex ;
flex-direction: column ;
flex-wrap: wrap ;
align-items: left ;
padding: 10px;
color: black;
text-shadow: none;
font-size: 15px;
#link{
  // margin-left: 35%;

}

`





class Employee extends Component {
  state = {
    employees: [],
    newEmployee: {
      index: '',

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
          
<br/><br/> 
          {this.state.employees.map((employee, index) => ( 
           
           
            <div key={employee._id}>

              <EmployeeContainer>
             
              {/* <h5> ID: {employee.idnumber}</h5>  */}

                <Link id="link" to={`/employees/${employee._id}/profile`}> 
               <h3> {index + 1}. {employee.employeename} </h3>
                
                </Link> 
                <Link id="link" to={`/employees/${employee._id}`}> 
          📂 Invoices</Link>
                {/* <h5> {employee.email}</h5> 
                <h5> {employee.phone}</h5>  */}
              </EmployeeContainer>

            </div>
            
          ))} 

          <form onSubmit={this.handleSubmit} className='addemp' id='employeename'>
        <br/>  <h2 id='empText'>Add New Employees</h2> 

<h3 id='empText'> 👩🏾‍🦱 👨🏽‍🦳 👩🏾‍🦳 🧔🏾 👱🏽‍♀️ 👨🏾‍ 👵🏾  👨🏿‍🦱 👨🏼‍ 👩🏾 👴🏾 👩🏻</h3>
            <div >
           <th>  <label className='required' htmlFor="employeename" >Employee Name: </label></th> 
              <input onChange={this.handleChange} value={this.state.newEmployee.employeename} type="text" name="employeename"  required='true'/>
            </div>
            <div>
             <th> <label htmlFor="idnumber">ID Number: </label> </th>
              <input onChange={this.handleChange} value={this.state.newEmployee.idnumber} type="idnumber" name="idnumber" />
            </div>
            <div>
             <th> <label htmlFor="email">Email: </label> </th>
              <input onChange={this.handleChange} value={this.state.newEmployee.email} type="text" name="email" />
            </div>
            <div>
             <th> <label htmlFor="phone">Phone: </label> </th>
              <input onChange={this.handleChange} value={this.state.newEmployee.phone} type="text" name="phone" />
            </div>
            <br/>
            {/* <div>
              <label htmlFor="invoices">Invoices: </label>
              <input onChange={this.handleChange} value={this.state.newEmployee.invoices} type="text" name="invoices" />
            </div> */}
            <button type="submit">+ Add Employee</button>
          </form>
          </div>
        </BkgdColors>
      </div>
    );
  }

}

export default Employee;