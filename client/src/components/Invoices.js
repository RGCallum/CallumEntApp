import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const BigDiv = styled.div`
input, textarea{
    background: rgba(151, 240, 240, 0.2);
border-radius: 3px;
border: .5px solid rgba(0,0,0, 0.2);
padding: 5px;
}
@media print
{
    input{
        // border:none;
        background: transparent;
    }
    textarea{
        background: transparent;
    }
}
input:focus, textarea:focus{
    background: rgba(255, 212, 39, 0.2);

}
h1{
    font-family: helvetica;
  font-weight: 500;
  color: rgb(43, 172, 174);
  text-shadow: 1px 1px 1px rgba(0,0,0, 0.5);
  
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
font-size: 12px;
font-weight: 200;

  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: column;
  width: 800px;
  padding: 20px;
  box-shadow: 1px 1px 5px rgba(0,0,0, 0.4);
//   margin: 10px 0;
  font-family: helvetica;
// background-image: url('https://img.freepik.com/free-photo/gray-wall-textures-background_74190-4389.jpg?size=626&ext=jpg');
background-size: cover;
background-repeat: no-repeat;

input::placeholder{
    // color: red;
    font-style: italic;
}
.dollar::before {
    content: "$";
    // color: red;
}
.required::after {
    content: "*";
    color: red;
    @media print{    
        display:none;
    }
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
button:hover{
    background-color: white;
    color:red;
    cursor:pointer;

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
@media only screen and (max-width: 414px){
    margin-left: 52%;
}
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
    
@media print{
  @page{
    //   size:landscape;
  }
      height: 95vh;
    .noprint {
        display:none;
        }
    }
`

const Topbtns = styled.div`
display: flex;
justify-content: center;
@media print
{
.noprint {display:none;}
}
@media only screen and (max-width: 414px){
    display: flex;
justify-content: center;
}
`

const TopInvoice = styled.div`
// border: black solid 1px;
margin-left: 67%;
margin-top: 10px;
position: absolute;
@media only screen and (max-width: 414px) {
    margin-top: -25%;
    margin-left: 57%;
    input{
        width: 105px;

    }
  
}
`
const PeriodInvoice = styled.div`
// border: black solid 1px;
margin-left: 40%;
margin-top: 10px;

@media only screen and (max-width: 414px){
margin-left: 60%;
margin-top: 10px;

input{
    width: 105px;

}

}

`
const Client1Invoice = styled.div`
@media only screen and (max-width: 800px) {
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
@media only screen and (max-width: 414px) {
    input{
        width: 30px;
    }
  textarea{
      width: 60px;
  }
}
`
const SubtotalBox = styled.div`
border:.5px solid rgba(0,0,0, 0.2);
border-radius: 2px;
padding: 5px;
// display: flex; 
// flex-direction: column;
// justify-content: space-between;

input{
    border: none;
    float: right; 
    text-align: right;
    align-content: right;
}
input:focus, textarea:focus{
    background: transparent;

}
label{
    font-weight: 600;
    
}
.subLineBrdr{
    border:.5px solid rgba(0,0,0, 0.2);

}
@media only screen and (max-width: 414px) {
    input{
        width: 30px;
    }
  button{
      width: 30px;
  }
}
`
const CommentsBox = styled.div`

`

