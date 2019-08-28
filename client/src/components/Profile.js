import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Employee from './Employees';




const EmployeeStyles = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: column;
  
  // background: rgb(43, 172, 174, 0.6);
 
  
  button {
    position: absolute;
    color: white;
    background-color: red;
    border-radius: 5px;
    padding: 10px;
  }

 
  
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

const NameNButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: helvetica;
h1, h2{
  font-weight: 500;

}
  h3{
    font-weight: 200;

  }
  button {
    position: absolute;
    color: white;
    background-color: red;
    border-radius: 5px;
    padding: 10px;
    margin-left: -11%;
  }
  input{
    background: rgba(28, 147, 145, 0.2);

  }
  label{
    font-size: 12px;
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

        <NameNButtonStyle>
          <br/>
         Edit Employee info below <br/>
         All changes are auto saved
          <h2> 👤 {this.state.employee.employeename}</h2>
          <label htmlFor="employeename" >Update Name: </label>

          <input
            onBlur={() => this.handleUpdate()}
            onChange={(event) => this.handleChange(event)}
            type="text" name="employeename" placeholder='Employee Name'
            value={this.state.employee.employeename}
          />
          <h2> 💳 ID: {this.state.employee.idnumber} </h2>
          <label htmlFor="idnumber">Update ID Number: </label>

          <input
            onBlur={() => this.handleUpdate()}
            onChange={(event) => this.handleChange(event)}
            type='text' placeholder='Employee ID'
            value={this.state.employee.idnumber}
            name="idnumber"
          />
          <h2> ✉️ Email: {this.state.employee.email}</h2>
          <label htmlFor="email">Update Email: </label>

          <input
            onBlur={() => this.handleUpdate()}
            onChange={(event) => this.handleChange(event)}
            type='text' name="email" placeholder='Employee Email'
            value={this.state.employee.email}
          />
          <h2> 📱 Phone: {this.state.employee.phone} </h2>
          <label htmlFor="phone">Update Phone: </label>

          <input
            onBlur={() => this.handleUpdate()}
            onChange={this.handleChange}
            type='text' name="phone" placeholder='Employee Phone'
            value={this.state.employee.phone}
          />


          <br /> <br />
          <a href={`/employees`}>
                <button className='noprint' onClick={e =>
                  window.confirm("Are you sure you want to delete this employee? All their invoices will be deleted as well!") &&
                  this.handleDelete(e)}> ⛔️ Delete {this.state.employee.employeename} from directory</button>
              </a>
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
