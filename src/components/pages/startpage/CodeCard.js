import React, { useState } from "react";
import ButtonStart from '../startpage/ButtonStart';
import ButtonBack from '../../navigation/ButtonBack';
import {useForm} from "react-hook-form";

function CodeCard() {

    const subtitle = "Voer de code in"
    const subtitle_two = "om aan de sessie deel te nemen"
    const info = "Tip: de code staat op het beeldscherm."
    const [clicked, setClicked] = useState(false)
    const {register, handleSubmit} = useForm();

    const handleClick = () => {
        setClicked(true)
    }

    const onSubmit = data => {
        console.log(data);
        alert("Je hebt " + data.roompin + " ingevoerd.")
    }

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

        const form = {
            height:"50%",
            width: "80%",
            fontSize: "50px",
            alignSelf: "center",
            textAlign:"center",
            justifyContent: "center",
            display:"flex",
            flexDirection: "column",
        }

        var code_bar;
        
        if (clicked) {
        code_bar = {
            fontSize: "50px",
            height:"50%",
            width: "100%",
            border: "2px solid #0B2073",
            boxShadow: "0px 0px 0px black",
            color: "#0B2073",
            alignSelf: "center",
            paddingLeft:"0px",
            paddingRight:"0px",
            textAlign:"center",
        }
        } else {
        code_bar = {
            fontSize: "50px",
            height:"50%",
            width: "100%",
            border: "2px solid #0B2073",
            boxShadow: "0px 0px 15px #85D1EB",
            color: "#0B2073",
            alignSelf: "center",
            paddingLeft:"0px",
            paddingRight:"0px",
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
                    <h1 style={sbt}>{subtitle}</h1>
                    <h2 style={sbt_two}>{subtitle_two}</h2>
                </div>

                <form style={form} onSubmit={handleSubmit(onSubmit)}>
                    <input 
                        style={code_bar} 
                        type="text" 
                        onInput={()=>handleClick()}
                        ref={register}
                        name="roompin"
                    />

                  <ButtonStart name="Deelnemen"/>
                </form>
            
                <p style={hint}>{info}</p>
            </div>
        )
}

export default CodeCard;