const TotalDue = styled.div`
// border: black solid 1px;
color: rgb(4, 111, 61);
font-weight: bold;
// padding-bottom: 50px;

input{
    // background-color: rgba(01, 255, 20, 0.2);
    color: rgb(4, 111, 61);
    font-weight: bold;
    width: 130px;

}
@media only screen and (max-width: 414px) {
    input{
        width: 30px;
    }
  textarea{
      width: 60px;
  }
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
  font-weight: 300;
cursor: pointer;
a:visited {
    text-decoration: none;
  }
a:hover{
    color: #6A7FDB;

}
:hover{
    background: white;
    color: rgb(28, 125, 147);
}
height: 26.5px;

@media only screen and (max-width: 414px){
    font-size: 14px;
    height: 28px;

}
`
const EditProfileBtn = styled.button`
background: #6A7FDB;
color: white;
border-radius: 5px;
font-size: 16px;
font-weight: 300;
a{
    text-decoration: none;
    color: white;

}
a:visited {
    text-decoration: none;
  }

:hover{
    background: white;
    a{
        color: #6A7FDB;

    }
}
@media only screen and (max-width: 414px){
    font-size: 14px;
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
@media only screen and (max-width: 414px){
    font-size: 14px;
}
`
const LogoStyles = styled.div`
font-weight: 200;
.employeeinfo{
    margin-left: 5%;
    position: absolute;
    // box-shadow: 1px 1px 5px rgba(0,0,0, 0.4);
    padding: 10px;
    // border: solid rgba(0,0,0, 0.2) .5px;
    @media only screen and (max-width: 414px){
        margin-left: 0%;
    }
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
        @media only screen and (max-width: 414px){
            width: 15%; 
            position: relative;

        }
    }

     .logo{
        z-index: 10;
        position: absolute;
        margin-left: 65%;

    }
    
    
`
const LineItemsGrid = styled.div`
border: solid rgb(182, 182, 182) .5px;
border-radius: 2px;
box-sizing: content-box;
display: flex;
flex-direction: column;
input{
    width: 100px;
}
td{
    border-left:.5px solid rgba(0,0,0, 0.2);
width: 30%;
// padding-top: 1px;
&:first-of-type {
    border-left: none;
  }
    }
.row{

    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    background-color: rgba(182, 182, 182, 0.2);
    // padding: 10px;
    border-bottom: solid rgb(182, 182, 182) .5px;
font-weight: 700;
@media only screen and (max-width: 414px) {
    // width: 50%;
}
}
.lineItems{
    // border-top: solid rgb(182, 182, 182) .5px;

    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    // padding: 10px;

}
input::placeholder{
    font-weight: 100;
    font-size: 10px;
}
@media only screen and (max-width: 414px) {
    td{
        width: 40px;
    }
    input{
        width: 30px;
    }
}
`

