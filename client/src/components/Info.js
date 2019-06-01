import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'


class Info extends Component {
      state = {
        infos: [],
        newInfo: {
          name:'',  
          synopsis: '',
          role: '',
          type: '',
          year: '',
          location: '',
          image: '',
          awards: '',
    }
  }



//   getAllInfos = () => {
//     axios.get('/api/infos/:infoId').then((res) => {
//       this.setState({infos: res.data})
//     })
//   }

//   componentDidMount(){
//     this.getAllInfos()
//   }
    
  handleChange = (event) => {
    const updatedNewInfo = {...this.state.newInfo}

    updatedNewInfo[event.target.name] = event.target.value
    this.setState({newInfo: updatedNewInfo})
  }

  handleSubmit = (event) => {
    event.preventDefault()

    axios.post('/api/infos', this.state.newInfo).then(res => {
      console.log(res.data)
      this.props.history.push(`/infos/${res.data._id}`)
    })
    
  }



  render() {
    return (
      <div> 
        <h3> All About {this.state.infos.name} </h3>
        {/* { this.state.infos.map((info) => (
          <div key={info._id}>
            <Link to={`/infos/${info._id}`}>{info.infoname}</Link>
          </div>
        )) } */}

        <h3>Edit Film Info</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input onChange={this.handleChange} 
            // value={this.state.newInfo.name}  placeholder= {Info} 
            type="text" name="name"/>
          </div>
          <div>
            <label htmlFor="synopsis">Synopsis: </label>
            <input onChange={this.handleChange} value={this.state.newInfo.synopsis} placeholder=  {this.state.newInfo.synopsis}  type="synopsis" name="synopsis"/>
          </div>
          <div>
            <label htmlFor="role">Role: </label>
            <input onChange={this.handleChange} value={this.state.newInfo.role} placeholder=  {this.state.newInfo.role} type="text" name="role"/>
          </div>
          <div>
            <label htmlFor="type">type: </label>
            <input onChange={this.handleChange} value={this.state.newInfo.type}  placeholder= {this.state.newInfo.type} type="text" name="type"/>
          </div>
          <div>
            <label htmlFor="year">Year: </label>
            <input onChange={this.handleChange} value={this.state.newInfo.year} placeholder=  {this.state.newInfo.year} type="text" name="year"/>
          </div>
          <div>
            <label htmlFor="location">Location: </label>
            <input onChange={this.handleChange} value={this.state.newInfo.location} placeholder=  {this.state.newInfo.location} type="text" name="location"/>
          </div>
          <div>
            <label htmlFor="image">Image: </label>
            <input onChange={this.handleChange} value={this.state.newInfo.image}  placeholder= {this.state.newInfo.image} type="text" name="image"/>
          </div>
          <div>
            <label htmlFor="awards">Awards: </label>
            <input onChange={this.handleChange} value={this.state.newInfo.awards} placeholder= {this.state.newInfo.awards} type="text" name="awards"/>
          </div>
          <button type="submit">Create Info</button>
        </form>
      </div>
    );
  }
}
export default Info;




//     componentDidMount() {
//     // make an api call to get one single film
//     // On the server URL is '/api/films/:filmId'
//     const filmId = this.props.match.params.filmId
//     axios.get(`/api/films/${filmId}`).then(res => {
//       console.log(res.data)
//       this.setState({
//         films: res.data,
//         infos: res.data.infos
//       })
//     })
//   }

//   handleCreateNewInfo = () => {
//     const filmId = this.props.match.params.filmId
//     const payload = {
//         name: 'name',
//         image: 'image',
//         link: 'link',
//     //   name: 'name',
//     //   image: 'image',
//     //   link: 'link',
//     //   synopsis: 'synopsis',
//     //   role: 'role',
//     //   type: 'type',
//     //   year: 'year',
//     //   location: 'location',
//     //   awards: 'awards'
//     }
//     axios.post(`/api/films/${filmId}/infos`, payload).then(res => {
//       const newInfo = res.data
//       console.log(res.data)
//       const newStateInfos = [...this.state.infos, newInfo]
//       this.setState({ infos: newStateInfos })
//     })
//   }

