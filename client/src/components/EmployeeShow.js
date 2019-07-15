import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const InvoiceStyles = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 600px;
//   height: 900px;
  background: rgb(43, 172, 174, 0.6);
  border-radius: 2px;
  border: inset 5;
  margin: 10px 0;
  font-family: helvetica;
 
  button {
    position: absolute;
    bottom: 5px;
    right: 50px;
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
  #print-button {
    // display: none;
    width: 50px;
    text-decoration: none;
}


  input {
    height: 30%;
    font-size: 13px;
    font-family: helvetica;
    color: red;
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
            payperiodstart: '',
            payperiodend: '',
            name: '',
            idnumber: '',
            client: '',
            frequency: '',
            rate: '',
            subtotal: '',
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
            name: '',

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
                                   

                                        <label htmlFor="employeename">{this.state.employee.employeename} </label><br />
                                        <label htmlFor="idnumber" >{this.state.employee.idnumber} </label>
                                        <br />
                                        <label htmlFor="date" >Date: </label>
                                        <input
                                            onBlur={() => this.handleUpdate(invoice._id)}
                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                            type="date" name="date" value={invoice.date}
                                        /><br />
                                        <label htmlFor="payperiodstart">Pay Period Start: </label>
                                        <input
                                            onBlur={() => this.handleUpdate(invoice._id)}
                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                            type="date" name="payperiodstart" value={invoice.payperiodstart} 
                                        />
                                        <label htmlFor="payperiodend">Pay Period End: </label>
                                        <input
                                            onBlur={() => this.handleUpdate(invoice._id)}
                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                            type="date" name="payperiodend" value={invoice.payperiodend} 
                                        /><br />
                                        <label htmlFor="client">Client1: </label>
                                        <input
                                            onBlur={() => this.handleUpdate(invoice._id)}
                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                            type="text" name="client" value={invoice.client} placeholder='Client'
                                        />
                                        <label htmlFor="rate">Rate $: </label>
                                        <input
                                            onBlur={() => this.handleUpdate(invoice._id)}
                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                            type="number" name="rate" value={invoice.rate} placeholder='Rate of pay'
                                        />
                                        <label htmlFor="frequency">Per:
                                            <select>
                                                <option value="minute">Minute</option>
                                                <option selected value="halfhour">Half Hour</option>
                                                <option value="hour">Hour</option>
                                            </select>
                                        </label>
                                        <input
                                            onBlur={() => this.handleUpdate(invoice._id)}
                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                            type="number" name="frequency" value={invoice.frequency} placeholder='Time worked'
                                        />
                                        
                                        <label htmlFor="client2">Client2: </label>
                                        <input
                                            onBlur={() => this.handleUpdate(invoice._id)}
                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                            type="text" name="client2" value={invoice.client2} placeholder='Client2'
                                        />
                                        <label htmlFor="rate2">Rate $: </label>
                                        <input
                                            onBlur={() => this.handleUpdate(invoice._id)}
                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                            type="number" name="rate2" value={invoice.rate2} placeholder='Rate of pay2'
                                        />
                                        <label htmlFor="frequency2">Per:
                                            <select>
                                                <option value="minute">Minute</option>
                                                <option selected value="halfhour">Half Hour</option>
                                                <option value="hour">Hour</option>
                                            </select>
                                        </label>
                                        <input
                                            onBlur={() => this.handleUpdate(invoice._id)}
                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                            type="number" name="frequency2" value={invoice.frequency2} placeholder='Time worked2'
                                        />
                                        <label htmlFor="subtotal">Subtotal: </label>
                                        <input
                                            onBlur={() => this.handleUpdate(invoice._id)}
                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                            type="number" name="subtotal" value={(invoice.rate * invoice.frequency+invoice.rate2 * invoice.frequency2).toFixed(2)} 
                                        />
                                        <label htmlFor="arisefee">Arise Fee: </label>
                                        <input
                                            onBlur={() => this.handleUpdate(invoice._id)}
                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                            type="number" name="arisefee" value={invoice.arisefee}
                                        />
                                        <label htmlFor="callumfee">Callum Ent. Fee: </label>
                                        <input
                                            onBlur={() => this.handleUpdate(invoice._id)}
                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                            type="number" name="callumfee" value={(invoice.rate * invoice.frequency *.10 + invoice.rate2 * invoice.frequency2 *.10).toFixed(2)} 
                                        />
                                        <label htmlFor="totaldue">Total Due this period: </label>
                                        <input
                                            onBlur={() => this.handleUpdate(invoice._id)}
                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                            type="number" name="totaldue" value={((.10 *-invoice.rate * invoice.frequency + invoice.rate * invoice.frequency) + (.10 *-invoice.rate2 * invoice.frequency2 + invoice.rate2 * invoice.frequency2) - invoice.arisefee).toFixed(2)} 
                                        />
                                    <br />

                                    <br />

                                    <button onClick={deleteInvoice} id="delBtn">Delete Invoice</button>
                                   
                                    <a href="javascript:window.print()"><img src="https://cdn1.iconfinder.com/data/icons/universal-shop-icons/512/Print.png" alt="print this page" id="print-button" /></a>
                                    <a href="javascript:window.print()"><img src="https://banner2.kisspng.com/20180629/sjy/kisspng-pdf-computer-icons-download-pdf-5b3643b8acb769.6550170315302829367075.jpg" alt="print this page" id="print-button" />Select "Save As PDF" under destination</a>
                                   
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