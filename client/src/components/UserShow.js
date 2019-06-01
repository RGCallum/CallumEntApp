import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import infoShow from './infoShow';




const FilmStyles = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 600px;
  height: 600px;
  background: rgb(43, 172, 174, 0.6);
  border-radius: 2px;
  border: inset 5;
  margin: 10px 0;
  
 

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

   )
  
  }
`

const NewFilmButton = styled.button`
  background: #1d3557;
  color: white;
  font-size: 1.3rem;
  padding: 10px 10px;
  border-radius: 5px;

`

const FilmsContainerStyle = styled.div`
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
  img{
    max-width: 200px;
    max-height: 200px;
        
   }
`

class UserShow extends Component {
    state = {
        user: '',
        films: [],
        newFilm: {
            name: '',
            image: '',
            link: '',
            synopsis: '',
            role: '',
            type: '',
            year: '',
            location: '',
            awards: '',
        }
    }


    componentDidMount() {
        // make an api call to get one single user
        // On the server URL is '/api/users/:userId'
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}`).then(res => {
            console.log(res.data)
            this.setState({
                user: res.data,
                films: res.data.films
            })
        })
    }

    handleCreateNewFilm = () => {
        const userId = this.props.match.params.userId
        const payload = {
            name: 'Film Name',
            image: 'image',
            link: 'link',
            //   info: 'Film Description'

        }
        axios.post(`/api/users/${userId}/films`, payload).then(res => {
            const newFilm = res.data
            const newStateFilms = [...this.state.films, newFilm]
            this.setState({ films: newStateFilms })
        })
    }

    handleDelete = filmId => {
        axios.delete(`/api/films/${filmId}`).then(() => {
            const newFilms = [...this.state.films]
            const filtered = newFilms.filter(film => {
                return film._id !== filmId // ! = =
            })
            this.setState({ films: filtered })
        })
    }



    handleChange = (event, filmId) => {
        const { value, name } = event.target
        const newFilms = [...this.state.films]
        const updatedValue = newFilms.map(film => {
            if (film._id === filmId) {
                film[name] = value
            }
            return film
        })

        this.setState({ films: updatedValue })
    }

    handleUpdate = (filmId) => {
        const filmToUpdate = this.state.films.find(film => {
            return film._id === filmId
        })
        axios.patch(`/api/films/${filmId}`, filmToUpdate).then(() => {
            console.log("Updated Film")
        })
    }

    render() {
        return (
            <div>
                
  
                    
                    <NameNButtonStyle>
                      <h1>{this.state.user.username}'s Films </h1>
                        <img src={this.state.user.image}  alt="film pic" />
                        <br />
                    </NameNButtonStyle>
                    <NewFilmButton onClick={this.handleCreateNewFilm}>
                       Add New Film
                    </NewFilmButton>

                  <Link to={`/users/${this.props.match.params.userId}/profile`} > <button>Edit Profile</button> </Link>

            <div>Type in fields below to edit Film Info
        <FilmsContainerStyle>
            
                    {this.state.films.map(film => {
                        const deleteFilm = () => {

                            return this.handleDelete(film._id)

                        }

                        return (

                            <FilmStyles>

                                <input
                                    onBlur={() => this.handleUpdate(film._id)}
                                    onChange={(event) => this.handleChange(event, film._id)}
                                    type="text" name="name" placeholder='Name'
                                    value={film.name}
                                />

                                <textarea
                                    onBlur={() => this.handleUpdate(film._id)}
                                    onChange={(event) => this.handleChange(event, film._id)}
                                    name="image" placeholder='Photo'
                                />                   <img src={film.image} alt="film pic" />

                                <textarea
                                    onBlur={() => this.handleUpdate(film._id)}
                                    onChange={(event) => this.handleChange(event, film._id)}
                                    name="link"  placeholder='Link to film'
                                />
                                <Link to=''>{film.link}</Link>
                                <textarea
                                    onBlur={() => this.handleUpdate(film._id)}
                                    onChange={(event) => this.handleChange(event, film._id)}
                                    name="synopsis" value={film.synopsis} placeholder='Synopsis'
                                />
                                <textarea
                                    onBlur={() => this.handleUpdate(film._id)}
                                    onChange={(event) => this.handleChange(event, film._id)}
                                    name="role" value={film.role} placeholder='Your Role'
                                />
                                <textarea
                                    onBlur={() => this.handleUpdate(film._id)}
                                    onChange={(event) => this.handleChange(event, film._id)}
                                    name="type" value={film.type} placeholder='Type of Work...film/music video/'
                                />
                                <textarea
                                    onBlur={() => this.handleUpdate(film._id)}
                                    onChange={(event) => this.handleChange(event, film._id)}
                                    name="year" value={film.year} placeholder='Year released'
                                />
                                <textarea
                                    onBlur={() => this.handleUpdate(film._id)}
                                    onChange={(event) => this.handleChange(event, film._id)}
                                    name="location" value={film.location} placeholder='Location'
                                />
                                <textarea
                                    onBlur={() => this.handleUpdate(film._id)}
                                    onChange={(event) => this.handleChange(event, film._id)}
                                    name="awards" value={film.awards} placeholder='Awards'
                                />
                                <button onClick={deleteFilm}>Delete Film</button>


                            </FilmStyles>


                        )
                    })}
                </FilmsContainerStyle>
                    </div>                
                </div>
                )
            }
        }
        
export default UserShow