//     handleDelete = infoId => {
//     // some unique value
//     axios.delete(`/api/infos/${infoId}`).then(() => {
//       //Remove the info with infoID from this.state.infos
//       const newInfos = [...this.state.infos]
//       // Return only infos that are NOT the id provided
//       const filtered = newInfos.filter(info => {
//         return info._id !== infoId // ! = =
//       })
//       // Take filtered data and set it to infos
//       this.setState({ infos: filtered })
//     })
//   }

//     handleChange = (event, infoId) => {
//     // const name = event.target.name
//     // const value = event.target.value
//     const { value, name } = event.target
//     const newInfos = [...this.state.infos]
//     const updatedValue = newInfos.map(info => {
//       if (info._id === infoId) {
//         info[name] = value
//       }
//       return info
//     })
//         this.setState({ infos: updatedValue })
//   }

//   handleUpdate = (infoId) => {
//     // Find the individual updated info from this.state.infos
//     const infoToUpdate = this.state.infos.find(info => {
//       return info._id === infoId
//     })
//     // axios post the endpoint with updated data
//     axios.patch(`/api/infos/${infoId}`, infoToUpdate).then(() => {
//       console.log("Updated Info")
//     })
//     // console .log saved
//   }

//     render() {
//         return (
//             <div>
//                            {/* <h1>{this.state.film.name}'s Infos </h1> */}




      
//        <button onClick={this.handleCreateNewInfo}> <h1>FUCK YOU REACT</h1> </button>
//             </div>
//         );
//     }
// }

// export default Info;

// import React, { Component } from 'react'
// import axios from 'axios'
// import styled from 'styled-components'

// // Need info about a film
// // Need info about that films infos

// const InfoStyles = styled.div`
//   display: flex;
//   position: relative;
//   flex-direction: column;
//   width: 200px;
//   height: 100px;
//   background: rgb(43, 172, 174, 0.6);
//   margin: 10px 0;
  

//   button {
//     position: absolute;
//     top: 5px;
//     right: 10px;
//     color: red;
//   }
//   input,
//   textarea {
//     background-color: transparent;
//     border: none;
     
//   }
//   input {
//     height: 30%;
//     font-size: 1.3rem;
//     // background-color: rgba(232, 232, 232, 0.653);

//   }
//   textarea {
//     height: 70%;

//   }
// `

// const NewInfoButton = styled.button`
//   background: #1d3557;
//   color: white;
//   font-size: 1.3rem;
//   padding: 10px 10px;
//   border-radius: 5px;

// `

// const InfosContainerStyle = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   flex-wrap: wrap;
//   align-content: center;
//   background-color: rgba(232, 232, 232, 0.653);
  
// `

// const NameNButtonStyle = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   flex-wrap: wrap;
//   align-content: center;
  
// `


// class Info extends Component {
//   state = {
//         infos: [],
//         newInfo: {
//           name:'',  
//           synopsis: '',
//           role: '',
//           type: '',
//           year: '',
//           location: '',
//           image: '',
//           awards: '',
//     }
//   }
  

//   componentDidMount() {
//     // make an api call to get one single film
//     // On the server URL is '/api/films/:filmId'
//     const filmId = this.props.match.params.filmId
//     axios.get(`/api/films/${filmId}`).then(res => {
//       console.log(res.data)
//       this.setState({
//         films: res.data,
//         infos: res.data.infos
//       })
//     })
//   }

//   handleCreateNewInfo = () => {
//     const filmId = this.props.match.params.filmId
//     const payload = {
//         name: 'name',
//         image: 'image',
//         link: 'link',
//     //   name: 'name',
//     //   image: 'image',
//     //   link: 'link',
//     //   synopsis: 'synopsis',
//     //   role: 'role',
//     //   type: 'type',
//     //   year: 'year',
//     //   location: 'location',
//     //   awards: 'awards'
//     }
//     axios.post(`/api/films/${filmId}/infos`, payload).then(res => {
//       const newInfo = res.data
//       const newStateInfos = [...this.state.infos, newInfo]
//       this.setState({ infos: newStateInfos })
//     })
//   }

