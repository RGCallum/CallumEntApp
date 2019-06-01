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
        <br/>
          <h1>Featured Filmmakers: </h1>
<br/>
          {this.state.users.map((user) => (
            <div key={user._id}>

              <UserContainer>
                <Link to={`/users/${user._id}`}> 
                <h2>{user.username}</h2>  <br/>
                <ProImg><img src={user.image} alt="profile pic"/></ProImg>
                  <br />
                </Link>
                <h5> {user.bio}</h5> 
                <br />
              </UserContainer>

            </div>

          ))} <br/>

          <h3>Sign-Up</h3>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="username">User Name: </label>
              <input onChange={this.handleChange} value={this.state.newUser.username} type="text" name="username" />
            </div>
            <div>
              <label htmlFor="password">Password: </label>
              <input onChange={this.handleChange} value={this.state.newUser.password} type="password" name="password" />
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <input onChange={this.handleChange} value={this.state.newUser.email} type="text" name="email" />
            </div>
            <div>
              <label htmlFor="bio">Bio: </label>
              <input onChange={this.handleChange} value={this.state.newUser.bio} type="text" name="bio" />
            </div>
            <div>
              <label htmlFor="image">Image: </label>
              <input onChange={this.handleChange} value={this.state.newUser.image} type="text" name="image" />
            </div>
            <div>
              <label htmlFor="films">Films: </label>
              <input onChange={this.handleChange} value={this.state.newUser.films} type="text" name="films" />
            </div>
            <button type="submit">Create User</button>
          </form>
        </BkgdColors>
      </div>
    );
  }
}

export default User;