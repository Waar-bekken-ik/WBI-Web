import React, { Component } from "react";
import ButtonStart from '../startpage/ButtonStart';
import ButtonBack from '../../navigation/ButtonBack';


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
        const nav = {
            display:"flex",
            justifyContent: "flext-start",
            width: "100%",
            height: "8vw",
            flexDirection: 'row',
        }

        const menu = {
            height: "70vh",
            width: "80vw",
            alignSelf: "center",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: "20px",
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
        }

        const sbt = {
            fontSize: "8vw",
            height: "8vw",
            alignSelf: "center",
            color: "#0B2073",
            fontFamily: "Montserrat",
        }

        const sbt_two = {
            fontSize: "5vw",
            color: "#0B2073",
            alignSelf: "center",
            marginTop: "0px",
            display: 'flex',
            textAlign: 'center',
            width: '80%',
            fontFamily: "Montserrat",
        }

        const sbt_div = {
            alignContent: "center",
            alignSelf: "center",
            display:"flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
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
            height:"20%",
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

        const hint = {
            fontSize: "3vw",
            color: "#0B2073",
            alignSelf: "center",
            marginBottom: "0px",
            display: 'flex',
            textAlign: 'center',
            fontFamily: "Montserrat",
        }

        return(
            <div style={menu}>
                <div style={sbt_div}>
                    <div style={nav}>
                        <ButtonBack value="/" />
                    </div>
                    <h1 style={sbt}>{this.state.subtitle}</h1>
                    <h2 style={sbt_two}>{this.state.subtitle_two}</h2>
                </div>

                <input 
                style={code_bar} 
                type="text" 
                onInput={()=>this.handleClick()}
                ></input>
                <ButtonStart name="Deelnemen" value="/" />
                <p style={hint}>Tip: de code staat op het beeldscherm.</p>
            </div>
        )
    }
}

export default CodeCard;