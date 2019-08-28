import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Select from 'react-select';
import AddLineItem from './AddLineItem'
import LineItems from './LineItems'


const BigDiv = styled.div`
input, textarea{
    background: rgba(151, 240, 240, 0.2);

}

`

const Addlogo = styled.div`
.addlogotext{
position: relative;

}
#imgurl{
    width: 99.5%;
    font-style: italic;
    font-weight: 100;
    font-size: 10px;

}

`

const InvoiceStyles = styled.div`

font-weight: 200;
input::placeholder{
    // color: red;
    font-style: italic;
}
  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: column;
  width: 800px;
  padding: 20px;
  box-shadow: 1px 1px 5px rgba(0,0,0, 0.4);
  margin: 10px 0;
  font-family: helvetica;
// background-image: url('https://img.freepik.com/free-photo/gray-wall-textures-background_74190-4389.jpg?size=626&ext=jpg');
background-size: cover;
background-repeat: no-repeat;

font-size: 12px;
.dollar::before {
    content: "$";
    // color: red;
}
.required::after {
    content: "*";
    color: red;
}
.employeename, .idnumber{
    font-size: 20px;
font-weight: bold;

  }
  button {
    // position: relative;
    margin-left: 41%;
    color: white;
    background-color: red;
    border-radius: 5px;
    font-size: 10px;
    height: 40px;
    width: 80px;
    
  }


#print-button {
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
     
  }
  a{
    text-decoration: none;
    font-size: 10px;
  }
  .invoiceNum{
margin-left: 68%;
color: rgba(0,0,0, 0.7);
font-weight: 200;
  }
  @media print
  {
@page{
    size:landscape;
}
    // height: 95vh;
  .noprint {display:none;}
  }

span{
    text-shadow: 1px 1px 1px rgba(0,0,0, 0.4);
    // display: none;
    font-size: 15px;
}

  td {
    // border:1px solid black;
padding: 10px;

    }
    
`

const Topbtns = styled.div`
@media print
{
.noprint {display:none;}
}
`

const TopInvoice = styled.div`
// border: black solid 1px;
margin-left: 67%;
margin-top: 10px;
position: absolute;
`
const PeriodInvoice = styled.div`
// border: black solid 1px;
margin-left: 40%;
margin-top: 10px;


`
const Client1Invoice = styled.div`
@media only screen and (max-width: 800px) {
    background-color: lightblue;
    flex-direction: column;
  
}
// border: gray solid 1px;
display: flex;
justify-content: space-evenly;
width: 100%;
input::placeholder{
    font-weight: 100;
    font-size: 10px;
}
tr{
    border-collapse:collapse;
    border:1px solid rgba(0,0,0, 0.2);
    // box-shadow: 1px 1px 4px rgba(0,0,0, 0.4);

    }
    
    td{
    border-left:1px solid rgba(0,0,0, 0.2);
    // box-shadow: 1px 1px 1px rgba(0,0,0, 0.4);

    }
th{
    // border-bottom:1px solid gray;
    // width: 100%;

}
#box{
    // border: gray solid 1px;

}
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
margin-top: 5%;
display: flex;
justify-content: space-evenly;
input{
    background: transparent;

}
input::placeholder{
    font-weight: 100;
    font-size: 10px;
}
`
const SubtotalBox = styled.div`
`
const CommentsBox = styled.div`

`

const TotalDue = styled.div`
// border: black solid 1px;
color: rgb(4, 111, 61);
font-weight: bold;
// padding-bottom: 50px;

input{
    background-color: rgba(01, 255, 20, 0.2);
    color: rgb(4, 111, 61);
    font-weight: bold;
    // width: 138.5px;

}
`
const OptionsInvoice = styled.div`
// border: black solid 1px;
text-decoration: none;
display: flex;
justify-content: space-between;
margin-left: 25%;
span{
    font-size: 50px;
}

`
const BkgdImg = styled.div`

`

