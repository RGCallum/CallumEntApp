import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class Invoices extends Component {
      state = {
        invoices: [],
        newInvoice: {
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
    this.getAllInvoices()
  }
    
  handleChange = (event) => {
    const updatedNewInvoice = {...this.state.newInvoice}

    updatedNewInvoice[event.target.name] = event.target.value
    this.setState({newInvoice: updatedNewInvoice})
  }

  handleSubmit = (event) => {
    event.preventDefault()

    axios.post('/api/invoices/:invoiceId', this.state.newInvoice).then(res => {
      console.log(res.data)
      this.props.history.push(`/invoices/:invoiceId/${res.data._id}`)
    })
    
  }

  getAllInvoices = () => {
    axios.get('/api/invoices/:invoiceId').then((res) => {
      this.setState({invoices: res.data})
    })
  }



  render() {
    return (
      <div> 
        {/* <h3> All About {this.state.invoice.name}'s </h3> */}
        invoices show

                <div>
                    {this.state.invoices.map((invoice) => (
                        <div key={invoice._id}>
                            {/* <Link to={`/invoices/${invoice._id}`}>{invoice.name}</Link> */}
                        </div>
                    ))}
                </div>

        <h3>Edit Invoice Invoice</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input onChange={this.handleChange} 
            value={this.state.newInvoice.name} type="text" name="name"/>
          </div>
          <div>
            <label htmlFor="synopsis">Synopsis: </label>
            <input onChange={this.handleChange} value={this.state.newInvoice.synopsis} type="synopsis" name="synopsis"/>
          </div>
          <div>
            <label htmlFor="role">Role: </label>
            <input onChange={this.handleChange} value={this.state.newInvoice.role} type="text" name="role"/>
          </div>
          <div>
            <label htmlFor="type">type: </label>
            <input onChange={this.handleChange} value={this.state.newInvoice.type} type="text" name="type"/>
          </div>
          <div>
            <label htmlFor="year">Year: </label>
            <input onChange={this.handleChange} value={this.state.newInvoice.year} type="text" name="year"/>
          </div>
          <div>
            <label htmlFor="location">Location: </label>
            <input onChange={this.handleChange} value={this.state.newInvoice.location} type="text" name="location"/>
          </div>
          <div>
            <label htmlFor="image">Image: </label>
            <input onChange={this.handleChange} value={this.state.newInvoice.image}  type="text" name="image"/>
          </div>
          <div>
            <label htmlFor="awards">Awards: </label>
            <input onChange={this.handleChange} value={this.state.newInvoice.awards} placeholder= {this.state.newInvoice.awards} type="text" name="awards"/>
          </div>
          <button type="submit">Create Invoice</button>
        </form>
      </div>
      
    );
    
  }
}
export default Invoices;


