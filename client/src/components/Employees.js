import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaFileInvoiceDollar, FaFolder, FaPlusCircle} from 'react-icons/fa';
import NavBar from '../components/NavBar'


const BkgdColors = styled.div`


*{
  margin: 0;
}
font-size: 12px;
color: white;
display: flex ;
justify-content: center ;
font-family: helvetica;
// background-image: url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80');

background-color: white;
background-size: cover;
width: 100vw;
margin-left: -10px;
margin-top: 0px;
padding-top: 20px;
height: 100%;

form{
  justify-content: center;
  padding-bottom: 10px;
  box-shadow: 1px 1px 5px rgba(28, 147, 145, 0.4);
  background-color:  rgba(255,255,255,0.95);
  
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
  color: rgb(43, 172, 174);
// text-shadow: .5px .5px .5px gray;
display: flex;
justify-content: center;
font-weight: 500;
}
span{
  color: white;
  background-color: rgba(28, 147, 145, 0.5); 
  padding: 5px 9px 5px 9px;
  border-radius: 50px;
}

h3{
  color: rgb(60, 60, 60);
  text-align: left;
font-weight: 540;
}
h2{
  color: rgb(60, 60, 60);
  font-weight: 540;
font-size: 14px;
}
label{
  font-size: 12px;
  color: rgb(60, 60, 60);
font-weight: 400;
}

a{
  // margin-left: 10%;
  text-decoration: none;
  color: rgb(28, 147, 145);
  font-size: 12px;

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
  // background-color: rgba(255,255,255,0.95);
padding-left: 10px;
padding-right: 20px;


color: black;
text-shadow: none;
h2, h3{
  text-align: center;
}
}

.overlay{
  // background-color:  rgba(255,255,255,0.95);
  // border-top: inset #C0C0C0 .5px;
  // width: 40vw;


}

@media only screen and (max-width: 414px){
  form{
    // padding-bottom: 100px;
  
  }
}
.icons{
  padding-top: 3px;
}
#linkNum{
  display: flex;
  flex-direction: row;
}
`
const EmployeeContainer = styled.div`
background-color:  white;
border-bottom: inset #C0C0C0 .5px;
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


const EmployeeOutline = styled.div`
box-shadow: 1px 1px 5px rgba(28, 147, 145, 0.4);
// border: solid black .5px;

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
        <NavBar />
        <BkgdColors>
          <div className="overlay">
          <h1>
            {/* 👩🏾‍🦱👨🏽‍🦳👩🏾‍🦳🧔🏾👱🏽‍♀️👨🏾‍👵🏾👨🏿‍🦱👨🏼‍👩🏾👴🏾👩🏻  */}
            <br/>Employee Directory</h1>
          
<br/><br/> 
<EmployeeOutline>

          {this.state.employees.map((employee, index) => ( 
           
           
            <div key={employee._id}>

              <EmployeeContainer>
             
              {/* <h5> ID: {employee.idnumber}</h5>  */}

                <Link id="linkNum" to={`/employees/${employee._id}/profile`}> 
                <span>{index + 1}</span>&#160;&#160; <h3>{employee.employeename} </h3>
                
                </Link> 
                <Link id="link" to={`/employees/${employee._id}`}> 
          {/* 📂 */}
          &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; < FaFileInvoiceDollar/>Invoices</Link>
                {/* <h5> {employee.email}</h5> 
                <h5> {employee.phone}</h5>  */}
              </EmployeeContainer>

            </div>
            
          ))} 
</EmployeeOutline>
<br/><br/>
          <form onSubmit={this.handleSubmit} className='addemp' id='employeename'>
        <br/>  <h2 id='empText'>Add New Employees</h2> 

<h3 id='empText'> 👩🏾‍🦱 👨🏽‍🦳 👩🏾‍🦳 🧔🏾 👱🏽‍♀️ 👨🏾‍ 👵🏾  👨🏿‍🦱 👨🏼‍ 👩🏾 👴🏾 👩🏻</h3> <br/>
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
            <button type="submit"><FaPlusCircle className='icons'/> Add Employee</button>
          </form>
          </div>
        </BkgdColors>
      </div>
    )
  }

}

export default Employee;