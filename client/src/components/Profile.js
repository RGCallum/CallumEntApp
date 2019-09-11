import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Employee from './Employees';
import {FaMinusCircle, FaUser, FaEnvelope, FaMobileAlt, FaAddressCard, FaPlusCircle, FaFolder, FaFileInvoiceDollar } from 'react-icons/fa';
import NavBar from '../components/NavBar'



const NameContainer = styled.div`
padding-top: 20px;

h1{
  font-family: helvetica;
font-weight: 500;
color: rgb(43, 172, 174);
font-size: 30px;
text-align: center;
}
display:flex;
justify-content: center;
`

const EmployeeStyles = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: column;

  // background: rgb(43, 172, 174, 0.6);
  input {
    background: rgb(43, 172, 174, 0.6);

    font-size: 15px;

  }
 
  img{
   max-width: 250px;
       
  }
  font-weight: 200;

`


const EmployeesContainerStyle = styled.div`
  // display: flex;
  // justify-content: space-evenly;
  // flex-wrap: wrap;
  // align-content: center;
  // background-color: rgba(232, 232, 232, 0.653); 
  font-family: helvetica;
  font-weight: 200;

`
const Toptext = styled.div`
font-family: helvetica;
font-size: 10px;
display:flex;
justify-content: center;
`

const NameNButtonStyle = styled.div`
font-weight: 200;
box-shadow: 1px 1px 5px rgba(0,0,0, 0.4);
padding-left:10%;
padding-right:10%;
display:flex;
justify-content: space-around;
  flex-direction: column;
  // align-items: center;
  // width: 50vw;
  font-family: helvetica;
h1{
  font-weight: 500;

}
h3{
  color: rgb(43, 172, 174);
  font-weight: 500;
margin-bottom: 5px;
// text-shadow: 1px 1px 1px rgba(0,0,0, 0.1);

}
  button {
    // position: absolute;
    color: white;
    background-color: red;
    border-radius: 5px;
    padding: 10px;
  }
  button:hover{
    background-color: white;
    color:red;
    cursor:pointer;
  
  }
  input{
    background: rgba(28, 147, 145, 0.2);
    border-radius: 3px;
    border: .5px solid rgba(0,0,0, 0.2);
    padding: 5px;

  }
  label{
    font-size: 12px;
  }
  
`
const InvoiceBtn = styled.div`
display: flex;
justify-content: center;
color: #d090c3;
font-weight: 300;
font-family: helvetica;

