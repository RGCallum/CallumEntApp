import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Employees from './Employees';




const EmployeeStyles = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: column;
  
  background: rgb(43, 172, 174, 0.6);
  border-radius: 2px;
  border: inset 5;
  margin: 10px;
  
  button {
    position: absolute;
    color: white;
    background-color: red;
    border-radius: 5px;
    padding: 10px;
  }

 
  
  input {
    height: 30%;
    
    font-size: 1.3rem;

  }
  textarea {
    height: 70%;
    background-color: transparent;
    // border: none;
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
h1{
  font-weight: 500;

}
  h2, h3{
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
          .then(res => {this.setState({ employee: res.data.employee });
        this.props.history.push(`/employees/`)

    }) }
  }

    handleChange = (event) => {
        //take it
        const employee = {...this.state.employee}
        //change it
        const name = event.target.name
        const value = event.target.value    
        employee[name] = value
        //put it back
        this.setState({ employee })
    }

    handleUpdate = () => {
        const employeeId = this.props.match.params.id
        const updatedEmployee = this.state.employee
        console.log(employeeId)
        axios.patch(`/api/employees/${employeeId}`, updatedEmployee)
        .then((res) => {
        console.log(res.data, 'updates')
        this.setState({ employee: this.state.employee })
            })
    }

    render() {

        return (
            <div>
  
                    <NameNButtonStyle>
                      <br/>
                     <h1> 👤 {this.state.employee.employeename}</h1>
                     <h2> 💳 ID: {this.state.employee.idnumber} </h2>
                     <h3> ✉️ Email: {this.state.employee.email}</h3>
                     <h3> 📱 Phone: {this.state.employee.phone} </h3>

                   
                     <a href={`/employees`}> 
                        <button className='noprint' onClick={e =>
                                            window.confirm("Are you sure you want to delete this employee? All their invoices will be deleted as well!") &&
                                            this.handleDelete(e)}>Delete {this.state.employee.employeename} from directory</button>
                        </a> 
                        <br /> <br/>
                    </NameNButtonStyle>

                    <div>
                <EmployeesContainerStyle>


                    <EmployeeStyles>

                        {/* <textarea
                            onBlur={() => this.handleUpdate()}
                            onChange={(event) => this.handleChange(event)}
                            type="text" name="employeename" placeholder={this.state.employee.employeename}
                            value={this.state.employee.employeename}
                        />

                        <textarea
                            onBlur={() => this.handleUpdate()}
                            onChange={(event) => this.handleChange(event)}
                            type='text' placeholder='idnumber'
                            value={this.state.employee.idnumber} 
                            name="idnumber" 
                        />                   

                        <textarea
                            onBlur={() => this.handleUpdate()}
                            onChange={(event) => this.handleChange(event)}
                            type='text' name="email" placeholder='Email'
                            value={this.state.employee.email} 
                        />
                        <textarea
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
