import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBarStyles = styled.div`
*{
    margin: 0;
    
}
display: flex ;
flex-direction: row ;
flex-wrap: wrap ;
justify-content: flex-start ;
align-items: center ;
align-content: flex-start ;
padding: 10px;
background: black;
font-weight: 200;
color: white;
font-size: 13px;
font-family: helvetica;
margin: 0;


i{
    color: turquoise;
    font-size: 18px;
}
a{
    text-decoration: none; 
     
}
a:visited{
    color: white;
}
a:hover{
    color: turquoise;
}
`
const LogoStyles = styled.div`
{
    img{
        width: 5%;
    }
}
    `


class NavBar extends Component {
    render() {
        return (

            <NavBarStyles>
                <LogoStyles>
                <img src="/images/CAL_ent_logo.png" alt="logo" />

            </LogoStyles>
                <div>

                    <Link to="/"> <i className="fa fa-home"></i>Home</Link>
                    <Link to="/employees"> <i className="fa fa-users"></i>Employees</Link>
                    {/* <Link to="/signup"> <i className="fa fa-user-plus"></i>Sign-Up</Link> */}

                </div>

            </NavBarStyles>
        );
    }
}

export default NavBar;