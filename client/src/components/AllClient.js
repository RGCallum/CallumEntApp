import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'


class AllClient extends Component {
      state = {
        // allClients: [],
        newAllClient: {
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



//   getAllallClients = () => {
//     axios.get('/api/allClients/:allClientId').then((res) => {
//       this.setState({allClients: res.data})
//     })
//   }

//   componentDidMount(){
//     this.getAllallClients()
//   }
    
  handleChange = (event) => {
    const updatedNewAllClient = {...this.state.newAllClient}

    updatedNewAllClient[event.target.name] = event.target.value
    this.setState({newAllClient: updatedNewAllClient})
  }

  handleSubmit = (event) => {
    event.preventDefault()

    axios.post('/api/allClients', this.state.newAllClient).then(res => {
      console.log(res.data)
      this.props.history.push(`/allClients/${res.data._id}`)
    })
    
  }



  render() {
    return (
      <div> 
        <h3> All About {this.state.allClients.name} </h3>
        {/* { this.state.allClients.map((allClient) => (
          <div key={allClient._id}>
            <Link to={`/allClients/${allClient._id}`}>{allClient.allClientname}</Link>
          </div>
        )) } */}

        <h3>Edit Invoice AllClient</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input onChange={this.handleChange} 
            // value={this.state.newAllClient.name}  placeholder= {AllClient} 
            type="text" name="name"/>
          </div>
          <div>
            <label htmlFor="synopsis">Synopsis: </label>
            <input onChange={this.handleChange} value={this.state.newAllClient.synopsis} placeholder=  {this.state.newAllClient.synopsis}  type="synopsis" name="synopsis"/>
          </div>
          <div>
            <label htmlFor="role">Role: </label>
            <input onChange={this.handleChange} value={this.state.newAllClient.role} placeholder=  {this.state.newAllClient.role} type="text" name="role"/>
          </div>
          <div>
            <label htmlFor="type">type: </label>
            <input onChange={this.handleChange} value={this.state.newAllClient.type}  placeholder= {this.state.newAllClient.type} type="text" name="type"/>
          </div>
          <div>
            <label htmlFor="year">Year: </label>
            <input onChange={this.handleChange} value={this.state.newAllClient.year} placeholder=  {this.state.newAllClient.year} type="text" name="year"/>
          </div>
          <div>
            <label htmlFor="location">Location: </label>
            <input onChange={this.handleChange} value={this.state.newAllClient.location} placeholder=  {this.state.newAllClient.location} type="text" name="location"/>
          </div>
          <div>
            <label htmlFor="image">Image: </label>
            <input onChange={this.handleChange} value={this.state.newAllClient.image}  placeholder= {this.state.newAllClient.image} type="text" name="image"/>
          </div>
          <div>
            <label htmlFor="awards">Awards: </label>
            <input onChange={this.handleChange} value={this.state.newAllClient.awards} placeholder= {this.state.newAllClient.awards} type="text" name="awards"/>
          </div>
          <button type="submit">Create AllClient</button>
        </form>
      </div>
    );
  }
}
export default AllClient;




//     componentDidMount() {
//     // make an api call to get one single invoice
//     // On the server URL is '/api/invoices/:invoiceId'
//     const invoiceId = this.props.match.params.invoiceId
//     axios.get(`/api/invoices/${invoiceId}`).then(res => {
//       console.log(res.data)
//       this.setState({
//         invoices: res.data,
//         allClients: res.data.allClients
//       })
//     })
//   }

//   handleCreateNewAllClient = () => {
//     const invoiceId = this.props.match.params.invoiceId
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
//     axios.post(`/api/invoices/${invoiceId}/allClients`, payload).then(res => {
//       const newAllClient = res.data
//       console.log(res.data)
//       const newStateallClients = [...this.state.allClients, newAllClient]
//       this.setState({ allClients: newStateallClients })
//     })
//   }

//     handleDelete = allClientId => {
//     // some unique value
//     axios.delete(`/api/allClients/${allClientId}`).then(() => {
//       //Remove the allClient with allClientID from this.state.allClients
//       const newallClients = [...this.state.allClients]
//       // Return only allClients that are NOT the id provided
//       const filtered = newallClients.filter(allClient => {
//         return allClient._id !== allClientId // ! = =
//       })
//       // Take filtered data and set it to allClients
//       this.setState({ allClients: filtered })
//     })
//   }

//     handleChange = (event, allClientId) => {
//     // const name = event.target.name
//     // const value = event.target.value
//     const { value, name } = event.target
//     const newallClients = [...this.state.allClients]
//     const updatedValue = newallClients.map(allClient => {
//       if (allClient._id === allClientId) {
//         allClient[name] = value
//       }
//       return allClient
//     })
//         this.setState({ allClients: updatedValue })
//   }

//   handleUpdate = (allClientId) => {
//     // Find the individual updated allClient from this.state.allClients
//     const allClientToUpdate = this.state.allClients.find(allClient => {
//       return allClient._id === allClientId
//     })
//     // axios post the endpoint with updated data
//     axios.patch(`/api/allClients/${allClientId}`, allClientToUpdate).then(() => {
//       console.log("Updated AllClient")
//     })
//     // console .log saved
//   }

//     render() {
//         return (
//             <div>
//                            {/* <h1>{this.state.invoice.name}'s allClients </h1> */}




      
//        <button onClick={this.handleCreateNewAllClient}> <h1>FUCK YOU REACT</h1> </button>
//             </div>
//         );
//     }
// }

// export default AllClient;

// import React, { Component } from 'react'
// import axios from 'axios'
// import styled from 'styled-components'

// // Need allClient about a invoice
// // Need allClient about that invoices allClients

// const allClientstyles = styled.div`
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

// const NewAllClientButton = styled.button`
//   background: #1d3557;
//   color: white;
//   font-size: 1.3rem;
//   padding: 10px 10px;
//   border-radius: 5px;

// `

// const allClientsContainerStyle = styled.div`
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


// class AllClient extends Component {
//   state = {
//         allClients: [],
//         newAllClient: {
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
//     // make an api call to get one single invoice
//     // On the server URL is '/api/invoices/:invoiceId'
//     const invoiceId = this.props.match.params.invoiceId
//     axios.get(`/api/invoices/${invoiceId}`).then(res => {
//       console.log(res.data)
//       this.setState({
//         invoices: res.data,
//         allClients: res.data.allClients
//       })
//     })
//   }

//   handleCreateNewAllClient = () => {
//     const invoiceId = this.props.match.params.invoiceId
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
//     axios.post(`/api/invoices/${invoiceId}/allClients`, payload).then(res => {
//       const newAllClient = res.data
//       const newStateallClients = [...this.state.allClients, newAllClient]
//       this.setState({ allClients: newStateallClients })
//     })
//   }

//   handleDelete = allClientId => {
//     // some unique value
//     axios.delete(`/api/allClients/${allClientId}`).then(() => {
//       //Remove the allClient with allClientID from this.state.allClients
//       const newallClients = [...this.state.allClients]
//       // Return only allClients that are NOT the id provided
//       const filtered = newallClients.filter(allClient => {
//         return allClient._id !== allClientId // ! = =
//       })
//       // Take filtered data and set it to allClients
//       this.setState({ allClients: filtered })
//     })
//   }

// //   handleDelete = invoiceId => {
// //     // some unique value
// //     axios.delete(`/api/invoices`).then(() => {
// //       //Remove the invoice with invoiceID from this.state.invoices
// //       const newInvoices = [...this.state.invoices]
// //       // Return only invoices that are NOT the id provided
// //       const filtered = newInvoices.filter(invoice => {
// //         return invoice._id !== invoiceId // ! = =
// //       })
// //       // Take filtered data and set it to invoices
// //       this.setState({ invoices: filtered })
// //     })
// //   }

//   handleChange = (event, allClientId) => {
//     // const name = event.target.name
//     // const value = event.target.value
//     const { value, name } = event.target
//     const newallClients = [...this.state.allClients]
//     const updatedValue = newallClients.map(allClient => {
//       if (allClient._id === allClientId) {
//         allClient[name] = value
//       }
//       return allClient
//     })

//     this.setState({ allClients: updatedValue })
//   }

//   handleUpdate = (allClientId) => {
//     // Find the individual updated allClient from this.state.allClients
//     const allClientToUpdate = this.state.allClients.find(allClient => {
//       return allClient._id === allClientId
//     })
//     // axios post the endpoint with updated data
//     axios.patch(`/api/allClients/${allClientId}`, allClientToUpdate).then(() => {
//       console.log("Updated AllClient")
//     })
//     // console .log saved
//   }

//   render() {
//     return (
//       <div>
//         <NameNButtonStyle>

//           {/* <h1>{this.state.invoice.name}'s allClients </h1> */}
//           <br />
//         </NameNButtonStyle>
//         <NewAllClientButton onClick={this.handleCreateNewAllClient}>
//           New AllClient
//         </NewAllClientButton>


//         <allClientsContainerStyle>
//           { this.state.allClients.map(allClient => {
//             const deleteAllClient = () => {
                
//               return this.handleDelete(allClient._id)
//             }

//             return (
//               <allClientstyles>
//                 <input
//                   onBlur={() => this.handleUpdate(allClient._id)}
//                   onChange={(event) => this.handleChange(event, allClient._id)}
//                   type="text" name="name"
//                   value={allClient.name}
//                 />

//                 <button onClick={deleteAllClient}>X</button>

//               </allClientstyles>


//             )
//           })}
//         </allClientsContainerStyle>
//       </div>
//     )
//   }
// }
// export default AllClient

// import React, { Component } from 'react'
// import axios from 'axios'
// import styled from 'styled-components'
// import {Link} from 'react-router-dom'




// const allClientstyles = styled.div`
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

// const NewAllClientButton = styled.button`
//   background: #1d3557;
//   color: white;
//   font-size: 1.3rem;
//   padding: 10px 10px;
//   border-radius: 5px;

// `

// const allClientsContainerStyle = styled.div`
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

// class AllClient extends Component {
//     state = {
//         allClients: [],
//         newAllClient: {
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
//     // make an api call to get one single invoice
//     // On the server URL is '/api/invoices/:invoiceId'
//     const invoiceId = this.props.match.params.invoiceId
//     axios.get(`/api/invoices/${invoiceId}`).then(res => {
//       console.log(res.data)
//       this.setState({
//         invoice: res.data,
//         allClients: res.data.allClients
//       })
//     })
//   }

//   handleCreateNewAllClient = () => {
//     const invoiceId = this.props.match.params.invoiceId
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
//     axios.post(`/api/invoices/${invoiceId}/allClients`, payload).then(res => {
//       const newAllClient = res.data
//       const newStateallClients = [...this.state.allClients, newAllClient]
//       this.setState({ allClients: newStateallClients })
//     })
//   }

//   handleDelete = allClientId => {
//     // some unique value
//     axios.delete(`/api/allClients/${allClientId}`).then(() => {
//       //Remove the allClient with allClientID from this.state.allClients
//       const newallClients = [...this.state.allClients]
//       // Return only allClients that are NOT the id provided
//       const filtered = newallClients.filter(allClient => {
//         return allClient._id !== allClientId // ! = =
//       })
//       // Take filtered data and set it to allClients
//       this.setState({ allClients: filtered })
//     })
//   }



//   handleChange = (event, allClientId) => {
//     // const name = event.target.name
//     // const value = event.target.value
//     const { value, name } = event.target
//     const newallClients = [...this.state.allClients]
//     const updatedValue = newallClients.map(allClient => {
//       if (allClient._id === allClientId) {
//         allClient[name] = value
//       }
//       return allClient
//     })

//     this.setState({ allClients: updatedValue })
//   }

//   handleUpdate = (allClientId) => {
//     // Find the individual updated allClient from this.state.allClients
//     const allClientToUpdate = this.state.allClients.find(allClient => {
//       return allClient._id === allClientId
//     })
//     // axios post the endpoint with updated data
//     axios.patch(`/api/allClients/${allClientId}`, allClientToUpdate).then(() => {
//       console.log("Updated AllClient")
//     })
//     // console .log saved
//   }

//   render() {
//     return (
//       <div>
//           Invoice allClient page
//         <NameNButtonStyle>

//           {/* <h1>{this.state.invoice.invoicename}'s allClients </h1> */}
//           <br />
//         </NameNButtonStyle>
//         <NewAllClientButton onClick={this.handleCreateNewAllClient}>
//           New AllClient
//         </NewAllClientButton>


//         <allClientsContainerStyle>
//           {this.state.allClients.map(allClient => {
//             const deleteAllClient = () => {
                
//               return this.handleDelete(allClient._id)
//             }

//             return (
//               <allClientstyles>
//                 <input
//                   onBlur={() => this.handleUpdate(allClient._id)}
//                   onChange={(event) => this.handleChange(event, allClient._id)}
//                   type="text" name="name" value={allClient.name}
//                 //   type="text" name="synopsis" value={allClient.synopsis}
//                 //   type="text" name="role" value={allClient.role}
//                 //   type="text" name="type" value={allClient.type}
//                 //   type="text" name="year" value={allClient.year}
//                 //   type="number" name="location" value={allClient.location}
//                 //   type="text" name="image" value={allClient.image}
//                 //   type="text" name="awards" value={allClient.awards}
//                 />

//                 <button onClick={deleteAllClient}>X</button>
//                 {/* <Link to={`/allClients/${allClient._id}`}> 🎬 AllClient AllClient</Link> */}

//               </allClientstyles>


//             )
//           })}
//         </allClientsContainerStyle>
//       </div>
//     )
//   }
// }
// export default AllClient