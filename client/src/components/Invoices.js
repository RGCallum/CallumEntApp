import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import EmployeeShow from './EmployeeShow'
import { FaPaperPlane, FaMinusCircle, FaShareAlt, FaIdBadge, FaBriefcase, FaAddressCard, FaPlusCircle, FaComments, FaCog, FaStopwatch, FaFolder, FaHourglassHalf, FaCalendarDay, FaCalendarAlt, FaUserClock, FaClock, FaMoneyCheckAlt, FaMoneyBillAlt, FaHandHoldingUsd, FaFileInvoiceDollar, FaDollarSign, FaFolderOpen, FaPrint, FaFileDownload, FaCartPlus } from 'react-icons/fa';
import NavBar from '../components/NavBar'



const BigDiv = styled.div`
input, textarea{
    background-color: transparent;
    border-radius: 3px;
border: none;
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
    // background: rgba(255, 212, 39, 0.2);

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
    // content: "*";
    // color: red;
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
      height: 90vh;
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
flex-direction: row;
justify-content: center;
text-align: center;
padding-top: 20px;

@media print
{
.noprint {display:none;}
}
@media only screen and (max-width: 414px){
   
.icons{
    padding-top: 3px;
}

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
        // background-color: transparent;
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
padding-top:30px;
input{
    width: 100px;
    height: 100%;
    // background-color: transparent;
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
    border: .5px solid rgba(0,0,0, 0.2);

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
        width: 158px;
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

span{
    font-size: 30px;
    color: rgb(43, 172, 174);
    font-weight: 200;
}

button{
    background-color: white;
    padding: 5px 5px 5px 5px;
    color: rgb(43, 172, 174);
    border-radius: 5px;
    cursor: pointer;
    padding: 8px 10px 5px 10px;
border: inset .5px #c0c0c0;
// box-shadow: 1px 1px 2px black;
}
button:hover{
    color: white;
    background-color: rgb(43, 172, 174);
    span{
        color: white;
    }
}

.printSave{




// a{
//     color: rgb(60, 60, 60);

//     text-decoration: none;
//     font-size: 12px;
// }
// a:visited {
//     color: rgb(60, 60, 60);

//   }
//   a:hover{
//       color: blue;
//       transform: scale(1.2);
//   }
//   a:active{
//       color: red;
//     //   text-shadow: 1px 1px 10px black;
//   }
// span:hover{
//     text-shadow: 1px 1px 5px rgb(28, 125, 147);
//     color: blue;

//   }


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
// font-family: helvetica;

@media print{
    box-shadow: none;
    border: #c0c0c0 solid .5px;
}
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
    height: 22.8px;

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
.icons{
    padding-top: 3px;
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
.icons{
    padding-top: 3px;
}

`


