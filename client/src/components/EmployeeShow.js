import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaMinusCircle, FaIdBadge, FaBriefcase, FaAddressCard, FaPlusCircle, FaComments, FaCog, FaStopwatch, FaFolder, FaHourglassHalf, FaCalendarDay, FaCalendarAlt, FaUserClock, FaClock, FaMoneyCheckAlt, FaMoneyBillAlt, FaHandHoldingUsd, FaFileInvoiceDollar, FaDollarSign, FaFolderOpen, FaPrint, FaFileDownload, FaCartPlus } from 'react-icons/fa';
import NavBar from '../components/NavBar'



const BigDiv = styled.div`
input, textarea{
    background: rgba(151, 240, 240, 0.2);
border-radius: 3px;
border: .5px solid rgba(0,0,0, 0.2);
padding: 5px;
font-family: helvetica;
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
  color: rgb(43, 172, 174);
//   text-shadow: 1px 1px 1px rgba(0,0,0, 0.5);
  
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
button{
    background: turquoise;
}
h3{
    font-weight: 200;
    color: rgb(60,60,60);
    // text-align: center;
    margin-bottom: 2px;
}
h3:hover{
    color: rgb(43, 172, 174);
}
`
const InvoicesContainerStyle = styled.div`
// box-shadow: 1px 1px 5px rgba(0,0,0, 0.4);


//   display: flex;
//   justify-content: center;
  font-family: helvetica;
  font-size: 10px;
  padding: 20px;
  @media print
  {
  .noprint {display:none;}

  }

`
const InvoiceStyles = styled.div`
// border: 1px 1px 5px rgba(0,0,0, 0.4);

font-size: 12px;
font-weight: 200;
  
  font-family: helvetica;
// background-image: url('https://img.freepik.com/free-photo/gray-wall-textures-background_74190-4389.jpg?size=626&ext=jpg');
background-size: cover;
background-repeat: no-repeat;
.memo{
    padding: 10px;
    // box-shadow: 1px 1px 5px rgba(0,0,0, 0.4);
    border: dashed rgb(182, 182, 182) .5px;

}

input::placeholder{
    font-style: italic;
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
    // position: absolute;
    // margin-left: 40vw;
    color: white;
    background-color: red;
    border-radius: 5px;
    font-size: 10px;
    // height: 40px;
    // width: 80px;
    
  }

button:hover{
    background-color: white;
    color:red;
    cursor:pointer;

}
.printSave{
    text-align: center;

button{
    background-color: white;
    padding: 5px 5px 5px 5px;
    color: rgb(43, 172, 174);
    border: inset .5px #c0c0c0;
        
         
}
button:hover{
    color: white;
    background-color: rgb(43, 172, 174);
}
p{
    margin-bottom: -2px;
    margin-top: -3px;
}
span, p{
    font-size: 15px;
    font-weight: 100;
}
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
      height: 93vh;
    .noprint {
        display:none;
        }
        span{
            display:none;
        }
    }
`

const Topbtns = styled.div`
display: flex;
justify-content: center;
text-align: center;
padding-top: 20px;

@media print
{
.noprint {display:none;}
}
@media only screen and (max-width: 414px){
    display: flex;
justify-content: center;
}
.icons{
    padding-top: 3px;
}
`

const TopInvoice = styled.div`
// border: black solid 1px;
margin-left: 75%;
margin-top: 8%;
position: relative;
@media only screen and (max-width: 414px) {
    margin-top: -27%;
    margin-left: 55%;
    margin-bottom: -10px;
    input{
        width: 115px;
    }  
}
@media print { 
        input{
            border: none;
        }  

}
z-index: 100;
`
const PeriodInvoice = styled.div`
padding-top: 20px;
padding-bottom: 10px;
// border: black solid 1px;
// margin-left: 20%;
// margin-top: 5%;
display: flex;
flex-direction: row;
flex-wrap: no-wrap;
justify-content: center;
text-align: center;
align-content: center;
input{
    width: 35%;
}
@media only screen and (max-width: 414px){
// margin-top: -26%;
margin-left: -5%;

input{
    width: 100px;
    height: 100%;
}

}
@media print { 
    padding-top: 80px;
    input{
        border: none;
        
    } 
    input[type="date"]::-webkit-clear-button{
        display: none;
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
// border: solid rgb(182, 182, 182) .5px;
margin-top: 5%;
display: flex;
justify-content: space-evenly;
padding-bottom: 20px;

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
      width: 100px;
  }
}
@media print{
    padding-top: 80px;
}
`
const SubtotalBox = styled.div`
border:.5px solid rgba(0,0,0, 0.2);
border-radius: 2px;
padding: 5px;

tr{
    // display: flex;
    
    align-items: center;

}
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
#subBtn{
    // float: left;
    background-color: #b4bfd36d;
    border:.5px solid rgba(0,0,0, 0.2);
  

}
@media only screen and (max-width: 414px) {
    input{
        width: 100px;
        #subBtn{
            width: 100px;
        }
    }
    
}
`
const CommentsBox = styled.div`

textarea{

}
`