const NewInvoiceButton = styled.button`
  background: rgb(28, 125, 147);
  color: white;
  font-size: 16px;
  border-radius: 5px;
  font-weight: 100;

`
const EditProfileBtn = styled.button`
background: #6A7FDB;
color: white;
border-radius: 5px;
margin-left: 60%;
font-size: 16px;
font-weight: 100;
a{
    text-decoration: none;
    color: white;

}
a:visited{
    color: white;
}
`

const InvoicesContainerStyle = styled.div`
//   display: flex;
//   justify-content: center;
  font-family: helvetica;
  font-size: 10px;
  @media print
  {
  .noprint {display:none;}
  }

`

const NameNButtonStyle = styled.div`
display: flex;
justify-content: center;

h1{
    font-weight: 200;
}  
  img{
    max-width: 200px;
    max-height: 200px;
        
   }
   font-family: helvetica;

`
const LogoStyles = styled.div`
font-weight: 200;
.employeeinfo{
    margin-left: 5%;
    position: absolute;
    // box-shadow: 1px 1px 5px rgba(0,0,0, 0.4);
    padding: 10px;
    // border: solid rgba(0,0,0, 0.2) .5px;
}

    img{
        width: 8%;
        z-index: 10;
        position: relative;
        // margin-left: 60%;
        max-width: 250px;
        margin-left: 2%;

        margin-top: -5%;
        margin-bottom: 50px;
    }

     .logo{
        z-index: 10;
        position: absolute;
        margin-left: 65%;

    }
    
    
`

class EmployeeShow extends Component {

