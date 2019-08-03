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

  componentDidMount(){
    this.getAllInfos()
  }
    
  handleChange = (event) => {
    const updatedNewInfo = {...this.state.newInfo}

    updatedNewInfo[event.target.name] = event.target.value
    this.setState({newInfo: updatedNewInfo})
  }

  handleSubmit = (event) => {
    event.preventDefault()

    axios.post('/api/invoices/:invoiceId', this.state.newInfo).then(res => {
      console.log(res.data)
      this.props.history.push(`/invoices/:invoiceId/${res.data._id}`)
    })
    
  }

  getAllInfos = () => {
    axios.get('/api/invoices/:invoiceId').then((res) => {
      this.setState({infos: res.data})
    })
  }



  render() {
    return (
      <div> 
        {/* <h3> All About {this.state.invoice.name}'s </h3> */}
        invoices show

                <div>
                    {this.state.infos.map((info) => (
                        <div key={info._id}>
                            {/* <Link to={`/infos/${info._id}`}>{info.name}</Link> */}
                        </div>
                    ))}
                </div>

        <h3>Edit Invoice Info</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input onChange={this.handleChange} 
            value={this.state.newInfo.name} type="text" name="name"/>
          </div>
          <div>
            <label htmlFor="synopsis">Synopsis: </label>
            <input onChange={this.handleChange} value={this.state.newInfo.synopsis} type="synopsis" name="synopsis"/>
          </div>
          <div>
            <label htmlFor="role">Role: </label>
            <input onChange={this.handleChange} value={this.state.newInfo.role} type="text" name="role"/>
          </div>
          <div>
            <label htmlFor="type">type: </label>
            <input onChange={this.handleChange} value={this.state.newInfo.type} type="text" name="type"/>
          </div>
          <div>
            <label htmlFor="year">Year: </label>
            <input onChange={this.handleChange} value={this.state.newInfo.year} type="text" name="year"/>
          </div>
          <div>
            <label htmlFor="location">Location: </label>
            <input onChange={this.handleChange} value={this.state.newInfo.location} type="text" name="location"/>
          </div>
          <div>
            <label htmlFor="image">Image: </label>
            <input onChange={this.handleChange} value={this.state.newInfo.image}  type="text" name="image"/>
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