const NameNButtonStyle = styled.div`
// display: flex;
justify-content: center;
color: rgb(60, 60, 60);
font-weight: 100;
h1{
    margin-bottom: 5px;
}
 h3{
    //  margin-top: -15px;
     font-weight: 100;

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
        margin-left: -5%;
        font-size: 9px;
    }
      }
      .invoiceNum:hover{
        color: blue;
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
    .watermark{
        position: absolute;
        text-align: center;
        justify-content: center;
            font-size: 90px;
            font-weight: 600;
            color: rgb(245,245,245);
        margin-left: 8%;
        // margin-top: 30%;
        // transform: rotate(-20deg);
        z-index: -1;
        p{
            font-size: 30px;
        }
        @media only screen and (max-width: 414px){
            margin-left: -8%;
        }
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
    @media print{
        color: white;
    }
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



class Invoices extends Component {
    state = {

        employee: {
            employeename: '',
            idnumber: '',
            email: '',
            phone: '',
        },

        invoices: [],
        invoice: {
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
        const invoiceId = this.props.match.params.invoiceId
        const employeeId = this.props.match.params.employeeId

        axios.get(`/api/employees/${employeeId}/${invoiceId}`).then(res => {
            console.log(res.data, res.data.client, res.data.rate, res.data.frequency, res.data.result)
            // console.log(res.data)
            this.setState({
                invoice: res.data,
            })
            console.log(this.state.invoice, this.state.employee)
        })

        axios.get(`/api/employees/${employeeId}/`).then(res => {
            console.log(res.data)
            // console.log(res.data)
            this.setState({
                employee: res.data,
            })
            console.log(this.state.invoice, this.state.employee)
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


    render() {
        
        return (


            <div>
<NavBar />
                <BigDiv>

                    <Topbtns>
                        
                        <div className="noprint">
                        <NameNButtonStyle> 
                            <h1>{this.state.employee.employeename}</h1> Invoice ID: {this.props.match.params.invoiceId}   
                            </NameNButtonStyle>

                            {/* <NewInvoiceButton onClick={this.handleCreateNewInvoice}>
                                <FaPlusCircle className='icons' /> Add New Invoice
                            </NewInvoiceButton> */}
<br/>
                            <EditProfileBtn >
                                <Link to={`/employees/${this.props.match.params.employeeId}/profile`} >
                                    <FaIdBadge className='icons' /> Employee Profile
                            </Link>
                            </EditProfileBtn>
                            <InvoiceBtn>
                                <Link to={`/employees/${this.props.match.params.employeeId}`}>
                                    <button><FaFileInvoiceDollar className='icons' /> All Invoices</button>
                                </Link>
                            </InvoiceBtn>
                        </div>
                    </Topbtns>

                    <div>
                        <InvoicesContainerStyle>
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
                                        
                                    <BkgdImg>
                                    <OptionsInvoice className='noprint printSave'>
<a href="javascript:window.print()" > <button><span><FaPrint /></span><br />Print</button> </a>
<a href="javascript:window.print()">  <button><span><FaFileDownload /></span><br />Download<br /> </button> </a>
<a href="mailto:AddThe@ddress.com?subject=Your New Invoice&body=Attached is your invoice for **ADD PAY PERIOD HERE and ATTACH INVOICE**"><button><span><FaPaperPlane /></span><br />Share</button>  </a>
<a href="https://squareup.com/login" target="_blank"><button><span><FaMoneyCheckAlt /></span><br />Pay</button>  </a>


</OptionsInvoice>

                                        <LogoStyles>
                                            <LogoIdDiv>
<div className="watermark noprint">For Export Only
<p>(go back to edit)</p>
</div>
                                                <a href={this.state.invoice.link} >

                                                    {/* another company can add its own logo here */}

                                                    {/* below is for url linked image  */}
                                                    {/* <img src={this.state.invoice.image} alt="Add your logo"  />  */}

                                                    {/* below is for uploaded image  */}
                                                    {/* <img id="target" src={this.state.uploadImage} name='image' alt="Add your logo" />  */}

                                                    {/* below is Callum Enterprise logo */}
                                                    <img src="/images/CAL_ent_logo.png" alt="Add your logo" />

                                                </a>
                                                <div className="invoiceNum">ID:{this.state.invoice._id} </div>
                                            </LogoIdDiv>

                                            <div className="employeeinfo">
                                                <label htmlFor="employeename" className='employeename'>

                                                    {this.state.employee.employeename} </label> <br />
                                                <label htmlFor="idnumber" className='idnumber'>

                                                    ID: {this.state.employee.idnumber} </label><br />
                                                <label htmlFor="email" className='email'>

                                                    {this.state.employee.email} </label><br />
                                                <label htmlFor="phone" className='phone'>

                                                    {this.state.employee.phone} </label>
                                            </div>

                                        </LogoStyles>
                                        <TopInvoice>

                                            <th> <label htmlFor="date" className='required' > <span> <FaCalendarDay /> </span>Today's Date: </label></th>
                                            <input
                                                
                                                type="date" name="date" value={this.state.invoice.date}
                                            /><br />
                                            <br /><br />
                                        </TopInvoice>
                                        <PeriodInvoice>
                                            <table>
                                                <th>  <label htmlFor="payperiod" className='required'><span><FaCalendarAlt /> </span>Pay Period: </label></th>
                                                <tr>  <label htmlFor="payperiodstart"> Start:</label>
                                                    <input
                                                        
                                                        type="date" name="payperiodstart" value={this.state.invoice.payperiodstart}
                                                    />
                                                    <label htmlFor="payperiodend"> End:</label>
                                                    <input
                                                        
                                                        type="date" name="payperiodend" value={this.state.invoice.payperiodend}
                                                    /></tr><br />
                                            </table>
                                        </PeriodInvoice>

                                        <br /><br />
                                        <LineItemsGrid>



                                            <div className="row header">
                                                <td>    <div className='required'><span> <FaBriefcase /> </span> <br /> Client </div></td>
                                                <td>    <div className='required'><span> <FaUserClock /> </span> <br /> Intervals </div></td>
                                                <td>    <div ><span> <FaClock /> </span> <br />Interval Type </div></td>
                                                <td>    <div className='required'><span> <FaDollarSign /> </span><br /> Interval Rate </div></td>
                                                <td id='subsHead'>    <div  ><span><FaMoneyBillAlt /></span><br /> Total </div></td>
                                                <td id='subsHead2'>    <div  ><span><FaMoneyBillAlt /></span><br /> Total </div></td>

                                            </div>
                                            <div className="lineItems">
                                                <td >    <input
                                                    
                                                    type="text" name="client" value={this.state.invoice.client} placeholder='Client'
                                                /></td>
                                                <td>    <input id="frequency"
                                                    
                                                    // onChange={(event) => this.handleChange(event, this.state.invoice._id, executeMath())}
                                                    type="number" name="frequency" value={this.state.invoice.frequency} placeholder="Time Worked"
                                                /></td>
                                                <td>      <input
                                                    
                                                    type="text" name="result" value={this.state.invoice.result} placeholder='Minute/Half-Hour/Hour'
                                                /></td>

                                                <td>     <input id='rate'
                                                    
                                                    // onChange={(event) => this.handleChange(event, this.state.invoice._id, executeMath())}
                                                    type="number" name="rate" value={this.state.invoice.rate} placeholder='Rate of pay 0.00'
                                                /> </td>
                                                <td id='sub1'>     <input id='sub1' readOnly

                                                    
                                                    // type="number" name="sub1" value={this.state.invoice.sub1}
                                                    type="text" name="sub1" value={"$" + (this.state.invoice.rate * this.state.invoice.frequency).toFixed(2)}
                                                /> </td>
                                            </div>

                                            {
                                                
                                                <div>


                                                    <div className="lineItems client2line" id='client2line'>
                                                        <td >    <input
                                                            
                                                            type="text" name="client2" value={this.state.invoice.client2} placeholder='Client'
                                                        /></td>
                                                        <td>    <input id="frequency2"
                                                            
                                                            // onChange={(event) => this.handleChange(event, this.state.invoice._id, executeMath())}
                                                            type="number" name="frequency2" value={this.state.invoice.frequency2} placeholder="Enter 0 if none"
                                                        /></td>
                                                        <td>      <input
                                                            
                                                            type="text" name="result2" value={this.state.invoice.result2} placeholder='Minute/Half-Hour/Hour'
                                                        /></td>
                                                        <td>     <input id="rate2"
                                                            
                                                            // onChange={(event) => this.handleChange(event, this.state.invoice._id, executeMath())}
                                                            type="number" name="rate2" value={this.state.invoice.rate2} placeholder="Enter 0 if none"
                                                        /> </td>
                                                        <td id='sub2'>     <input id='sub2' readOnly

                                                            
                                                            // type="number" name="sub2" value={this.state.invoice.sub2}
                                                            type="text" name="sub2" value={"$" + (this.state.invoice.rate2 * this.state.invoice.frequency2).toFixed(2)}
                                                        /> </td>
                                                    </div>
                                                </div>
                                               
                                            }
                                        </LineItemsGrid>
                                        <Client1Invoice>

                                            {/* <tr> <td id="box"><th><label htmlFor="client" className='required'><span> 🗂 </span>Client: </label></th>
        <input
            onBlur={() => this.handleUpdate(this.state.invoice._id)}
            onChange={(event) => this.handleChange(event, this.state.invoice._id)}
            type="text" name="client" value={this.state.invoice.client} placeholder='Client'
        /></td>
        <td id="box">  <th> <label htmlFor="timew" className='required'><span> ⏱ </span>Time Worked:</label></th>
            <input
                onBlur={() => this.handleUpdate(this.state.invoice._id)}
                onChange={(event) => this.handleChange(event, this.state.invoice._id)}
                type="number" name="frequency" value={this.state.invoice.frequency} placeholder="Time Worked"
            />
          
        </td>


        <td id="box">  <th><label htmlFor="result" ><span> ⌛ </span>Interval Type: </label></th>
            <input
                onBlur={() => this.handleUpdate(this.state.invoice._id)}
                onChange={(event) => this.handleChange(event, this.state.invoice._id)}
                type="text" name="result" value={this.state.invoice.result} placeholder='Minutes/Half-Hour/Hour'
            /></td>
        <td id="box">  <th><label htmlFor="rate" className='required'><span> <FaMoneyBillAlt/> </span>Interval Rate: </label></th>
            $<input
                onBlur={() => this.handleUpdate(this.state.invoice._id)}
                onChange={(event) => this.handleChange(event, this.state.invoice._id)}
                type="number" name="rate" value={this.state.invoice.rate} placeholder='Rate of pay 0.00'
            /></td>

    </tr> */}

                                            {/* media query invoice */}


                                            <br />
                                            {/* <div className="lineItem-app container">
    <h1 className="center blue-text">LineItems</h1>
    <LineItems lineItems={this.state.lineItems} deleteLineItem={this.deleteLineItem} />
    <AddLineItem addLineItem={this.addLineItem} value={this.state.invoice.frequency} />
</div> */}
                                        </Client1Invoice>
                                        {/* button for next line */}
                                        {/* <button onClick={() => this.addStuff()}>add item</button> */}

                                        <TotalsInvoice>
                                            <CommentsBox>
                                                <th>   <label htmlFor="comments"><span><FaComments /></span> Notes </label></th>
                                                <textarea
                                                    
                                                    type="text" name="comments" value={this.state.invoice.comments} placeholder=''></textarea>
                                            </CommentsBox>
                                            {/* <input type="button" value="Calculate Client Subtotals" onClick={e =>
            executeMath()} /> */}

                                            <SubtotalBox>

                                                {/* <tr><input type="button" id="subBtn" value="Calculate" name="math" onClick={e =>
                executeMath()} /></tr> */}

                                                <tr >  <label htmlFor="subtotal">Subtotal:</label>
                                                    <input id="viewSubs" readOnly
                                                        // onBlur={() => this.handleUpdate(this.state.invoice._id)}
                                                        // onChange={(event) => this.handleChange(event, this.state.invoice._id)}
                                                        // type="number" name="viewSubs" value={this.state.invoice.showSubs}
                                                        // type="number" name="subtotal" value={(this.state.invoice.sub1 + this.state.invoice.sub2).toFixed(2)}
                                                        // type="text" name="subtotal" value={"$" + (this.state.invoice.rate * this.state.invoice.frequency + this.state.invoice.rate2 * this.state.invoice.frequency2).toFixed(2)}
                                                        type="text" value={'$' + ((this.state.invoice.rate * this.state.invoice.frequency).toFixed(2) && (this.state.invoice.rate * this.state.invoice.frequency + this.state.invoice.rate2 * this.state.invoice.frequency2).toFixed(2))}

                                                    /></tr>


                                                {/* changeable fees for another company fee */}
                                                {/* <br/> <br/>
<th>   <label htmlFor="namefee" >Add'l Fees to subtract (opt):</label></th>
<input
onBlur={() => this.handleUpdate(this.state.invoice._id)}
onChange={(event) => this.handleChange(event, this.state.invoice._id)}
type="text" placeholder='Business Fees (optional) name' name="namefee" value={this.state.invoice.namefee} /> <br/>
$<input className="arfee"
    onBlur={() => this.handleUpdate(this.state.invoice._id)}
    onChange={(event) => this.handleChange(event, this.state.invoice._id)}
    type="number" name="arisefee" value={this.state.invoice.arisefee} placeholder='enter 0 if none' required='true'
/>
<br/> <br/>
<th>    <label htmlFor="otherfee">Other fees to subtract (use decimals): </label></th>
<input
onBlur={() => this.handleUpdate(this.state.invoice._id)}
onChange={(event) => this.handleChange(event, this.state.invoice._id)}
type="text" placeholder='Taxes (optional) name' name="otherfee" value={this.state.invoice.otherfee} /> <br/>
$<input
    onBlur={() => this.handleUpdate(this.state.invoice._id)}
    onChange={(event) => this.handleChange(event, this.state.invoice._id)}
    type="number" name="callumfee" placeholder='enter 0 if none' value={(this.state.invoice.callumfee)}
/>
<br/> <br/> 
*/}

                                                {/* Callum Enterprise Arise fees */}
                                                <input id="showSubs" type="hidden" name="showSubs" value={this.state.invoice.showSubs} placeholder='0' />

                                                <tr > <label htmlFor="arisefee" >Arise Fee:</label>
                                                    <input className="arfee" id="arisefee" readOnly
                                                        // type="number" name="arisefee" value={20}
                                                        
                                                        type="text" name="arisefee" value={"$" + 19.75} placeholder='enter 0 if none' required='true'
                                                    // type="text" name="arisefee" value={19.75} placeholder='enter 0 if none' required='true'

                                                    /></tr>
                                                <tr >
                                                    <label htmlFor="callumfee">IB Fee 10%:</label>


                                                    {/* for function calculations below */}

                                                    {/* <input id="callumfeeResults" type="number" name="callumfeeResults" value={this.state.invoice.callumfeeResults}
                    onBlur={() => this.handleUpdate(this.state.invoice._id)}
                    onChange={(event) => this.handleChange(event, this.state.invoice._id, executeMath())}
                /> */}

                                                    <input id="callumfee" readOnly
                                                        

                                                        // onChange={(event) => this.handleChange(event, this.state.invoice._id, executeMath())}
                                                        // type="hidden" name="callumfee" value={0.10} 

                                                        // type="number" name="callumfee" value={(this.state.invoice.rate * this.state.invoice.frequency * .10).toFixed(2)}
                                                        // type="text" name="callumfee" value={"$" + (this.state.invoice.rate * this.state.invoice.frequency * .10 + this.state.invoice.rate2 * this.state.invoice.frequency2 * .10).toFixed(2)}
                                                        type="text" name="callumfee" value={'$' + ((this.state.invoice.rate * this.state.invoice.frequency * .10).toFixed(2) && (this.state.invoice.rate * this.state.invoice.frequency * .10 + this.state.invoice.rate2 * this.state.invoice.frequency2 * .10).toFixed(2))}

                                                    /></tr>



                                                <TotalDue>
                                                    {/* another company totals */}
                                                    {/* <th>   <label htmlFor="totaldue">Total <span> <FaMoneyBillAlt/> </span> Due this period: </label></th>
    $<input
        onBlur={() => this.handleUpdate(this.state.invoice._id)}
        onChange={(event) => this.handleChange(event, this.state.invoice._id)}
        type="number" name="totaldue" value={((this.state.invoice.callumfee * -this.state.invoice.rate * this.state.invoice.frequency + this.state.invoice.rate * this.state.invoice.frequency) - this.state.invoice.arisefee).toFixed(2)}
    /> */}
                                                    {/* type="number" name="totaldue" value={((.10 * -this.state.invoice.rate * this.state.invoice.frequency + this.state.invoice.rate * this.state.invoice.frequency) + (.10 * -this.state.invoice.rate2 * this.state.invoice.frequency2 + this.state.invoice.rate2 * this.state.invoice.frequency2) - 19.75).toFixed(2)} */}


                                                    {/* Callum Ent totals */}
                                                    <input id="showTotalCalc" type="hidden" name="showTotalCalc" value={this.state.invoice.showTotalCalc} />

                                                    <tr className='subLineBrdr'>   <label htmlFor="totaldue">Total Due <span><FaHandHoldingUsd /></span> </label>
                                                        <input readOnly
                                                            // id="total" type="number" name="total"  //for function calculations
                                                            
                                                            // type="number" name="totaldue" value={((.10 * -this.state.invoice.rate * this.state.invoice.frequency + this.state.invoice.rate * this.state.invoice.frequency) - 19.75).toFixed(2)}
                                                            // type="text" name="totaldue" value={"$" + ((.10 * -this.state.invoice.rate * this.state.invoice.frequency + this.state.invoice.rate * this.state.invoice.frequency) + (.10 * -this.state.invoice.rate2 * this.state.invoice.frequency2 + this.state.invoice.rate2 * this.state.invoice.frequency2) - 19.75).toFixed(2)}
                                                            type="text" name="totaldue" value={'$' + ((.10 * -this.state.invoice.rate * this.state.invoice.frequency + this.state.invoice.rate * this.state.invoice.frequency - 19.75).toFixed(2) && ((.10 * -this.state.invoice.rate * this.state.invoice.frequency + this.state.invoice.rate * this.state.invoice.frequency) + (.10 * -this.state.invoice.rate2 * this.state.invoice.frequency2 + this.state.invoice.rate2 * this.state.invoice.frequency2) - 19.75).toFixed(2))}

                                                        /></tr>

                                                </TotalDue>


                                            </SubtotalBox>

                                        </TotalsInvoice>
                                        <div className="memo noprint"> <b>Memo:</b>  <br />
                                            <i>  {this.state.employee.employeename} serviced {this.state.invoice.client} for {this.state.invoice.frequency} {this.state.invoice.result}s at a rate of {"$" + this.state.invoice.rate} per {this.state.invoice.result} = <b> {"$" + (this.state.invoice.rate * this.state.invoice.frequency).toFixed(2)} </b>
                                            {this.state.employee.employeename} also serviced {this.state.invoice.client2} for {this.state.invoice.frequency2} {this.state.invoice.result2}s at a rate of {"$" + this.state.invoice.rate2} per {this.state.invoice.result2} = <b> {"$" + (this.state.invoice.rate2 * this.state.invoice.frequency2).toFixed(2)} </b>
                                                for a total of <b>{'$' + ((this.state.invoice.rate * this.state.invoice.frequency).toFixed(2) && (this.state.invoice.rate * this.state.invoice.frequency + this.state.invoice.rate2 * this.state.invoice.frequency2).toFixed(2))} </b>
                                                minus Arise Service Fee <b>({"$" + 19.75})</b> and IB 10% Fee <b>({'$' + ((this.state.invoice.rate * this.state.invoice.frequency * .10).toFixed(2) && (this.state.invoice.rate * this.state.invoice.frequency * .10 + this.state.invoice.rate2 * this.state.invoice.frequency2 * .10).toFixed(2))})</b>.
    <b>  Total Due = {'$' + ((.10 * -this.state.invoice.rate * this.state.invoice.frequency + this.state.invoice.rate * this.state.invoice.frequency - 19.75).toFixed(2) && ((.10 * -this.state.invoice.rate * this.state.invoice.frequency + this.state.invoice.rate * this.state.invoice.frequency) + (.10 * -this.state.invoice.rate2 * this.state.invoice.frequency2 + this.state.invoice.rate2 * this.state.invoice.frequency2) - 19.75).toFixed(2))}</b></i>
                                        </div>
                                        <br />


                                        {/* <DletBtn>
        <button className='noprint dlet' onClick={e =>
            window.confirm("Are you sure you want to delete this invoice? There's no going back from here!") &&
            deleteInvoice(e)}><FaMinusCircle /> Delete Record</button>
    </DletBtn><br /> */}
                                    </BkgdImg>


                                </InvoiceStyles>
                            </Addlogo>
                        </InvoicesContainerStyle>
                    </div>
                </BigDiv>

            </div>

        )
    }

}
export default Invoices;