button{
  background: #d090c3;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 300;
}
button:hover{
  background: white;
  cursor:pointer;
  color: #d090c3;
  
}
a{
  
    text-decoration: none;
    // color: white;
}
a:visited{
    color: #d090c3;
}
a:hover{
  color: blue;
}
.icons{
  padding-top: 3px;
}
`

class Profile extends Component {
  state = {
    employee: {},
    employeename: '',
    idnumber: '',
    email: '',
    phone: '',
    
  }

  componentDidMount() {
    const employeeId = this.props.match.params.employeeId
    axios.get(`/api/employees/${employeeId}`).then(res => {
      console.log(res.data)
      this.setState({
        employee: res.data,
      })
    })
  }

  handleDelete = employeeId => {
    if (this.props.match.params.employeeId) {
      const employeeId = this.props.match.params.employeeId;
      console.log(employeeId);
      axios.delete(`/api/employees/${employeeId}`)
        .then(res => {
          this.setState({ employee: res.data.employee });
          this.props.history.push(`/employees/`)

        })
    }
  }

  handleChange = (event) => {
    //take it
    const employee = { ...this.state.employee }
    //change it
    const name = event.target.name
    const value = event.target.value
    employee[name] = value
    //put it back
    this.setState({ employee })
  }

  handleUpdate = () => {
    const employeeId = this.props.match.params.employeeId
    const updatedEmployee = this.state.employee
    console.log(employeeId)
    axios.patch(`/api/employees/${employeeId}`, updatedEmployee)
      .then((res) => {
        console.log(res.data, 'updates')
        this.setState({ employee: this.state.employee })
      })
      .catch(console.error)
  }

  render() {

    return (
      <div>
        <NavBar />
        <NameContainer>
        <br /><h1>
        {this.state.employee.employeename}'s Profile</h1>
        </NameContainer>
        <InvoiceBtn>

          <br />
          <Link to={`/employees/${this.props.match.params.employeeId}`}>
       <button><FaFileInvoiceDollar className='icons'/> Invoices</button> </Link></InvoiceBtn>
        <br />    <Toptext><div>(All changes are auto saved)</div></Toptext>
        <br />
        <NameNButtonStyle>

          <h3><FaUser/> {this.state.employee.employeename}</h3>
          <label htmlFor="employeename" >Update Name: </label>
          
          <input
            onBlur={() => this.handleUpdate()}
            onChange={(event) => this.handleChange(event)}
            type="text" name="employeename" placeholder='Employee Name'
            value={this.state.employee.employeename}
          />
          <h3> <FaAddressCard/> {this.state.employee.idnumber} </h3>
          <label htmlFor="idnumber">Update ID Number: </label>

          <input
            onBlur={() => this.handleUpdate()}
            onChange={(event) => this.handleChange(event)}
            type='text' placeholder='Employee ID'
            value={this.state.employee.idnumber}
            name="idnumber"
          />
          <h3> <FaEnvelope/> {this.state.employee.email}</h3>
          <label htmlFor="email">Update Email: </label>

          <input
            onBlur={() => this.handleUpdate()}
            onChange={(event) => this.handleChange(event)}
            type='text' name="email" placeholder='Employee Email'
            value={this.state.employee.email}
          />
          <h3><FaMobileAlt/> {this.state.employee.phone} </h3>
          <label htmlFor="phone">Update Phone: </label>

          <input
            onBlur={() => this.handleUpdate()}
            onChange={this.handleChange}
            type='text' name="phone" placeholder='Employee Phone'
            value={this.state.employee.phone}
          />


          <br />
          <a href={`/employees`}>
            <button className='noprint' onClick={e =>
              window.confirm("Are you sure you want to delete this employee? All their invoices will be deleted as well!") &&
              this.handleDelete(e)}> <FaMinusCircle/> Delete {this.state.employee.employeename} from directory</button>
          </a>
          <br />
        </NameNButtonStyle>

        <div>
          <EmployeesContainerStyle>

            <EmployeeStyles>
              {/* <label htmlFor="employeename" >Employee Name: </label>

              <input
                onBlur={() => this.handleUpdate()}
                onChange={(event) => this.handleChange(event)}
                type="text" name="employeename" placeholder={this.state.employee.employeename}
                value={this.state.employee.employeename}
              />
              <label htmlFor="idnumber">ID Number: </label>

              <input
                onBlur={() => this.handleUpdate()}
                onChange={(event) => this.handleChange(event)}
                type='text' placeholder='idnumber'
                value={this.state.employee.idnumber}
                name="idnumber"
              />
              <label htmlFor="email">Email: </label>

              <input
                onBlur={() => this.handleUpdate()}
                onChange={(event) => this.handleChange(event)}
                type='text' name="email" placeholder='Email'
                value={this.state.employee.email}
              />
              <label htmlFor="phone">Phone: </label>

              <input
                onBlur={() => this.handleUpdate()}
                onChange={this.handleChange}
                type='text' name="phone" placeholder='phone'
                value={this.state.employee.phone}
              /> */}

              {/* <Link to={`/employees`}> 
                        <button className='noprint' onClick={e =>
                                            window.confirm("Are you sure you want to delete this employee? All their invoices will be deleted as well!") &&
                                            this.handleDelete(e)}>Delete Employee</button>
                        </Link>  */}


            </EmployeeStyles>

          </EmployeesContainerStyle>
        </div>

        
      </div>
    )
  }
}
export default Profile
