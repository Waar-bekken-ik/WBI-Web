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