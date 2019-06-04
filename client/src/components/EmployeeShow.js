import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import infoShow from './infoShow';




const InvoiceStyles = styled.div`
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

const NewInvoiceButton = styled.button`
  background: #1d3557;
  color: white;
  font-size: 1.3rem;
  padding: 10px 10px;
  border-radius: 5px;

`

const InvoicesContainerStyle = styled.div`
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

class EmployeeShow extends Component {
    state = {
        employee: '',
        invoices: [],
        newInvoice: {
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
        // make an api call to get one single employee
        // On the server URL is '/api/employees/:employeeId'
        const employeeId = this.props.match.params.employeeId
        axios.get(`/api/employees/${employeeId}`).then(res => {
            console.log(res.data)
            this.setState({
                employee: res.data,
                invoices: res.data.invoices
            })
        })
    }

    handleCreateNewInvoice = () => {
        const employeeId = this.props.match.params.employeeId
        const payload = {
            name: 'Invoice Name',
            image: 'image',
            link: 'link',
            //   info: 'Invoice Description'

        }
        axios.post(`/api/employees/${employeeId}/invoices`, payload).then(res => {
            const newInvoice = res.data
            const newStateInvoices = [...this.state.invoices, newInvoice]
            this.setState({ invoices: newStateInvoices })
        })
    }

    handleDelete = invoiceId => {
        axios.delete(`/api/invoices/${invoiceId}`).then(() => {
            const newInvoices = [...this.state.invoices]
            const filtered = newInvoices.filter(invoice => {
                return invoice._id !== invoiceId // ! = =
            })
            this.setState({ invoices: filtered })
        })
    }



    handleChange = (event, invoiceId) => {
        const { value, name } = event.target
        const newInvoices = [...this.state.invoices]
        const updatedValue = newInvoices.map(invoice => {
            if (invoice._id === invoiceId) {
                invoice[name] = value
            }
            return invoice
        })

        this.setState({ invoices: updatedValue })
    }

    handleUpdate = (invoiceId) => {
        const invoiceToUpdate = this.state.invoices.find(invoice => {
            return invoice._id === invoiceId
        })
        axios.patch(`/api/invoices/${invoiceId}`, invoiceToUpdate).then(() => {
            console.log("Updated Invoice")
        })
    }

    render() {
        return (
            <div>
                
  
                    
                    <NameNButtonStyle>
                      <h1>{this.state.employee.employeename}'s Invoices </h1>
                        <img src={this.state.employee.image}  alt="invoice pic" />
                        <br />
                    </NameNButtonStyle>
                    <NewInvoiceButton onClick={this.handleCreateNewInvoice}>
                       Add New Invoice
                    </NewInvoiceButton>

                  <Link to={`/employees/${this.props.match.params.employeeId}/profile`} > <button>Edit Profile</button> </Link>


            <div>Type in fields below to edit Invoice Info

        <InvoicesContainerStyle>
            
                    {this.state.invoices.map(invoice => {
                        const deleteInvoice = () => {

                            return this.handleDelete(invoice._id)

                        }

                        return (

                            <InvoiceStyles>

                                <input
                                    onBlur={() => this.handleUpdate(invoice._id)}
                                    onChange={(event) => this.handleChange(event, invoice._id)}
                                    type="text" name="name" placeholder='Name'
                                    value={invoice.name}
                                />

                                <textarea
                                    onBlur={() => this.handleUpdate(invoice._id)}
                                    onChange={(event) => this.handleChange(event, invoice._id)}
                                    name="image" placeholder='Photo'
                                />                   <img src={invoice.image} alt="invoice pic" />

                                <textarea
                                    onBlur={() => this.handleUpdate(invoice._id)}
                                    onChange={(event) => this.handleChange(event, invoice._id)}
                                    name="link"  placeholder='Link to invoice'
                                />
                                <Link to=''>{invoice.link}</Link>
                                <textarea
                                    onBlur={() => this.handleUpdate(invoice._id)}
                                    onChange={(event) => this.handleChange(event, invoice._id)}
                                    name="synopsis" value={invoice.synopsis} placeholder='Synopsis'
                                />
                                <textarea
                                    onBlur={() => this.handleUpdate(invoice._id)}
                                    onChange={(event) => this.handleChange(event, invoice._id)}
                                    name="role" value={invoice.role} placeholder='Your Role'
                                />
                                <textarea
                                    onBlur={() => this.handleUpdate(invoice._id)}
                                    onChange={(event) => this.handleChange(event, invoice._id)}
                                    name="type" value={invoice.type} placeholder='Type of Work...invoice/music video/'
                                />
                                <textarea
                                    onBlur={() => this.handleUpdate(invoice._id)}
                                    onChange={(event) => this.handleChange(event, invoice._id)}
                                    name="year" value={invoice.year} placeholder='Year released'
                                />
                                <textarea
                                    onBlur={() => this.handleUpdate(invoice._id)}
                                    onChange={(event) => this.handleChange(event, invoice._id)}
                                    name="location" value={invoice.location} placeholder='Location'
                                />
                                <textarea
                                    onBlur={() => this.handleUpdate(invoice._id)}
                                    onChange={(event) => this.handleChange(event, invoice._id)}
                                    name="awards" value={invoice.awards} placeholder='Awards'
                                />
                                <button onClick={deleteInvoice}>Delete Invoice</button>


                            </InvoiceStyles>


                        )
                        
                    })}
                </InvoicesContainerStyle>
                    </div>                
                </div>
                )
            }
        }
        
export default EmployeeShow