import React, { Component } from "react";
import ButtonStart from '../startpage/ButtonStart'

class CodeCard extends Component {
    constructor() {
        super();
        this.state = {
            subtitle: "Voer de code in",
            subtitle_two: "om aan de sessie deel te nemen.",
            info: "Tip: de code is de vinden bovenin het scherm.",
            clicked: false,
        }
    }

    handleClick() {
        this.setState({clicked: true})
    }

    render(){

        const menu = {
            height: "40vh",
            width: "70vw",
            alignSelf: "center",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: "20px",
            paddingTop: "10px",
            paddingBottom: "10px",
        }

        const sbt = {
            fontSize: "8vw",
            color: "#0B2073",
            alignSelf: "center",
        }

        const sbt_two = {
            fontSize: "5vw",
            color: "#0B2073",
            alignSelf: "center",
            marginTop: "0px",
            display: 'flex',
            textAlign: 'center',

        }

        const sbt_div = {
            alignContent: "center",
            alignSelf: "center",
            display:"flex",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "wrap",
        }

        var code_bar;
        
        if (this.state.clicked) {
        code_bar = {
            fontSize: "50px",
            height:"30%",
            width: "80%",
            border: "2px solid #0B2073",
            boxShadow: "0px 0px 0px black",
            color: "#0B2073",
            alignSelf: "center",
            paddingLeft:"10px",
            paddingRight:"10px",
            textAlign:"center",
        }
    } else {
        code_bar = {
            fontSize: "50px",
            height:"30%",
            width: "80%",
            border: "2px solid #0B2073",
            boxShadow: "0px 0px 15px #85D1EB",
            color: "#0B2073",
            alignSelf: "center",
            paddingLeft:"10px",
            paddingRight:"10px",
            textAlign:"center",
        }
    }


        return(
            <div style={menu}>
                <div style={sbt_div}>
                    <h1 style={sbt}>{this.state.subtitle}</h1>
                    <h2 style={sbt_two}>{this.state.subtitle_two}</h2>
                </div>

                <input 
                style={code_bar} 
                type="text" 
                onInput={()=>this.handleClick()}
               
                ></input>
                <ButtonStart name="HOI" />
            </div>
        )
    }
}

export default CodeCard;