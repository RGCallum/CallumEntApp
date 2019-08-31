import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const BigDiv = styled.div`
text-align: center;
a{
    text-decoration: none;

}
p{
    font-size: 12px;
    font-family: helvetica;
  font-weight: 500;
  color: rgb(43, 172, 174);
  }
  p:hover{
    color: blue;
    cursor: pointer;

}
`

const Addlogo = styled.div`


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





                        {this.state.invoices.map(invoice => {

                            const deleteInvoice = () => {

                                return this.handleDelete(invoice._id)

                            }


                            return (
                                <Addlogo>





                                    <Link to={`/employees/${this.props.match.params.employeeId}/invoices/${this.props.match.params.invoiceId}`}>
                                        
                                            
                                             <p> 📄 <br/> Invoice: {invoice._id} </p> 
                                    </Link>




                                </Addlogo>

                            )

                        })}

                    </div>
                </BigDiv>

            </div>
        )
    }
}

export default EmployeeShow