class Invoices extends Component {
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
        result2: '',
        client2: '',
        frequency2: '',
        rate2: '',
        uploadImage: '',
        math: '',
        sub1: '',
        sub2: '',
        showSubs: '',
        callumfeeResults: '',
        showTotalCalc: '',
        viewSubs: '',
total: ''
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
        // image change
        if (event.target.files && event.target.files[0]) {
            this.setState({
                uploadImage: URL.createObjectURL(event.target.files[0])

            });

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
// onImageChange = (event) => {
//     if (event.target.files && event.target.files[0]) {
//       this.setState({
//         uploadImage: URL.createObjectURL(event.target.files[0])

//       });
//     }
//    }


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

                        </NameNButtonStyle>
                        <NewInvoiceButton onClick={this.handleCreateNewInvoice}>
                            ➕ Add New Invoice
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


                         
// one big function for all client math 
function executeMath() {

    // client1 math
    var numOne = document.getElementById('sub1').value;
    var frequency = document.getElementById('frequency').value;
    var rate = document.getElementById('rate').value;
    var addClient1 = parseInt(frequency) * parseInt(rate);
    document.getElementById('sub1').value = addClient1;
    console.log("Client 1 subtotal is", numOne, addClient1)

    // client2 math
    var numTwo = document.getElementById('sub2').value;
    var frequency2 = document.getElementById('frequency2').value;
    var rate2 = document.getElementById('rate2').value;
    var addClient2 = parseInt(frequency2) * parseInt(rate2);
    document.getElementById('sub2').value = addClient2;
    
    if (document.getElementById('sub2').value === ''){
      console.log("no client 2 listed")
    } else{
      console.log("Client 2 subtotal is", addClient2);
    }

    // add subtotals math
    var numOne = document.getElementById('sub1').value;
    var numTwo = document.getElementById('sub2').value;
    var showSubs = document.getElementById('showSubs').value;
    var viewSubs = parseInt(numOne) + parseInt(numTwo);

    document.getElementById('viewSubs').value = viewSubs;
    if (document.getElementById('sub2').value === '') {
      console.log("Subtotal is", numOne)
      document.getElementById('viewSubs').value = document.getElementById('sub1').value;
      document.getElementById('showSubs').value = viewSubs;
    } else {
      console.log('Subtotal is', viewSubs)
      document.getElementById('showSubs').value = viewSubs;
    }

    // multiplication for percentage and show result 
    var showSubs = document.getElementById('showSubs').value;
    var callumfeeResults = document.getElementById('callumfeeResults').value;
    var callumfee = document.getElementById('callumfee').value;
    var multiCalFee = (showSubs) * (callumfee);
    document.getElementById('callumfeeResults').value = multiCalFee;
    console.log("callum fee is", multiCalFee);

    // subtraction of whole number fee and percentage fee from subtotals
    var showSubs = document.getElementById('showSubs').value;
    var arisefee = document.getElementById('arisefee').value;
    var total = document.getElementById('total').value;
    var showTotalCalc = document.getElementById('showTotalCalc').value;
    var callumfee = document.getElementById('callumfee').value;
    var callumfeeResults = document.getElementById('callumfeeResults').value;
    var minus = parseInt(showSubs) - parseInt(arisefee) - parseInt(callumfeeResults);
    document.getElementById('showTotalCalc').value = minus;
    document.getElementById('total').value = document.getElementById('showTotalCalc').value;
    console.log("arise fee is", arisefee);
    console.log("Total due is", document.getElementById('showTotalCalc').value);



//   var numOne = document.getElementById('sub1').value;
//   var frequency = document.getElementById('frequency').value;
//   var rate = document.getElementById('rate').value;
//   var numTwo = document.getElementById('sub2').value;
//   var frequency2 = document.getElementById('frequency2').value;
//   var rate2 = document.getElementById('rate2').value;
// //   var numOne = document.getElementById('sub1').value;
// //   var numTwo = document.getElementById('sub2').value;
//   var showSubs = document.getElementById('showSubs').value;
// //   var showSubs = document.getElementById('showSubs').value;
//   var callumfeeResults = document.getElementById('callumfeeResults').value;
//   var callumfee = document.getElementById('callumfee').value;
// //   var showSubs = document.getElementById('showSubs').value;
//   var arisefee = document.getElementById('arisefee').value;
//   var total = document.getElementById('total').value;
//   var showTotalCalc = document.getElementById('showTotalCalc').value;
// //   var callumfee = document.getElementById('callumfee').value;
// //   var callumfeeResults = document.getElementById('callumfeeResults').value;

// var addClient1 = parseInt(frequency) * parseInt(rate);
// var addClient2 = parseInt(frequency2) * parseInt(rate2);
// var viewSubs = parseInt(numOne) + parseInt(numTwo);
// var multiCalFee = (showSubs) * (callumfee);
// var minus = parseInt(showSubs) - parseInt(arisefee) - parseInt(callumfeeResults);

//   // client1 math
//   document.getElementById('sub1').value = addClient1;
//   console.log("Client 1 subtotal is", numOne, addClient1)

//   // client2 math
//   document.getElementById('sub2').value = addClient2;
//   if (document.getElementById('sub2').value === ''){
//     console.log("no client 2 listed")
//   } else{
//     console.log("Client 2 subtotal is", addClient2);
//   }

//   // add subtotals math
//   document.getElementById('viewSubs').value = viewSubs;
//   if (document.getElementById('sub2').value === '') {
//     console.log("Subtotal is", numOne)
//     document.getElementById('viewSubs').value = document.getElementById('sub1').value;
//     document.getElementById('showSubs').value = viewSubs;
//   } else {
//     console.log('Subtotal is', viewSubs)
//     document.getElementById('showSubs').value = viewSubs;
//   }

//   // multiplication for percentage and show result 
//   document.getElementById('callumfeeResults').value = multiCalFee;
//   console.log("callum fee is", multiCalFee);

//   // subtraction of whole number fee and percentage fee from subtotals
//   document.getElementById('showTotalCalc').value = minus;
//   document.getElementById('total').value = document.getElementById('showTotalCalc').value;
//   console.log("arise fee is", arisefee);
//   console.log("Total due is", document.getElementById('showTotalCalc').value);

  }

                            return (
                                <Addlogo>

                                    {/* below is add logo url input field for another company */}
                                    {/* <label className="noprint addlogotext" htmlFor=""> Add your logo by copying and pasting a url link to the image here⬇ <a href="https://imgbb.com" target="_blank"> to upload from your 💻 computer click here for a url </a><br /> </label>
                                <input className='logo noprint' id='imgurl'
                                    onBlur={() => this.handleUpdate(invoice._id)}
                                    onChange={(event) => this.handleChange(event, invoice._id)}
                                    name="image" placeholder='Paste your logo url here. (ie: https://example.com/logo123456.png) '
                                /> */}

                                    {/* below is upload input field for another company */}
                                    {/* <input type="file" 
                                    onBlur={() => this.handleUpdate(invoice._id)}
                                    onChange={(event) => this.handleChange(event, invoice._id)}
                                    name="uploadImage" className="logo noprint filetype" id="imgurl group_image"
                                    /> */}

                                    <InvoiceStyles>

                                        <br />
                                        <BkgdImg>







                                            <LogoStyles>

                                                <label htmlFor="invoiceNum" className="invoiceNum">ID: {invoice._id} </label><br />

                                                <a href={invoice.link} >

                                                    {/* another company can add its own logo here */}

                                                    {/* below is for url linked image  */}
                                                    {/* <img src={invoice.image} alt="Add your logo"  />  */}

                                                    {/* below is for uploaded image  */}
                                                    {/* <img id="target" src={this.state.uploadImage} name='image' alt="Add your logo" />  */}

                                                    {/* below is Callum Enterprise logo */}
                                                    <img src="/images/CAL_ent_logo.png" alt="Add your logo" />

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
                                            <LineItemsGrid>



                                                <div className="row header">
                                                    <td>    <div className='required'><span> 🗂 </span> Client </div></td>
                                                    <td>    <div className='required'><span> ⏱ </span> Time-Worked </div></td>
                                                    <td>    <div ><span> ⌛ </span> Interval Type </div></td>
                                                    <td>    <div className='required'><span> 💵 </span>Interval Rate </div></td>
                                                    <td>    <div ><span> 💵 </span>Subtotals </div></td>

                                                </div>
                                                <div className="lineItems">
                                                    <td >    <input
                                                        onBlur={() => this.handleUpdate(invoice._id, executeMath())}
                                                        onChange={(event) => this.handleChange(event, invoice._id)}
                                                        type="text" name="client" value={invoice.client} placeholder='Client'
                                                    /></td>
                                                    <td>    <input id="frequency"
                                                        onBlur={() => this.handleUpdate(invoice._id, executeMath())}
                                                        onChange={(event) => this.handleChange(event, invoice._id, executeMath()) }
                                                        type="number" name="frequency" value={invoice.frequency} placeholder="Time Worked"
                                                    /></td>
                                                    <td>      <input
                                                        onBlur={() => this.handleUpdate(invoice._id, executeMath())}
                                                        onChange={(event) => this.handleChange(event, invoice._id)}
                                                        type="text" name="result" value={invoice.result} placeholder='Minutes/Half-Hour/Hour'
                                                    /></td>
                                                    
                                                    <td>     <input id='rate'
                                                        onBlur={() => this.handleUpdate(invoice._id, executeMath())}
                                                        onChange={(event) => this.handleChange(event, invoice._id, executeMath())}
                                                        type="number" name="rate" value={invoice.rate} placeholder='Rate of pay 0.00'
                                                    /> </td>
                                                    <td>     <input id='sub1'
                                                    
                                                        onBlur={() => this.handleUpdate(invoice._id)}
                                                        onChange={(event) => this.handleChange(event, invoice._id, executeMath())}
                                                        type="number" name="sub1" value={invoice.sub1}
                                                        // type="number" name="sub1" value={(invoice.rate * invoice.frequency).toFixed(2)}
                                                    /> </td>
                                                </div>

                                                <div className="lineItems client2line">
                                                    <td >    <input
                                                        onBlur={() => this.handleUpdate(invoice._id, executeMath())}
                                                        onChange={(event) => this.handleChange(event, invoice._id)}
                                                        type="text" name="client2" value={invoice.client2} placeholder='Client'
                                                    /></td>
                                                    <td>    <input id="frequency2"
                                                        onBlur={() => this.handleUpdate(invoice._id, executeMath())}
                                                        onChange={(event) => this.handleChange(event, invoice._id, executeMath())}
                                                        type="number" name="frequency2" value={invoice.frequency2} placeholder="Enter 0 if none"
                                                    /></td>
                                                    <td>      <input
                                                        onBlur={() => this.handleUpdate(invoice._id, executeMath())}
                                                        onChange={(event) => this.handleChange(event, invoice._id)}
                                                        type="text" name="result2" value={invoice.result2} placeholder='Minutes/Half-Hour/Hour'
                                                    /></td>
                                                    <td>     <input id="rate2"
                                                        onBlur={() => this.handleUpdate(invoice._id, executeMath())}
                                                        onChange={(event) => this.handleChange(event, invoice._id, executeMath())}
                                                        type="number" name="rate2" value={invoice.rate2} placeholder="Enter 0 if none"
                                                    /> </td>
                                                    <td>     <input id='sub2'
                                                   
                                                    onBlur={() => this.handleUpdate(invoice._id)}
                                                    onChange={(event) => this.handleChange(event, invoice._id)}
                                                    type="number" name="sub2" value={invoice.sub2}
                                                        // type="number" name="sub2" value={(invoice.rate2 * invoice.frequency2).toFixed(2)}
                                                    /> </td>
                                                </div>
                                            </LineItemsGrid>
                                            <Client1Invoice>

                                                {/* <tr> <td id="box"><th><label htmlFor="client" className='required'><span> 🗂 </span>Client: </label></th>
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

                                                </tr> */}

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



                                            <TotalsInvoice>
                                                <CommentsBox>
                                                    <th>   <label htmlFor="comments"><span> 📃 </span>Comments </label></th>
                                                    <textarea cols="50" rows="11"
                                                        onBlur={() => this.handleUpdate(invoice._id)}
                                                        onChange={(event) => this.handleChange(event, invoice._id)}
                                                        type="text" name="comments" value={invoice.comments} placeholder=''></textarea>
                                                </CommentsBox>
                                                {/* <input type="button" value="Calculate Client Subtotals" onClick={e =>
                                                        executeMath()} /> */}

                                                <SubtotalBox>
                                                    <input type="button" id="subBtn" value="View subtotal" name="math" onClick={e =>
                                                        executeMath()} />

                                                    <tr >  <label htmlFor="subtotal">Subtotal:</label>
                                                        <input id="viewSubs"
                                                            // onBlur={() => this.handleUpdate(invoice._id)}
                                                            // onChange={(event) => this.handleChange(event, invoice._id)}
                                                            type="number" name="viewSubs" value={invoice.showSubs}
                                                        // type="number" name="subtotal" value={(invoice.rate * invoice.frequency).toFixed(2)}
                                                        // type="text" name="subtotal" value={"$" + (invoice.rate * invoice.frequency + invoice.rate2 * invoice.frequency2).toFixed(2)}
                                                        // type="number" value={((invoice.rate * invoice.frequency).toFixed(2)||(invoice.rate * invoice.frequency + invoice.rate2 * invoice.frequency2).toFixed(2))}

                                                        /></tr>


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
                                                    <input id="showSubs" type="number" name="showSubs" value={invoice.showSubs}/>
                                                    
                                                    <tr > <label htmlFor="arisefee" >Arise Fee:</label>
                                                        <input className="arfee" id="arisefee"
                                                        type="number" name="arisefee" value={20}
                                                            onBlur={() => this.handleUpdate(invoice._id)}
                                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                                            // type="text" name="arisefee" value={"$" + 19.75} placeholder='enter 0 if none' required='true'
                                                        // type="text" name="arisefee" value={19.75} placeholder='enter 0 if none' required='true'

                                                        /></tr>
                                                    <tr >
                                                        <label htmlFor="callumfee">IB Fee 10%:</label>
                                                        <input id="callumfeeResults" type="number" name="callumfeeResults" value={invoice.callumfeeResults} 
                                                        onBlur={() => this.handleUpdate(invoice._id)}
                                                        onChange={(event) => this.handleChange(event, invoice._id, executeMath()) }
                                                        />
                                                        <input id="callumfee"
                                                            onBlur={() => this.handleUpdate(invoice._id)}
                                                            onChange={(event) => this.handleChange(event, invoice._id, executeMath())}
                                                            type="hidden" name="callumfee" value={0.10}   

                                                            // type="number" name="callumfee" value={(invoice.rate * invoice.frequency * .10).toFixed(2)}
                                                            // type="text" name="callumfee" value={"$" + (invoice.rate * invoice.frequency * .10 + invoice.rate2 * invoice.frequency2 * .10).toFixed(2)}
                                                        // type="number" name="callumfee" value={((invoice.rate * invoice.frequency * .10).toFixed(2)||(invoice.rate * invoice.frequency * .10 + invoice.rate2 * invoice.frequency2 * .10).toFixed(2))}

                                                        /></tr>



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
                                                        <input id="showTotalCalc" type="hidden" name="showTotalCalc" value={invoice.showTotalCalc}/>

                                                        <tr className='subLineBrdr'>   <label htmlFor="totaldue">Total <span> 💵 </span> Due: </label>
                                                            <input 
                                                            id="total" type="number" name="total"
                                                                onBlur={() => this.handleUpdate(invoice._id)}
                                                                onChange={(event) => this.handleChange(event, invoice._id)}
                                                                // type="number" name="totaldue" value={((.10 * -invoice.rate * invoice.frequency + invoice.rate * invoice.frequency) - 19.75).toFixed(2)}
                                                                // type="text" name="totaldue" value={"$" + ((.10 * -invoice.rate * invoice.frequency + invoice.rate * invoice.frequency) + (.10 * -invoice.rate2 * invoice.frequency2 + invoice.rate2 * invoice.frequency2) - 19.75).toFixed(2)}
                                                            // type="number" name="totaldue" value={((.10 * -invoice.rate * invoice.frequency + invoice.rate * invoice.frequency - 19.75).toFixed(2) || ((.10 * -invoice.rate * invoice.frequency + invoice.rate * invoice.frequency) + (.10 * -invoice.rate2 * invoice.frequency2 + invoice.rate2 * invoice.frequency2) - 19.75).toFixed(2))}

                                                            /></tr>
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
                                                <br />
                                            </OptionsInvoice>
                                            <button className='noprint dlet' onClick={e =>
                                                window.confirm("Are you sure you want to delete this invoice? There's no going back from here!") &&
                                                deleteInvoice(e)}>⛔️ Delete this Invoice</button>
                                            <br /> <br /><br /><br /><br />
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
export default Invoices;


