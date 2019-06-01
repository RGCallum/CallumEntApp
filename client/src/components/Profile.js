import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Users from './Users';




const UserStyles = styled.div`
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


const UsersContainerStyle = styled.div`
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
        user: {},
        username: '',
        password: '',
        email: '',
        bio: '',
        image: '',
    }

    componentDidMount() {
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}`).then(res => {
            console.log(res.data)
            this.setState({
                user: res.data,
            })
        })
    }

    handleDelete = userId => {
       if (this.props.match.params.userId) {   
          const userId = this.props.match.params.userId;  
          console.log(userId);
          axios.delete(`/api/users/${userId}`)
          .then(res => {this.setState({ user: res.data.user });
        this.props.history.push(`/users/`)

    }) }
  }

    handleChange = (event) => {
        //take it
        const user = {...this.state.user}
        //change it
        const name = event.target.name
        const value = event.target.value    
        user[name] = value
        //put it back
        this.setState({ user })
    }

    handleUpdate = () => {
        const userId = this.props.match.params.id
        const updatedUser = this.state.user
        console.log(userId)
        axios.patch(`/api/users/${userId}`, updatedUser)
        .then((res) => {
        console.log(res.data)
        this.setState({ user: this.state.user })
            })
    }

    render() {

        return (
            <div>
  
                    <NameNButtonStyle>
                     <h1>{this.state.user.username}'s Profile </h1>
                        <br />
                    </NameNButtonStyle>

                    <div>Type in field to edit
                <UsersContainerStyle>


                    <UserStyles>

                        <input
                            onBlur={() => this.handleUpdate()}
                            onChange={(event) => this.handleChange(event)}
                            type="text" name="username" placeholder={this.state.user.username}
                            value={this.state.user.username}
                        />
                        <input
                            onBlur={() => this.handleUpdate()}
                            onChange={(event) => this.handleChange(event)}
                            name="image" placeholder='Change Photo'
                            // value={this.state.user.image} 
                        />   
                        <img src={this.state.user.image} alt="user pic" />

                        <input
                            onBlur={() => this.handleUpdate()}
                            onChange={(event) => this.handleChange(event)}
                            type='password' placeholder='Change Password'
                            // value={this.state.user.password} 
                            name="password" 
                        />                   

                        <input
                            onBlur={() => this.handleUpdate()}
                            onChange={(event) => this.handleChange(event)}
                            name="email" placeholder='Email'
                            value={this.state.user.email} 
                        />
                        <textarea
                            onBlur={() => this.handleUpdate()}
                            onChange={this.handleChange}
                            name="bio" placeholder='Your Bio'
                            value={this.state.user.bio} 
                        />
                        
                        <Link to={`/users`}> 
                        <button onClick={this.handleDelete}>Delete User</button>
                        </Link> 

                    </UserStyles>
                        </UsersContainerStyle>
                    </div>
 
                    Profile
                
                </div>
                )
            }
        }
export default Profile
