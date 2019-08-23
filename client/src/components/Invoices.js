import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class AllClient extends Component {
      state = {
        allClients: [],
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

  componentDidMount(){
    this.getAllAllClients()
  }
    
  handleChange = (event) => {
    const updatedNewAllClient = {...this.state.newAllClient}

    updatedNewAllClient[event.target.name] = event.target.value
    this.setState({newAllClient: updatedNewAllClient})
  }

  handleSubmit = (event) => {
    event.preventDefault()

    axios.post('/api/invoices/:invoiceId', this.state.newAllClient).then(res => {
      console.log(res.data)
      this.props.history.push(`/invoices/:invoiceId/${res.data._id}`)
    })
    
  }

  getAllAllClients = () => {
    axios.get('/api/invoices/:invoiceId').then((res) => {
      this.setState({allClients: res.data})
    })
  }



  render() {
    return (
      <div> 
        {/* <h3> All About {this.state.invoice.name}'s </h3> */}
        invoices show

                <div>
                    {this.state.allClients.map((allClient) => (
                        <div key={allClient._id}>
                            {/* <Link to={`/allClients/${allClient._id}`}>{allClient.name}</Link> */}
                        </div>
                    ))}
                </div>

        <h3>Edit Invoice AllClient</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input onChange={this.handleChange} 
            value={this.state.newAllClient.name} type="text" name="name"/>
          </div>
          <div>
            <label htmlFor="synopsis">Synopsis: </label>
            <input onChange={this.handleChange} value={this.state.newAllClient.synopsis} type="synopsis" name="synopsis"/>
          </div>
          <div>
            <label htmlFor="role">Role: </label>
            <input onChange={this.handleChange} value={this.state.newAllClient.role} type="text" name="role"/>
          </div>
          <div>
            <label htmlFor="type">type: </label>
            <input onChange={this.handleChange} value={this.state.newAllClient.type} type="text" name="type"/>
          </div>
          <div>
            <label htmlFor="year">Year: </label>
            <input onChange={this.handleChange} value={this.state.newAllClient.year} type="text" name="year"/>
          </div>
          <div>
            <label htmlFor="location">Location: </label>
            <input onChange={this.handleChange} value={this.state.newAllClient.location} type="text" name="location"/>
          </div>
          <div>
            <label htmlFor="image">Image: </label>
            <input onChange={this.handleChange} value={this.state.newAllClient.image}  type="text" name="image"/>
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


