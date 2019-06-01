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
const UserContainer = styled.div`

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

class User extends Component {
    state = {
      users: [],
      newUser: {
        username: '',
        password: '',
        email: '',
        bio: '',
        image: '',
      }
    }
  
    handleChange = (event) => {
      const updatedNewUser = { ...this.state.newUser }
  
      updatedNewUser[event.target.name] = event.target.value
      this.setState({ newUser: updatedNewUser })
    }
  
    handleSubmit = (event) => {
      event.preventDefault()
  
      axios.post('/api/users', this.state.newUser).then(res => {
        console.log(res.data)
        this.props.history.push(`/users/${res.data._id}`)
      })
  
    }
  
    getAllUsers = () => {
      axios.get('/api/users').then((res) => {
        this.setState({ users: res.data })
      })
    }
  
    componentDidMount() {
      this.getAllUsers()
    }
  
    render() {
      return (
        <div>
 
 <BkgdColors>
 <UserContainer>
            <h1>Sign-Up to be a featured Filmmaker</h1>
            <br/>
            <h2>   <form onSubmit={this.handleSubmit}>
            <br/>

              <div>
                <label htmlFor="username">User Name: </label>
                <input onChange={this.handleChange} value={this.state.newUser.username} type="text" name="username" />
              </div>
              <br/>

              <div>
                <label htmlFor="password">Password: </label>
                <input onChange={this.handleChange} value={this.state.newUser.password} type="password" name="password" />
              </div>
              <br/>

              <div>
                <label htmlFor="email">Email: </label>
                <input onChange={this.handleChange} value={this.state.newUser.email} type="text" name="email" />
              </div>
              <br/>

              <div>
                <label htmlFor="bio">Bio: </label>
                <input onChange={this.handleChange} value={this.state.newUser.bio} type="text" name="bio" />
              </div>
              <br/>

              <div>
                <label htmlFor="image">Image: </label>
                <input onChange={this.handleChange} value={this.state.newUser.image} type="text" name="image" />
              </div>
              <br/>

              <div>
                <label htmlFor="films">Films: </label>
                <input onChange={this.handleChange} value={this.state.newUser.films} type="text" name="films" />
              </div>
              <br/>
              <button type="submit">Create User</button>
            </form></h2>
            </UserContainer>
            </BkgdColors>
        </div>
      )} }
  export default User;