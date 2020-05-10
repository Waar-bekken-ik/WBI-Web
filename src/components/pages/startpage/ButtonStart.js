import React, { Component } from "react";
import {Link } from "react-router-dom";



class ButtonStart extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false,
        }
    }

    handleClick(){
        this.setState({clicked: !this.state.clicked});
    }

    render() {
        const lnk = {
            fontFamily: "Montserrat",
            fontSize: "30px",
            borderRadius: "20px",
            border: "none",
            width: "80%",
            height: "20%",
            margin: "10px",
            alignSelf: "center",
            backgroundColor:'#85D1EB',
            color:'white',
            textDecoration: 'none',
            textAlign:'center',
            display:'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            paddingLeft:"10px",
            paddingRight:"10px",
            marginTop: "20px",
        }

        return(
            <Link to = {this.props.value} onClick = {()=> this.handleClick()}
            style={lnk} >
        
                {this.props.name}
         
            </Link> 

        )
    }
}

export default ButtonStart;