//   handleDelete = infoId => {
//     // some unique value
//     axios.delete(`/api/infos/${infoId}`).then(() => {
//       //Remove the info with infoID from this.state.infos
//       const newInfos = [...this.state.infos]
//       // Return only infos that are NOT the id provided
//       const filtered = newInfos.filter(info => {
//         return info._id !== infoId // ! = =
//       })
//       // Take filtered data and set it to infos
//       this.setState({ infos: filtered })
//     })
//   }

// //   handleDelete = filmId => {
// //     // some unique value
// //     axios.delete(`/api/films`).then(() => {
// //       //Remove the film with filmID from this.state.films
// //       const newFilms = [...this.state.films]
// //       // Return only films that are NOT the id provided
// //       const filtered = newFilms.filter(film => {
// //         return film._id !== filmId // ! = =
// //       })
// //       // Take filtered data and set it to films
// //       this.setState({ films: filtered })
// //     })
// //   }

//   handleChange = (event, infoId) => {
//     // const name = event.target.name
//     // const value = event.target.value
//     const { value, name } = event.target
//     const newInfos = [...this.state.infos]
//     const updatedValue = newInfos.map(info => {
//       if (info._id === infoId) {
//         info[name] = value
//       }
//       return info
//     })

//     this.setState({ infos: updatedValue })
//   }

//   handleUpdate = (infoId) => {
//     // Find the individual updated info from this.state.infos
//     const infoToUpdate = this.state.infos.find(info => {
//       return info._id === infoId
//     })
//     // axios post the endpoint with updated data
//     axios.patch(`/api/infos/${infoId}`, infoToUpdate).then(() => {
//       console.log("Updated Info")
//     })
//     // console .log saved
//   }

//   render() {
//     return (
//       <div>
//         <NameNButtonStyle>

//           {/* <h1>{this.state.film.name}'s Infos </h1> */}
//           <br />
//         </NameNButtonStyle>
//         <NewInfoButton onClick={this.handleCreateNewInfo}>
//           New Info
//         </NewInfoButton>


//         <InfosContainerStyle>
//           { this.state.infos.map(info => {
//             const deleteInfo = () => {
                
//               return this.handleDelete(info._id)
//             }

//             return (
//               <InfoStyles>
//                 <input
//                   onBlur={() => this.handleUpdate(info._id)}
//                   onChange={(event) => this.handleChange(event, info._id)}
//                   type="text" name="name"
//                   value={info.name}
//                 />

//                 <button onClick={deleteInfo}>X</button>

//               </InfoStyles>


//             )
//           })}
//         </InfosContainerStyle>
//       </div>
//     )
//   }
// }
// export default Info

// import React, { Component } from 'react'
// import axios from 'axios'
// import styled from 'styled-components'
// import {Link} from 'react-router-dom'




// const InfoStyles = styled.div`
//   display: flex;
//   position: relative;
//   flex-direction: column;
//   width: 200px;
//   height: 50px;
//   background: rgb(43, 172, 174, 0.6);
//   margin: 10px 0;
  

//   button {
//     position: absolute;
//     top: 5px;
//     right: 10px;
//     color: red;
//   }
//   .button2{
//     position: absolute;
//     top: 20px;
//     left: 10px;
//     color: blue; 
//   }
//   input,
//   textarea {
//     background-color: transparent;
//     border: none;
     
//   }
//   input {


//   }

// `

// const NewInfoButton = styled.button`
//   background: #1d3557;
//   color: white;
//   font-size: 1.3rem;
//   padding: 10px 10px;
//   border-radius: 5px;

// `

// const InfosContainerStyle = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   flex-wrap: wrap;
//   align-content: center;
//   background-color: rgba(232, 232, 232, 0.653);
  