const TotalDue = styled.div`
border-top: solid rgb(182, 182, 182) .5px;

color: rgb(28, 147, 145);
font-weight: bold;
// padding-bottom: 50px;

input{
    // background-color: rgba(01, 255, 20, 0.2);
    color: rgb(28, 147, 145);
    font-weight: bold;
    width: 132.5px;

}
@media only screen and (max-width: 414px) {
    input{
        width: 95px;    }
  
}
@media print{
    color: black;
input{
        color: black;
        // width: 115%;
}
}
`
const OptionsInvoice = styled.div`
padding-top: 5px;
padding-bottom: 20px;
// border: black solid 1px;
// width: 50%;
text-decoration: none;
display: flex;
justify-content: space-evenly;
text-align: center;

// span{
//     font-size: 30px;
//     color: rgb(43, 172, 174);
//     font-weight: 200;
// }
// a{
//     color: rgb(28, 125, 147);

//     font-size: 12px;
// }
// a:visited {
//     color: rgb(28, 125, 147);
//   }
  button{
border: inset .5px #c0c0c0;

  }

`
const DletBtn = styled.div`
display: flex;
justify-content: space-evenly;
text-align: center;
padding-top: 20px;
padding-bottom: 10px;
button{
    padding: 10px;

}
`


const BkgdImg = styled.div`
width: 100%;
box-shadow: 1px 1px 10px  rgba(0,0,0, 0.4);
padding: 20px;
margin-left: -20px;
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
    height: 26.5px;

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
const InvoiceBtn = styled.div`
// display: flex;
// justify-content: center;
color: #d090c3;
font-weight: 300;
font-family: helvetica;

button{
  background: #d090c3;
  color: white;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 300;
}
button:hover{
  background: white;
  cursor:pointer;
  color: #d090c3;
  
}

`


const NameNButtonStyle = styled.div`
display: flex;
justify-content: center;

h1{
    font-weight: 500;
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

.employeeinfo{
    margin-left: 5%;
    margin-top: 6%;
    position: absolute;
    padding: 10px;
    // border: solid rgba(0,0,0, 0.2) .5px;
    // background-color: rgba(182, 182, 182, 0.2);
    @media only screen and (max-width: 414px){
        align-items: center;
        margin-left: 0%;
position: relative;
    }
}
font-weight: 200;

   

   
`
const LogoIdDiv = styled.div`
padding-top: 50px;
padding-bottom: 20px;

display: flex
justify-content: space-between;
align-content: center;
.invoiceNum{
    margin-left: 50vw;
    color: rgba(0,0,0, 0.3);
    font-weight: 200;
    
    @media only screen and (max-width: 414px){
        // margin-left: -5%;
        font-size: 9px;
    }
      }
      .invoiceNum:hover{
        // color: blue;
    }
img{
    width: 8%;
        // z-index: 10;
        position: absolute;
        max-width: 250px;
        // margin-left: 2%;

        margin-top: -5%;
        margin-bottom: 50px;
        @media only screen and (max-width: 414px){
            // margin-left: 0%;
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
border-radius: 3px;
// box-sizing: content-box;
display: flex;
flex-direction: column;


.client2line{
    display: block;
}
#sub1, #sub2{
    background: transparent;
    input{
        border: none;
    }
}
input{
    // width: 100px;
    flex-flow: row wrap;
}
td{
    border-left:.5px solid rgba(0,0,0, 0.2);
// width: 10%;

&:first-of-type {
    border-left: none;
  }
    }

.row{
    
    // display: flex;
    // justify-content: space-around;
    // flex-direction: row;
    // align-items: center;
    background-color: rgba(43, 172, 174, 0.1);   
font-weight: 700;
@media print{
    span{
        display: none;
    }
}
}
.lineItems{
    border-top: solid rgb(182, 182, 182) .5px;
  align-items: center;
   
}
.row, .lineItems{
    
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    td{
        width: 100%;
        input{
            margin-left:-5.5px;
            width: 100%;
            text-align: center;

        }
    }
}

input::placeholder{
    font-weight: 100;
    font-size: 10px;
}
align-content: center;
text-align: center;

#subsHead2{
    display:none;
}
@media only screen and (max-width: 414px) {
    align-content: center;
    text-align: center;
    justify-content: center;
    width: 95vw;
    margin-left: -20px;
    #subsHead{
        display: none;
    }
    #subsHead2{
        display:block;
    }
    input{
        height: 30px;
    }