    state = {

        employee: '',
        invoices: [],
        lineItems: [

        ],
        newInvoice: {
            date: '',
            payperiodstart: '',
            payperiodend: '',
            name: '',
            image: '',
            namefee: '',
            otherfee: '',
            idnumber: '',
            client: '',
            frequency: '',
            rate: '',
            subtotal: '',
            arisefee: '',
            callumfee: '',
            comments: '',
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
    deleteLineItem = (id) => {
        const lineItems = this.state.lineItems.filter(lineItem => {
            return lineItem.id !== id
        });
        this.setState({
            lineItems: lineItems
        })
    }
    addLineItem = (lineItem) => {
        lineItem.id = Math.random();
        let lineItems = [...this.state.lineItems, lineItem];
        this.setState({
            lineItems: lineItems
        })
    }



    // disCli2() {
    //     document.getElementsByName('input').style.display = 'block'
    // }
    render() {

        return (

            <div>
<BigDiv>
                <Topbtns>



                    <div className="noprint">
                        <NameNButtonStyle>
                            <h1>{this.state.employee.employeename}'s Invoices </h1>


                            <br />

                            
                        </NameNButtonStyle>
                        <NewInvoiceButton onClick={this.handleCreateNewInvoice}>
                            + Add New Invoice
                    </NewInvoiceButton>
                        <EditProfileBtn >
                        <Link to={`/employees/${this.props.match.params.employeeId}/profile`} > 
                        ⚙️ {this.state.employee.employeename} Profile
                            
                            </Link>
                        </EditProfileBtn>

                    </div>
                </Topbtns>

                <div>
                    <br />
                    <InvoicesContainerStyle>


                        <div className="noprint">
                                 {/* Auto update info for another company */}
                            {/* All updates are auto saved <br /> */}
                        </div>

                        {this.state.invoices.map(invoice => {

                            const deleteInvoice = () => {

                                return this.handleDelete(invoice._id)

                            }

                            return (
                                <Addlogo>

                                        {/* add logo field for another company */}
                                    {/* <label className="noprint addlogotext" htmlFor=""> Add your logo by copying and pasting a url link to the image here⬇ <a href="https://imgbb.com" target="_blank"> to upload from your 💻 computer click here for a url </a><br /> </label>
                                    <input className='logo noprint' id='imgurl'
                                        onBlur={() => this.handleUpdate(invoice._id)}
                                        onChange={(event) => this.handleChange(event, invoice._id)}
                                        name="image" placeholder='Paste your logo url here. (ie: https://example.com/logo123456.png) '
                                    /> */}
                                    <InvoiceStyles>

                                        <br />
                                        <BkgdImg>



                                            <label htmlFor="invoiceNum" className="invoiceNum">Invoice: {invoice._id} </label><br />

                                            <LogoStyles>

                                                <a href={invoice.link} >
                                                    {/* another company can add its own logo here */}
                                                    {/* <img src={invoice.image} alt="Add your logo"  /> */}

                                                    {/* Callum Enterprise logo */}
                                                    <img src="/images/CAL_ent_logo.png" alt="Add your logo" />
                                                    {/* <img src="/images/CAL_ent_logo.png" alt="logo" className='logo' /> */}

                                                </a>
                                                <br />
                                                <div className="employeeinfo">
                                                    <label htmlFor="employeename" className='employeename'>
                                                        {/* <span> 👤 </span> */}
                                                        {this.state.employee.employeename} </label> <br />
                                                    <label htmlFor="idnumber" className='idnumber'>
                                                        {/* <span> 💳 </span> */}
                                                        ID: {this.state.employee.idnumber} </label><br />
                                                    <label htmlFor="email" className='email'>
                                                        {/* <span> ✉️ </span> */}
                                                        {this.state.employee.email} </label><br />
                                                    <label htmlFor="phone" className='phone'>
                                                        {/* <span>📱</span>  */}
                                                        {this.state.employee.phone} </label>
                                                </div>

                                            </LogoStyles>
                                            <TopInvoice>

                                                <th> <label htmlFor="date" className='required' > <span> 📆 </span> Today's Date: </label></th>
                                                <input
                                                    onBlur={() => this.handleUpdate(invoice._id)}
                                                    onChange={(event) => this.handleChange(event, invoice._id)}
                                                    type="date" name="date" value={invoice.date}
                                                /><br />
                                                <br /><br />
                                            </TopInvoice>
                                            <PeriodInvoice>

                                                <th>    <label htmlFor="payperiodstart" className='required'><span> 🗓 </span>Pay Period: </label>  </th>
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

                                                <tr> <td id="box"><th><label htmlFor="client" className='required'><span> 🗂 </span>Client: </label></th>
                                                    <input
                                                        onBlur={() => this.handleUpdate(invoice._id)}
                                                        onChange={(event) => this.handleChange(event, invoice._id)}
                                                        type="text" name="client" value={invoice.client} placeholder='Client'
                                                    /></td>
                                                    <td id="box">  <th> <label htmlFor="timew" className='required'><span> ⏱ </span>Time Worked:</label></th>
                                                        <input
                                                            onBlur={() => this.handleUpdate(invoice._id)}
                                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                                            type="number" name="frequency" value={invoice.frequency} placeholder="Time Worked"
                                                        />
                                                        {/* {invoice.result}
                                                        {this.state.result} */}
                                                    </td>


                                                    <td id="box">  <th><label htmlFor="result" ><span> ⌛ </span>Interval Type: </label></th>
                                                        <input
                                                            onBlur={() => this.handleUpdate(invoice._id)}
                                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                                            type="text" name="result" value={invoice.result} placeholder='Minutes/Half-Hour/Hour'
                                                        /></td>
                                                    <td id="box">  <th><label htmlFor="rate" className='required'><span> 💵 </span>Interval Rate: </label></th>
                                                        $<input
                                                            onBlur={() => this.handleUpdate(invoice._id)}
                                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                                            type="number" name="rate" value={invoice.rate} placeholder='Rate of pay 0.00'
                                                        /></td>

                                                </tr> 
                                                
                                                {/* media query invoice */}
                                                <div className="mqueryInvoice">
                                                    
                                                </div>
                                                 
                                                <br />
                                                {/* <div className="lineItem-app container">
                                                    <h1 className="center blue-text">LineItems</h1>
                                                    <LineItems lineItems={this.state.lineItems} deleteLineItem={this.deleteLineItem} />
                                                    <AddLineItem addLineItem={this.addLineItem} value={invoice.frequency} />
                                                </div> */}
                                            </Client1Invoice>
                                            {/* <Client2Invoice className='client2Invoice'>
                                        <th>  <label htmlFor="client2">Client2: </label></th>
                                        <input
                                            onBlur={() => this.handleUpdate(invoice._id)}
                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                            type="text" name="client2" value={invoice.client2} placeholder='Client2'
                                        />
                                        <label htmlFor="rate2" className='required'>Rate: </label>
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
                                        <label htmlFor="timew2"className='required' >Time Worked:</label>
                                        <input
                                            onBlur={() => this.handleUpdate(invoice._id)}
                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                            type="number" name="frequency2" value={invoice.frequency2} placeholder='enter 0 if none'
                                        />
                                       
                                    </Client2Invoice> */}

                                       
                                            <TotalsInvoice>
                                                <CommentsBox>
                                       <th>   <label htmlFor="comments"><span> 📃 </span>Comments </label></th> 
                                     <textarea cols="50" rows="11"
                                             onBlur={() => this.handleUpdate(invoice._id)}
                                             onChange={(event) => this.handleChange(event, invoice._id)}
                                             type="text" name="comments" value={invoice.comments} placeholder=''></textarea>  
                                             </CommentsBox>
                                           
<SubtotalBox>
                                                <th>    <label htmlFor="subtotal">Subtotal: </label></th>
                                                $<input
                                                    onBlur={() => this.handleUpdate(invoice._id)}
                                                    onChange={(event) => this.handleChange(event, invoice._id)}
                                                    type="number" name="subtotal" value={(invoice.rate * invoice.frequency).toFixed(2)}
                                                // value={(invoice.rate * invoice.frequency + invoice.rate2 * invoice.frequency2).toFixed(2)}
                                                />

                                                {/* changeable fees for another company fee */}
                                                {/* <br/> <br/>
                                                <th>   <label htmlFor="namefee" >Add'l Fees to subtract (opt):</label></th>
                                                <input
                                                onBlur={() => this.handleUpdate(invoice._id)}
                                                onChange={(event) => this.handleChange(event, invoice._id)}
                                                type="text" placeholder='Business Fees (optional) name' name="namefee" value={invoice.namefee} /> <br/>
                                                $<input className="arfee"
                                                    onBlur={() => this.handleUpdate(invoice._id)}
                                                    onChange={(event) => this.handleChange(event, invoice._id)}
                                                    type="number" name="arisefee" value={invoice.arisefee} placeholder='enter 0 if none' required='true'
                                                />
                                                <br/> <br/>
                                                <th>    <label htmlFor="otherfee">Other fees to subtract (use decimals): </label></th>
                                                <input
                                                onBlur={() => this.handleUpdate(invoice._id)}
                                                onChange={(event) => this.handleChange(event, invoice._id)}
                                                type="text" placeholder='Taxes (optional) name' name="otherfee" value={invoice.otherfee} /> <br/>
                                                $<input
                                                    onBlur={() => this.handleUpdate(invoice._id)}
                                                    onChange={(event) => this.handleChange(event, invoice._id)}
                                                    type="number" name="callumfee" placeholder='enter 0 if none' value={(invoice.callumfee)}
                                                />
                                                <br/> <br/> 
                                                */}

                                                {/* Callum Enterprise Arise fees */}
                                                <br />
                                                <th>   <label htmlFor="arisefee" >Arise Fee:</label></th>
                                                $<input className="arfee"
                                                    onBlur={() => this.handleUpdate(invoice._id)}
                                                    onChange={(event) => this.handleChange(event, invoice._id)}
                                                    type="number" name="arisefee" value={19.75} placeholder='enter 0 if none' required='true'
                                                />

                                                <br />
                                                <th>    <label htmlFor="callumfee">IB Fee 10%:  </label></th>
                                                $<input
                                                    onBlur={() => this.handleUpdate(invoice._id)}
                                                    onChange={(event) => this.handleChange(event, invoice._id)}
                                                    type="number" name="callumfee" value={(invoice.rate * invoice.frequency * .10).toFixed(2)}
                                                // type="number" name="callumfee" value={(invoice.rate * invoice.frequency * .10 + invoice.rate2 * invoice.frequency2 * .10).toFixed(2)}
                                                />
                                                <br />


                                                <TotalDue>
                                                    {/* another company totals */}
                                                    {/* <th>   <label htmlFor="totaldue">Total <span> 💵 </span> Due this period: </label></th>
                                                    $<input
                                                        onBlur={() => this.handleUpdate(invoice._id)}
                                                        onChange={(event) => this.handleChange(event, invoice._id)}
                                                        type="number" name="totaldue" value={((invoice.callumfee * -invoice.rate * invoice.frequency + invoice.rate * invoice.frequency) - invoice.arisefee).toFixed(2)}
                                                    /> */}
                                                     {/* type="number" name="totaldue" value={((.10 * -invoice.rate * invoice.frequency + invoice.rate * invoice.frequency) + (.10 * -invoice.rate2 * invoice.frequency2 + invoice.rate2 * invoice.frequency2) - 19.75).toFixed(2)} */}


                                                    {/* Callum Ent totals */}
                                                    <th>   <label htmlFor="totaldue">Total <span> 💵 </span> Due this period: </label></th>
                                                    $<input
                                                        onBlur={() => this.handleUpdate(invoice._id)}
                                                        onChange={(event) => this.handleChange(event, invoice._id)}
                                                        type="number" name="totaldue" value={((.10 * -invoice.rate * invoice.frequency + invoice.rate * invoice.frequency) - 19.75).toFixed(2)}
                                                    // type="number" name="totaldue" value={((.10 * -invoice.rate * invoice.frequency + invoice.rate * invoice.frequency) + (.10 * -invoice.rate2 * invoice.frequency2 + invoice.rate2 * invoice.frequency2) - 19.75).toFixed(2)}
                                                    />
                                                </TotalDue>
                                                </SubtotalBox>
                                            </TotalsInvoice>
                                            <br /><br />
                                            <OptionsInvoice className='noprint'>
                                                {/* <a href="javascript:window.print()" ><img src="https://cdn1.iconfinder.com/data/icons/universal-shop-icons/512/Print.png" alt="print this page" id="print-button" /></a>
                                        <a href="javascript:window.print()"><img src="https://www.pngfind.com/pngs/m/205-2059706_adobe-pdf-downloads-pdf-icon-png-transparent-png.png" alt="save this page" id="save-button" /> <br />Select Destination</a> */}
                                                <a href="javascript:window.print()" ><span>🖨</span> <br /> Print Invoice</a>
                                                <a href="javascript:window.print()"><span>📥</span> <br /> Download <br /> (Select Destination) </a>
                                                <br />
<br/>
                                                {/* <button className='noprint' onClick={(deleteInvoice)} id="delBtn" >Delete Invoice</button> */}
                                            </OptionsInvoice>
                                            <button className='noprint dlet' onClick={e =>
                                                window.confirm("Are you sure you want to delete this invoice? There's no going back from here!") &&
                                                deleteInvoice(e)}>Delete this Invoice</button>
                                                 <br/> <br/><br/><br/><br/>
                                        </BkgdImg>


                                    </InvoiceStyles>
                                </Addlogo>

                            )

                        })}
                    </InvoicesContainerStyle>
                </div>
                </BigDiv>
                
            </div>
        )
    }
}

export default EmployeeShow