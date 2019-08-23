import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const InvoiceStyles = styled.div`

  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: column;
  width: 800px;
  padding: 20px;
  box-shadow: 1px 1px 3px black;
  margin: 10px 0;
  font-family: helvetica;
background-image: url('https://img.freepik.com/free-photo/gray-wall-textures-background_74190-4389.jpg?size=626&ext=jpg');
background-size: cover;
background-repeat: no-repeat;
font-size: 12px;
.dollar::before {
    content: "$";
    // color: red;
}
.required-field::after {
    content: "*";
    color: red;
}
.employeename, .idnumber{
    font-size: 20px;
font-weight: bold;

  }
  button {
    position: relative;

    color: white;
    background-color: red;
    border-radius: 5px;
    font-size: 10px;
    height: 40px;
    
  }


#print-button {
    // display: none;
    width: 50px;
    text-decoration: none;
}
#save-button {
    width: 50px;
    text-decoration: none;
}

  input{
    font-size: 13px;
    font-family: helvetica;
    // background: rgba(01, 240, 240, 0.2);
  }
  textarea {
    height: 70%;

  }
  img{
   max-width: 250px;
   )  
  }
  a{
    text-decoration: none;
    font-size: 10px;
  }
  .invoiceNum{
margin-left: 50%;
  }
.dataent{

}
`
const TopInvoice = styled.div`
// border: black solid 1px;
margin-left: 50%;
margin-top: -70px;
`
const PeriodInvoice = styled.div`
// border: black solid 1px;
margin-left: 50%;

`
const Client1Invoice = styled.div`
// border: black solid 1px;
`
const Client2Invoice = styled.div`
// border: black solid 1px;
// display: none;
input{
    // display: none;
}

`
const TotalsInvoice = styled.div`
// border: black solid 1px;
margin-left: 50%;

input{
    background: rgba(151, 240, 240, 0.2);

}
`
const TotalDue = styled.div`
// border: black solid 1px;
color: rgb(4, 111, 61);
font-weight: bold;
input{
    background-color: rgba(01, 255, 20, 0.2);
    color: rgb(4, 111, 61);
    font-weight: bold;
    width: 138.5px;
}
`
const OptionsInvoice = styled.div`
// border: black solid 1px;
text-decoration: none;
display: flex;
justify-content: space-around;
// padding: 10px;

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
// margin-left: 50%;

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
//   background-color: rgba(232, 232, 232, 0.653);
  font-family: helvetica;
  font-size: 10px;

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
   font-family: helvetica;

`
const LogoStyles = styled.div`


    img{
        width: 10%;
        // z-index: -10;
        position: absolute;
        margin-left: 80%;

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
    handleSelectChange = (event) => {
        this.setState({
            result: event.target.value
        })
    }
    // disCli2() {
    //     document.getElementsByName('input').style.display = 'block'
    // }
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

                <div>
                    <br />
                    <InvoicesContainerStyle>
                        <div className="dataent">
                        *Data entered into blue fields auto save</div>
                        {this.state.invoices.map(invoice => {
                            const deleteInvoice = () => {

                                return this.handleDelete(invoice._id)

                            }

                            return (

                                <InvoiceStyles>
                                    <label htmlFor="invoiceNum" className="invoiceNum">Invoice: {invoice._id} </label><br />

                                    <LogoStyles>
                                        <img src="/images/CAL_ent_logo.png" alt="logo" className='logo' />
                                        <br />
                                        <label htmlFor="employeename" className='employeename'>{this.state.employee.employeename} </label> <br/>
                                        <label htmlFor="idnumber" className='idnumber'> {this.state.employee.idnumber} </label><br/>
                                        <label htmlFor="email" className='email'> {this.state.employee.email} </label><br/>
                                        <label htmlFor="phone" className='phone'> {this.state.employee.phone} </label>

                                    </LogoStyles>
                                    <TopInvoice>

                                        <th> <label htmlFor="date" className='required-field' >Today's Date: </label></th>
                                        <input
                                            onBlur={() => this.handleUpdate(invoice._id)}
                                            onChange={(event) => this.handleChange(event, invoice._id)} 
                                            type="date" name="date" value={invoice.date}
                                        /><br />
                                        <br /><br />
                                    </TopInvoice>
                                    <PeriodInvoice>

                                        <th>    <label htmlFor="payperiodstart" className='required-field'>Pay Period: </label>  </th>
                                        <tr>  <label htmlFor="payperiodstart">Start: </label></tr>
                                        <input 
                                            onBlur={() => this.handleUpdate(invoice._id)}
                                            onChange={(event) => this.handleChange(event, invoice._id)} 
                                            type="date" name="payperiodstart" value={invoice.payperiodstart} 
                                        />
                                        <tr> <label htmlFor="payperiodend">End: </label></tr>
                                        <input
                                            onBlur={() => this.handleUpdate(invoice._id)}
                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                            type="date" name="payperiodend" value={invoice.payperiodend}
                                        /><br />
                                    </PeriodInvoice>

                                    <br /><br />
                                    <Client1Invoice>
                                        <th> <label htmlFor="client" className='required-field'>Client: </label></th>
                                        <input
                                            onBlur={() => this.handleUpdate(invoice._id)}
                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                            type="text" name="client" value={invoice.client} placeholder='Client'
                                        />
                                       <label htmlFor="rate" className='required-field'>Rate: </label> 
                                        $<input
                                            onBlur={() => this.handleUpdate(invoice._id)}
                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                            type="number" name="rate" value={invoice.rate} placeholder='Rate of pay 0.00'
                                        />
                                        <label htmlFor="frequency">Per:

                                            <select onClick={this.handleSelectChange}>
                                                
                                                <option value="Minute">Minute(s)</option>
                                                <option value="HalfHour">Half Hour(s)</option>
                                                <option value="Hour">Hour(s)</option>
                                            </select>

                                        </label>

                                        <label htmlFor="timew" className='required-field'>Time Worked:</label>
                                        <input
                                            onBlur={() => this.handleUpdate(invoice._id)}
                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                            type="number" name="frequency" value={invoice.frequency} placeholder="Time Worked"
                                        />
                                        {this.state.result} <br />

                                        {/* <a href="javascript:disCli2()">add new client</a> */}
                                    
                                    </Client1Invoice>
                                    {/* <Client2Invoice className='client2Invoice'>
                                        <th>  <label htmlFor="client2">Client2: </label></th>
                                        <input
                                            onBlur={() => this.handleUpdate(invoice._id)}
                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                            type="text" name="client2" value={invoice.client2} placeholder='Client2'
                                        />
                                        <label htmlFor="rate2" className='required-field'>Rate: </label>
                                        $<input
                                            onBlur={() => this.handleUpdate(invoice._id)}
                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                            type="number" name="rate2" value={invoice.rate2} placeholder='enter 0 if none'
                                        />
                                        <label htmlFor="frequency2">Per:
                                            <select> 

                                                <option value="Minute2">Minute(s)</option>
                                                <option value="HalfHour2">Half Hour(s)</option>
                                                <option value="Hour2">Hour(s)</option>
                                            </select>
                                        </label>
                                        <label htmlFor="timew2"className='required-field' >Time Worked:</label>
                                        <input
                                            onBlur={() => this.handleUpdate(invoice._id)}
                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                            type="number" name="frequency2" value={invoice.frequency2} placeholder='enter 0 if none'
                                        />
                                       
                                    </Client2Invoice> */}
                                    <br /><br />
                                    <TotalsInvoice>
                                        <th>    <label htmlFor="subtotal">Subtotal: </label></th>
                                         $<input
                                            onBlur={() => this.handleUpdate(invoice._id)}
                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                            type="number" name="subtotal" value={(invoice.rate * invoice.frequency).toFixed(2)}
                                            // value={(invoice.rate * invoice.frequency + invoice.rate2 * invoice.frequency2).toFixed(2)}
                                        />
                                        <th>   <label htmlFor="arisefee" >Arise Fee:</label></th>
                                         $<input className="arfee"
                                            onBlur={() => this.handleUpdate(invoice._id)}
                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                            type="number" name="arisefee" value={19.75} placeholder='enter 0 if none' required='true'
                                        />
                                        <th>    <label htmlFor="callumfee">IB Fee 10%:  </label></th>
                                         $<input
                                            onBlur={() => this.handleUpdate(invoice._id)}
                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                            type="number" name="callumfee" value={(invoice.rate * invoice.frequency * .10).toFixed(2)}
                                            // type="number" name="callumfee" value={(invoice.rate * invoice.frequency * .10 + invoice.rate2 * invoice.frequency2 * .10).toFixed(2)}
                                        />
                                        <br /><br />
                                        <TotalDue>
                                            <th>   <label htmlFor="totaldue">Total Due this period: </label></th>
                                             $<input
                                                onBlur={() => this.handleUpdate(invoice._id)}
                                                onChange={(event) => this.handleChange(event, invoice._id)}
                                                type="number" name="totaldue" value={((.10 * -invoice.rate * invoice.frequency + invoice.rate * invoice.frequency) - 19.75).toFixed(2)}
                                                // type="number" name="totaldue" value={((.10 * -invoice.rate * invoice.frequency + invoice.rate * invoice.frequency) + (.10 * -invoice.rate2 * invoice.frequency2 + invoice.rate2 * invoice.frequency2) - 19.75).toFixed(2)}
                                            />
                                        </TotalDue>
                                    </TotalsInvoice>
                                    <br /><br /><br />
                                    <OptionsInvoice>
                                        <a href="javascript:window.print()"><img src="https://cdn1.iconfinder.com/data/icons/universal-shop-icons/512/Print.png" alt="print this page" id="print-button" /></a>
                                        <a href="javascript:window.print()"><img src="https://www.pngfind.com/pngs/m/205-2059706_adobe-pdf-downloads-pdf-icon-png-transparent-png.png" alt="save this page" id="save-button" /> <br />Select Destination</a>
                                        <button onClick={deleteInvoice} id="delBtn" >Delete Invoice</button>

                                    </OptionsInvoice>
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