//     input:focus{
// position: absolute;
//     }
}
@media print {
    .row, .lineItems {
        input{
            border: none;
        }
    }
}
`
const DisplayInvoice = styled.div``

class EmployeeShow extends Component {

    state = {
        employee: '',
        invoices: [],
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
            total: '',
            // id: 'idnumber'
            // addLine: true,
        }
    }
    // addStuff() {
    //     this.setState({
    //         addLine: !this.state.addLine
    //     })
    // }
    

    componentDidMount() {
        // make an api call to get one single employee
        // On the server URL is '/api/employees/:employeeId'
        const employeeId = this.props.match.params.employeeId


        axios.get(`/api/employees/${employeeId}`).then(res => {
            console.log(res.data)

            this.setState({
                employee: res.data,
                invoices: res.data.invoices,
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

    // Handle click function for the invoice link
    handleClick = (index) => {
        console.log("This is the handle click event for invoiceId" + ' ' + index);
    }



//     function myFunction() {
//         var x = document.getElementById("displayInvoice");
//         if (x.style.display === "none") {
//           x.style.display = "block";
//         } else {
//           x.style.display = "none";
//         }
//       }
// 

    render() {

        return (

            <div>
                <NavBar />
                <BigDiv>

                    <Topbtns>



                        <div className="noprint">
                            <NameNButtonStyle>
                                <h1>{this.state.employee.employeename}'s Invoices </h1>
                            </NameNButtonStyle>

                            <NewInvoiceButton onClick={this.handleCreateNewInvoice}>
                                <FaPlusCircle className='icons' /> Add New Invoice
                            </NewInvoiceButton>
                            <EditProfileBtn >
                                <Link to={`/employees/${this.props.match.params.employeeId}/profile`} >
                                    <FaIdBadge className='icons' /> Employee Profile
                                </Link>
                            </EditProfileBtn>
                            {/* <InvoiceBtn>
                                <Link to={`/employees/${this.props.match.params.employeeId}`}>
                                    <button><FaFileInvoiceDollar className='icons' /> Invoices</button>
                                </Link>
                            </InvoiceBtn> */}
                        </div>

                    </Topbtns>

                    <div>
                        
                        <InvoicesContainerStyle>



                            {/* Auto update info for another company */}
                            {/* <div className="noprint">     All updates are auto saved <br /> 
                            </div> */}


                            {this.state.invoices.map((invoice, index) => {

                                const deleteInvoice = () => {

                                    return this.handleDelete(invoice._id)


                                }
                                // console.log(invoice._id)


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

                                    if (document.getElementById('sub2').value === '') {
                                        console.log("no client 2 listed")
                                    } else {
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

                                    // addSubMath


                                }
                                // function  addSubMath(){          
                                //     var frequency2 = document.getElementById('frequency2').value;
                                //     var rate2 = document.getElementById('rate2').value;
                                // if (frequency2.value !== undefined) {
                                //     frequency2.value = 0
                                // } 
                                // }
                                

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
                                        <Link to={`/employees/${this.props.match.params.employeeId}/invoices/${invoice._id}`}
                                                            onClick={this.handleClick.bind(this, invoice._id)}>
                                        <h3>(Invoice{index +1}) <br/> ID:{invoice._id}</h3>
</Link>
               
                                            <BkgdImg>

                                            <Link to={`/employees/${this.props.match.params.employeeId}/invoices/${invoice._id}`}
                                                            onClick={this.handleClick.bind(this, invoice._id, index)}>
                                                            <div className="printSave"><button > <span><FaPrint /> <FaFileDownload />  </span><p>Export</p>  </button></div>
                                                        </Link>
                                                <LogoStyles>
                                                    <LogoIdDiv>

                                                        <a href={invoice.link} >

                                                            {/* another company can add its own logo here */}

                                                            {/* below is for url linked image  */}
                                                            {/* <img src={invoice.image} alt="Add your logo"  />  */}

                                                            {/* below is for uploaded image  */}
                                                            {/* <img id="target" src={this.state.uploadImage} name='image' alt="Add your logo" />  */}

                                                            {/* below is Callum Enterprise logo */}
                                                            <img src="/images/CAL_ent_logo.png" alt="Add your logo" />

                                                        </a>
                                                        
                                                            <div className="invoiceNum">ID:{invoice._id}  </div><br />
                                                        
                                                    </LogoIdDiv>

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

                                                    <th> <label htmlFor="date" className='required' > <span> <FaCalendarDay /> </span>Today's Date:</label></th>
                                                    <input
                                                        onBlur={() => this.handleUpdate(invoice._id)}
                                                        onChange={(event) => this.handleChange(event, invoice._id)}
                                                        type="date" name="date" value={invoice.date}
                                                    /><br />
                                                    <br /><br />
                                                </TopInvoice>
                                                <PeriodInvoice>
                                                    <table>
                                                        <th>  <label htmlFor="payperiod" className='required'><span><FaCalendarAlt /> </span>Pay Period:</label></th>
                                                        <tr>  <label htmlFor="payperiodstart"> Start:</label>
                                                            <input
                                                                onBlur={() => this.handleUpdate(invoice._id)}
                                                                onChange={(event) => this.handleChange(event, invoice._id)}
                                                                type="date" name="payperiodstart" value={invoice.payperiodstart}
                                                            />
                                                            <label htmlFor="payperiodend"> End:</label>
                                                            <input
                                                                onBlur={() => this.handleUpdate(invoice._id)}
                                                                onChange={(event) => this.handleChange(event, invoice._id)}
                                                                type="date" name="payperiodend" value={invoice.payperiodend}
                                                            /></tr><br />
                                                    </table>
                                                </PeriodInvoice>

                                                <br /><br />
                                                <LineItemsGrid>



                                                    <div className="row header">
                                                        <td>    <div className='required'><span> <FaBriefcase /> </span> <br /> Client</div></td>
                                                        <td>    <div className='required'><span> <FaUserClock /> </span> <br /> Intervals</div></td>
                                                        <td>    <div ><span> <FaClock /> </span> <br />Interval Type</div></td>
                                                        <td>    <div className='required'><span> <FaDollarSign /> </span><br /> Interval Rate</div></td>
                                                        <td id='subsHead'>    <div  ><span><FaMoneyBillAlt /></span><br />Total</div></td>
                                                        <td id='subsHead2'>    <div  ><span><FaMoneyBillAlt /></span><br />Total</div></td>

                                                    </div>
                                                    <div className="lineItems">
                                                        <td >    <input
                                                            onBlur={() => this.handleUpdate(invoice._id)}
                                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                                            type="text" name="client" value={invoice.client} placeholder='Client'
                                                        /></td>
                                                        <td>    <input id="frequency"
                                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                                            onBlur={() => this.handleUpdate(invoice._id)}
                                                            // onChange={(event) => this.handleChange(event, invoice._id, executeMath())}
                                                            type="number" name="frequency" value={invoice.frequency} placeholder="Time Worked"
                                                        /></td>
                                                        <td>      <input
                                                            onBlur={() => this.handleUpdate(invoice._id)}
                                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                                            type="text" name="result" value={invoice.result} placeholder='Minute/Half-Hour/Hour'
                                                        /></td>

                                                        <td>     <input id='rate'
                                                            onBlur={() => this.handleUpdate(invoice._id)}
                                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                                            // onChange={(event) => this.handleChange(event, invoice._id, executeMath())}
                                                            type="number" name="rate" value={invoice.rate} placeholder='Rate of pay 0.00'
                                                        /> </td>
                                                        <td id='sub1'>     <input id='sub1' readOnly

                                                            onBlur={() => this.handleUpdate(invoice._id)}
                                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                                            // type="number" name="sub1" value={invoice.sub1}
                                                            type="text" name="sub1" value={"$" + (invoice.rate * invoice.frequency).toFixed(2)}
                                                        /> </td>
                                                    </div>

                                                    {
                                                        // this.state.addLine ?
                                                        <div>


                                                            <div className="lineItems client2line" id='client2line'>
                                                                <td >    <input
                                                                    onBlur={() => this.handleUpdate(invoice._id)}
                                                                    onChange={(event) => this.handleChange(event, invoice._id)}
                                                                    type="text" name="client2" value={invoice.client2} placeholder='Client'
                                                                /></td>
                                                                <td>    <input id="frequency2"
                                                                    onChange={(event) => this.handleChange(event, invoice._id)}
                                                                    onBlur={() => this.handleUpdate(invoice._id)}
                                                                    // onChange={(event) => this.handleChange(event, invoice._id, executeMath())}
                                                                    type="number" name="frequency2" value={invoice.frequency2} placeholder="Enter 0 if none"
                                                                /></td>
                                                                <td>      <input
                                                                    onBlur={() => this.handleUpdate(invoice._id)}
                                                                    onChange={(event) => this.handleChange(event, invoice._id)}
                                                                    type="text" name="result2" value={invoice.result2} placeholder='Minute/Half-Hour/Hour'
                                                                /></td>
                                                                <td>     <input id="rate2"
                                                                    onChange={(event) => this.handleChange(event, invoice._id)}
                                                                    onBlur={() => this.handleUpdate(invoice._id)}
                                                                    // onChange={(event) => this.handleChange(event, invoice._id, executeMath())}
                                                                    type="number" name="rate2" value={invoice.rate2} placeholder="Enter 0 if none"
                                                                /> </td>
                                                                <td id='sub2'>     <input id='sub2' readOnly

                                                                    onBlur={() => this.handleUpdate(invoice._id)}
                                                                    onChange={(event) => this.handleChange(event, invoice._id)}
                                                                    // type="number" name="sub2" value={invoice.sub2}
                                                                    type="text" name="sub2" value={"$" + (invoice.rate2 * invoice.frequency2).toFixed(2)}
                                                                /> </td>
                                                            </div> </div>
                                                        // : null
                                                    }
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
                                                    <td id="box">  <th><label htmlFor="rate" className='required'><span> <FaMoneyBillAlt/> </span>Interval Rate: </label></th>
                                                        $<input
                                                            onBlur={() => this.handleUpdate(invoice._id)}
                                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                                            type="number" name="rate" value={invoice.rate} placeholder='Rate of pay 0.00'
                                                        /></td>

                                                </tr> */}

                                                    {/* media query invoice */}


                                                    <br />
                                                    {/* <div className="lineItem-app container">
                                                <h1 className="center blue-text">LineItems</h1>
                                                <LineItems lineItems={this.state.lineItems} deleteLineItem={this.deleteLineItem} />
                                                <AddLineItem addLineItem={this.addLineItem} value={invoice.frequency} />
                                            </div> */}
                                                </Client1Invoice>
                                                {/* button for next line */}
                                                {/* <button onClick={() => this.addStuff()}>add item</button> */}

                                                <TotalsInvoice>
                                                    <CommentsBox>
                                                        <th>   <label htmlFor="comments"><span><FaComments /></span> Notes </label></th>
                                                        <textarea
                                                            onBlur={() => this.handleUpdate(invoice._id)}
                                                            onChange={(event) => this.handleChange(event, invoice._id)}
                                                            type="text" name="comments" value={invoice.comments} placeholder=''></textarea>
                                                    </CommentsBox>
                                                    {/* <input type="button" value="Calculate Client Subtotals" onClick={e =>
                                                        executeMath()} /> */}

                                                    <SubtotalBox>

                                                        {/* <tr><input type="button" id="subBtn" value="Calculate" name="math" onClick={e =>
                                                            executeMath()} /></tr> */}

                                                        <tr >  <label htmlFor="subtotal">Subtotal:</label>
                                                            <input id="viewSubs" readOnly
                                                                // onBlur={() => this.handleUpdate(invoice._id)}
                                                                // onChange={(event) => this.handleChange(event, invoice._id)}
                                                                // type="number" name="viewSubs" value={invoice.showSubs}
                                                                // type="number" name="subtotal" value={(invoice.sub1 + invoice.sub2).toFixed(2)}
                                                                // type="text" name="subtotal" value={"$" + (invoice.rate * invoice.frequency + invoice.rate2 * invoice.frequency2).toFixed(2)}
                                                                type="text" value={'$' + ((invoice.rate * invoice.frequency).toFixed(2) && (invoice.rate * invoice.frequency + invoice.rate2 * invoice.frequency2).toFixed(2))}

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
                                                        <input id="showSubs" type="hidden" name="showSubs" value={invoice.showSubs} placeholder='0' />

                                                        <tr > <label htmlFor="arisefee" >Arise Fee:</label>
                                                            <input className="arfee" id="arisefee" readOnly
                                                                // type="number" name="arisefee" value={20}
                                                                onBlur={() => this.handleUpdate(invoice._id)}
                                                                onChange={(event) => this.handleChange(event, invoice._id)}
                                                                type="text" name="arisefee" value={"$" + 19.75} placeholder='enter 0 if none' required='true'
                                                            // type="text" name="arisefee" value={19.75} placeholder='enter 0 if none' required='true'

                                                            /></tr>
                                                        <tr >
                                                            <label htmlFor="callumfee">IB Fee 10%:</label>


                                                            {/* for function calculations below */}

                                                            {/* <input id="callumfeeResults" type="number" name="callumfeeResults" value={invoice.callumfeeResults}
                                                                onBlur={() => this.handleUpdate(invoice._id)}
                                                                onChange={(event) => this.handleChange(event, invoice._id, executeMath())}
                                                            /> */}

                                                            <input id="callumfee" readOnly
                                                                onBlur={() => this.handleUpdate(invoice._id)}
                                                                onChange={(event) => this.handleChange(event, invoice._id)}

                                                                // onChange={(event) => this.handleChange(event, invoice._id, executeMath())}
                                                                // type="hidden" name="callumfee" value={0.10} 

                                                                // type="number" name="callumfee" value={(invoice.rate * invoice.frequency * .10).toFixed(2)}
                                                                // type="text" name="callumfee" value={"$" + (invoice.rate * invoice.frequency * .10 + invoice.rate2 * invoice.frequency2 * .10).toFixed(2)}
                                                                type="text" name="callumfee" value={'$' + ((invoice.rate * invoice.frequency * .10).toFixed(2) && (invoice.rate * invoice.frequency * .10 + invoice.rate2 * invoice.frequency2 * .10).toFixed(2))}

                                                            /></tr>



                                                        <TotalDue>
                                                            {/* another company totals */}
                                                            {/* <th>   <label htmlFor="totaldue">Total <span> <FaMoneyBillAlt/> </span> Due this period: </label></th>
                                                $<input
                                                    onBlur={() => this.handleUpdate(invoice._id)}
                                                    onChange={(event) => this.handleChange(event, invoice._id)}
                                                    type="number" name="totaldue" value={((invoice.callumfee * -invoice.rate * invoice.frequency + invoice.rate * invoice.frequency) - invoice.arisefee).toFixed(2)}
                                                /> */}
                                                            {/* type="number" name="totaldue" value={((.10 * -invoice.rate * invoice.frequency + invoice.rate * invoice.frequency) + (.10 * -invoice.rate2 * invoice.frequency2 + invoice.rate2 * invoice.frequency2) - 19.75).toFixed(2)} */}


                                                            {/* Callum Ent totals */}
                                                            <input id="showTotalCalc" type="hidden" name="showTotalCalc" value={invoice.showTotalCalc} />

                                                            <tr className='subLineBrdr'>   <label htmlFor="totaldue">Total Due <span><FaHandHoldingUsd /></span> </label>
                                                                <input readOnly
                                                                    // id="total" type="number" name="total"  //for function calculations
                                                                    onBlur={() => this.handleUpdate(invoice._id)}
                                                                    onChange={(event) => this.handleChange(event, invoice._id)}
                                                                    // type="number" name="totaldue" value={((.10 * -invoice.rate * invoice.frequency + invoice.rate * invoice.frequency) - 19.75).toFixed(2)}
                                                                    // type="text" name="totaldue" value={"$" + ((.10 * -invoice.rate * invoice.frequency + invoice.rate * invoice.frequency) + (.10 * -invoice.rate2 * invoice.frequency2 + invoice.rate2 * invoice.frequency2) - 19.75).toFixed(2)}
                                                                    type="text" name="totaldue" value={'$' + ((.10 * -invoice.rate * invoice.frequency + invoice.rate * invoice.frequency - 19.75).toFixed(2) && ((.10 * -invoice.rate * invoice.frequency + invoice.rate * invoice.frequency) + (.10 * -invoice.rate2 * invoice.frequency2 + invoice.rate2 * invoice.frequency2) - 19.75).toFixed(2))}

                                                                /></tr>

                                                        </TotalDue>


                                                    </SubtotalBox>

                                                </TotalsInvoice>
                                                <div className="memo noprint"> <b>Memo:</b>  <br />
                                                    <i> {this.state.employee.employeename} serviced {invoice.client} for {invoice.frequency} {invoice.result}s at a rate of {"$" + invoice.rate} per {invoice.result} = <b> {"$" + (invoice.rate * invoice.frequency).toFixed(2)}. </b>
                                                        {this.state.employee.employeename} serviced {invoice.client2} for {invoice.frequency2} {invoice.result2}s at a rate of {"$" + invoice.rate2} per {invoice.result2} = <b> {"$" + (invoice.rate2 * invoice.frequency2).toFixed(2)} </b>
                                                        for a total of <b>{'$' + ((invoice.rate * invoice.frequency).toFixed(2) && (invoice.rate * invoice.frequency + invoice.rate2 * invoice.frequency2).toFixed(2))} </b>
                                                        minus Arise Service Fee <b>({"$" + 19.75})</b> and IB 10% Fee <b>({'$' + ((invoice.rate * invoice.frequency * .10).toFixed(2) && (invoice.rate * invoice.frequency * .10 + invoice.rate2 * invoice.frequency2 * .10).toFixed(2))})</b>.
                                                <b>  Total Due = {'$' + ((.10 * -invoice.rate * invoice.frequency + invoice.rate * invoice.frequency - 19.75).toFixed(2) && ((.10 * -invoice.rate * invoice.frequency + invoice.rate * invoice.frequency) + (.10 * -invoice.rate2 * invoice.frequency2 + invoice.rate2 * invoice.frequency2) - 19.75).toFixed(2))}</b></i>
                                                </div>
                                                <br />
                                                <OptionsInvoice className='noprint printSave'>
                                                <Link to={`/employees/${this.props.match.params.employeeId}/invoices/${invoice._id}`}
                                                            onClick={this.handleClick.bind(this, invoice._id)}>
                                                            <button > <span><FaPrint /> <FaFileDownload />  </span><p>Export</p>  </button>
                                                        </Link>
                                                    {/* <a href="javascript:window.print()" ><span><FaPrint /></span> <br /> Print </a> 
                                                    <a href="javascript:window.print()"><span><FaFileDownload /></span> <br /> Download <br /></a> */}
                                                    <a href="https://squareup.com/login" target="_blank"><button><span><FaMoneyCheckAlt /></span><br /><p>Pay</p></button> </a>
                                                </OptionsInvoice>

                                                <DletBtn>
                                                    <button className='noprint dlet' onClick={e =>
                                                        window.confirm("Are you sure you want to delete this invoice? There's no going back from here!") &&
                                                        deleteInvoice(e)}><FaMinusCircle /> Delete Record</button>
                                                </DletBtn><br />
                                            </BkgdImg>

                                            
                                        </InvoiceStyles> <br/><br/>
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