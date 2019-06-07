import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'




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
    padding: 10px 10px;
    font-size: 10px;
  }

  .button2{
    position: absolute;
    top: 20px;
    left: 10px;
    color: blue; 
  }

  

  input {
    height: 30%;
    
    font-size: 13px;

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
  background: rgb(43, 172, 174, 0.6);
  color: white;
  font-size: 16px;
  padding: 10px 10px;
  border-radius: 5px;

`
const EditProfileBtn = styled.button`
font-size: 16px;
background: purple;
color: white;
border-radius: 5px;
button{
    background: transparent;
    border: none;
    color: white;
    font-size: 16px;
    padding: 9px 9px;

}
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
            date: '',
            payperiod: '',
            name: '',
            idnumber: '',
            client: '',
            frequency: '',
            rate: '',
            temptotal: '',
            arisefee: '',
            callumfee: '',
            totaldue: '',
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
                    <br />
                </NameNButtonStyle>
                <NewInvoiceButton onClick={this.handleCreateNewInvoice}>
                    Add New Invoice
                    </NewInvoiceButton>
                <EditProfileBtn>
                    <Link to={`/employees/${this.props.match.params.employeeId}/profile`} > <button>Edit {this.state.employee.employeename}'s Profile</button> </Link>
                </EditProfileBtn>

                <div>Type in fields below to edit Invoice Info

                    <InvoicesContainerStyle>

                        {this.state.invoices.map(invoice => {
                            const deleteInvoice = () => {

                                return this.handleDelete(invoice._id)

                            }

                            return (

                                <InvoiceStyles>

                                    <label htmlFor="employeename">{this.state.employee.employeename} </label>
                                    <label htmlFor="idnumber" >{this.state.employee.idnumber} </label>
<br/>
                                    <label htmlFor="datetoday" >Date: </label>
                                    <input
                                        onBlur={() => this.handleUpdate(invoice._id)}
                                        onChange={(event) => this.handleChange(event, invoice._id)}
                                        type="date" name="datetoday" value={invoice.date} 
                                    />
                                    <label htmlFor="payperiod">Pay Period: </label>
                                    <input
                                        onBlur={() => this.handleUpdate(invoice._id)}
                                        onChange={(event) => this.handleChange(event, invoice._id)}
                                        type="text" name="payperiod" value={invoice.payperiod} placeholder='mm/dd/yyyy - mm/dd/yyyy'
                                    />

                                    <label htmlFor="client">Client: </label>
                                    <input
                                        onBlur={() => this.handleUpdate(invoice._id)}
                                        onChange={(event) => this.handleChange(event, invoice._id)}
                                        name="client" value={invoice.role} placeholder='Client'
                                    />
                                    <label htmlFor="rate">Rate: </label>
                                    <input
                                        onBlur={() => this.handleUpdate(invoice._id)}
                                        onChange={(event) => this.handleChange(event, invoice._id)}
                                        type="number" name="rate" value={invoice.rate} placeholder='Rate of pay'
                                    />
                                    <label htmlFor="frequency">Per: </label>
                                    <input
                                        onBlur={() => this.handleUpdate(invoice._id)}
                                        onChange={(event) => this.handleChange(event, invoice._id)}
                                        type="number" name="frequency" value={invoice.frequency} placeholder='Minute/Half-Hour/Hour'
                                    />
                                    <label htmlFor="temptotal">Total: </label>
                                    <input
                                        onBlur={() => this.handleUpdate(invoice._id)}
                                        onChange={(event) => this.handleChange(event, invoice._id)}
                                        type="number" name="temptotal" value={invoice.temptotal} placeholder='Total'
                                    />
                                    <label htmlFor="arisefee">Arise Fee: </label>
                                    <input
                                        onBlur={() => this.handleUpdate(invoice._id)}
                                        onChange={(event) => this.handleChange(event, invoice._id)}
                                        type="text" name="arisefee" value='$19.75'
                                    />
                                    <label htmlFor="callumfee">Callum Ent. Fee: </label>
                                    <input
                                        onBlur={() => this.handleUpdate(invoice._id)}
                                        onChange={(event) => this.handleChange(event, invoice._id)}
                                        type="text" name="callumfee" value='10%'
                                    />
                                    <label htmlFor="totaldue">Total Due this period: </label>
                                    <input
                                        onBlur={() => this.handleUpdate(invoice._id)}
                                        onChange={(event) => this.handleChange(event, invoice._id)}
                                        type="number" name="totaldue" value={invoice.totaldue} 
                                    />
<br/>

<br/>

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