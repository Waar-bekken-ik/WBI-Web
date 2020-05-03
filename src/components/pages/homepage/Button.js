import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {Link } from "react-router-dom";

class Button extends Component {
    constructor(props) {
        super(props)

        this.state = {
            clicked: false,
        };
    }

        
    handleClick(){
        this.setState({clicked: !this.state.clicked});
    }

    render() {
      

        var btn;
        if(this.state.clicked) {
            btn = {
                fontFamily: "Montserrat",
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
                fontFamily: "Montserrat",
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
            fontFamily: "Montserrat",
            fontSize: "40px",
            borderRadius: "20px",
            border: "none",
            width: "80%",
            height: "30%",
            margin: "10px",
            alignSelf: "center",
            backgroundColor:'white',
            color:'white',
            textDecoration: 'none',
        }

    

        return(
            <Link to = {this.props.value} onClick = {()=> this.handleClick()}
            style={lnk} >
            <button 
            onClick = {()=> this.handleClick()}
            style={btn} >
                {this.props.name}
            </button>
            </Link>
        )
    }
}

export default Button;