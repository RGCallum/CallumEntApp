import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Employees from './Employees';




const EmployeeStyles = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 600px;
  height: 600px;
  background: rgb(43, 172, 174, 0.6);
  border-radius: 2px;
  border: inset 5;
  margin: 10px;
  
  button {
    position: absolute;
    bottom: 5px;
    right: 200px;
    color: white;
    background-color: red;
    border-radius: 5px;
  }
  .button2{
    position: absolute;
    top: 20px;
    left: 10px;
    color: blue; 
  }
  input,
  
  textarea {
      height: 90px;
    background-color: transparent;
    border: none;
     
  }
  input {
    height: 30%;
    
    font-size: 1.3rem;

  }
  textarea {
    height: 70%;

  }
  img{
   max-width: 250px;
       
  }
`


const EmployeesContainerStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-content: center;
  background-color: rgba(232, 232, 232, 0.653); 
`

const NameNButtonStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-content: center;
  
`

class Profile extends Component {
    state = {
        employee: {},
        employeename: '',
        password: '',
        email: '',
        bio: '',
        image: '',
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
        console.log(res.data)
        this.setState({ employee: this.state.employee })
            })
    }

    render() {

        return (
            <div>
  
                    <NameNButtonStyle>
                     <h1>{this.state.employee.employeename}'s Profile </h1>
                        <br />
                    </NameNButtonStyle>

                    <div>Type in field to edit
                <EmployeesContainerStyle>


                    <EmployeeStyles>

                        <input
                            onBlur={() => this.handleUpdate()}
                            onChange={(event) => this.handleChange(event)}
                            type="text" name="employeename" placeholder={this.state.employee.employeename}
                            value={this.state.employee.employeename}
                        />
                        <input
                            onBlur={() => this.handleUpdate()}
                            onChange={(event) => this.handleChange(event)}
                            name="image" placeholder='Change Photo'
                            // value={this.state.employee.image} 
                        />   
                        <img src={this.state.employee.image} alt="employee pic" />

                        <input
                            onBlur={() => this.handleUpdate()}
                            onChange={(event) => this.handleChange(event)}
                            type='password' placeholder='Change Password'
                            // value={this.state.employee.password} 
                            name="password" 
                        />                   

                        <input
                            onBlur={() => this.handleUpdate()}
                            onChange={(event) => this.handleChange(event)}
                            name="email" placeholder='Email'
                            value={this.state.employee.email} 
                        />
                        <textarea
                            onBlur={() => this.handleUpdate()}
                            onChange={this.handleChange}
                            name="bio" placeholder='Your Bio'
                            value={this.state.employee.bio} 
                        />
                        
                        <Link to={`/employees`}> 
                        <button onClick={this.handleDelete}>Delete Employee</button>
                        </Link> 

                    </EmployeeStyles>
                        </EmployeesContainerStyle>
                    </div>
 
                    Profile
                
                </div>
                )
            }
        }
export default Profile