// `

// const NameNButtonStyle = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   flex-wrap: wrap;
//   align-content: center;
  
// `

// class Info extends Component {
//     state = {
//         infos: [],
//         newInfo: {
//           name:'',  
//           synopsis: '',
//           role: '',
//           type: '',
//           year: '',
//           location: '',
//           image: '',
//           awards: '',

//         }
//       }
    
    
//   componentDidMount() {
//     // make an api call to get one single film
//     // On the server URL is '/api/films/:filmId'
//     const filmId = this.props.match.params.filmId
//     axios.get(`/api/films/${filmId}`).then(res => {
//       console.log(res.data)
//       this.setState({
//         film: res.data,
//         infos: res.data.infos
//       })
//     })
//   }

//   handleCreateNewInfo = () => {
//     const filmId = this.props.match.params.filmId
//     const payload = {
//       name: 'name',
//       link: 'link',
//       synopsis: 'synopsis',
//       role: 'role',
//       type: 'type',
//       year: 'year',
//       location: 'location',
//       image: 'image',
//       awards: 'awards',

//     }
//     axios.post(`/api/films/${filmId}/infos`, payload).then(res => {
//       const newInfo = res.data
//       const newStateInfos = [...this.state.infos, newInfo]
//       this.setState({ infos: newStateInfos })
//     })
//   }

//   handleDelete = infoId => {
//     // some unique value
//     axios.delete(`/api/infos/${infoId}`).then(() => {
//       //Remove the info with infoID from this.state.infos
//       const newInfos = [...this.state.infos]
//       // Return only infos that are NOT the id provided
//       const filtered = newInfos.filter(info => {
//         return info._id !== infoId // ! = =
//       })
//       // Take filtered data and set it to infos
//       this.setState({ infos: filtered })
//     })
//   }



//   handleChange = (event, infoId) => {
//     // const name = event.target.name
//     // const value = event.target.value
//     const { value, name } = event.target
//     const newInfos = [...this.state.infos]
//     const updatedValue = newInfos.map(info => {
//       if (info._id === infoId) {
//         info[name] = value
//       }
//       return info
//     })

//     this.setState({ infos: updatedValue })
//   }

//   handleUpdate = (infoId) => {
//     // Find the individual updated info from this.state.infos
//     const infoToUpdate = this.state.infos.find(info => {
//       return info._id === infoId
//     })
//     // axios post the endpoint with updated data
//     axios.patch(`/api/infos/${infoId}`, infoToUpdate).then(() => {
//       console.log("Updated Info")
//     })
//     // console .log saved
//   }

//   render() {
//     return (
//       <div>
//           Film info page
//         <NameNButtonStyle>

//           {/* <h1>{this.state.film.filmname}'s Infos </h1> */}
//           <br />
//         </NameNButtonStyle>
//         <NewInfoButton onClick={this.handleCreateNewInfo}>
//           New Info
//         </NewInfoButton>


//         <InfosContainerStyle>
//           {this.state.infos.map(info => {
//             const deleteInfo = () => {
                
//               return this.handleDelete(info._id)
//             }

//             return (
//               <InfoStyles>
//                 <input
//                   onBlur={() => this.handleUpdate(info._id)}
//                   onChange={(event) => this.handleChange(event, info._id)}
//                   type="text" name="name" value={info.name}
//                 //   type="text" name="synopsis" value={info.synopsis}
//                 //   type="text" name="role" value={info.role}
//                 //   type="text" name="type" value={info.type}
//                 //   type="text" name="year" value={info.year}
//                 //   type="number" name="location" value={info.location}
//                 //   type="text" name="image" value={info.image}
//                 //   type="text" name="awards" value={info.awards}
//                 />

//                 <button onClick={deleteInfo}>X</button>
//                 {/* <Link to={`/infos/${info._id}`}> 🎬 Info Info</Link> */}

//               </InfoStyles>


//             )
//           })}
//         </InfosContainerStyle>
//       </div>
//     )
//   }
// }
// export default Info