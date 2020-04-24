import React, { Component } from "react";
import {Link } from "react-router-dom";


class ButtonStart extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false,
        }
    }

    render() {
      

        var btn;
        if(this.state.clicked) {
            btn = {
                fontFamily: "Arial",
                fontSize: "20px",
                borderRadius: "20px",
                border:"none",
                width: "100%",
                height: "100%",
                alignSelf: "center",
                backgroundColor:'#AEB8FE',
                color:'white',
            }
        } else {
            btn = {
                fontFamily: "Arial",
                fontSize: "20px",
                borderRadius: "20px",
                border: "none",
                width: "100%",
                height: "100%",
                alignSelf: "center",
                backgroundColor:'#85D1EB',
                color:'white',
            }
        }

        const lnk = {
            fontFamily: "Arial",
            fontSize: "40px",
            borderRadius: "20px",
            border: "none",
            width: "80%",
            height: "30%",
            margin: "10px",
            alignSelf: "center",
            backgroundColor:'#85D1EB',
            color:'white',
            textDecoration: 'none',
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