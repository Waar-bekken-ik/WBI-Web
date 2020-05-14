import React from "react";
import ButtonStart from '../startpage/ButtonStart';
import ButtonBack from '../../navigation/ButtonBack';
import {useForm} from "react-hook-form";
import TextBox from "../startpage/TextBox";

function Start(){
    
        var vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        const subtitle = "Voer de code in"
        const subtitle_two = "om aan de sessie deel te nemen"
        const info = "Tip: de code staat op het beeldscherm."
       
        const {register, handleSubmit} = useForm();
    

    
        const onSubmit = data => {
            console.log(data);
            alert(data.name + " heeft " + data.room_pin + " ingevoerd.")
        }

        const bg = {
            backgroundColor: "#F5F5F5",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height:"calc(var(--vh, 1vh)*100)",
            // ^^ for mobile browsers
            display: "flex",
            flexDirection: "column",
        };

        const menu = {
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height:"100%",
            display: "flex",
            flexDirection: "column",
        };

        const header = {
            fontSize: "40px",
            color: "#505050",
            alignSelf: "center",
            fontFamily: "Montserrat",
        };
        

        const nav = {
            display:"flex",
            justifyContent: "flext-start",
            width: "100%",
            height: "8vw",
            flexDirection: 'row',
        }


        const sbt = {
            fontSize: "8vw",
            height: "8vw",
            alignSelf: "center",
            color: "#505050",
            fontFamily: "Montserrat",
        }

        const sbt_two = {
            fontSize: "5vw",
            color: "#505050",
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
            height:"70%",
            width: "80%",
            fontSize: "50px",
            alignSelf: "center",
            textAlign:"center",
            justifyContent: "center",
            display:"flex",
            flexDirection: "column",
            fontFamily: "Montserrat",
        }

  

        const hint = {
            fontSize: "3vw",
            color: "#0B2073",
            alignSelf: "center",
            marginBottom: "10px",
            display: 'flex',
            textAlign: 'center',
            fontFamily: "Montserrat",
        }
  

        return(
            <div style={bg}>
                <div style={menu}>
                    <div style={sbt_div}>
                        <div style={nav}>
                            <ButtonBack value="/" />
                        </div>
                        <h1 style={sbt}>{subtitle}</h1>
                        <h2 style={sbt_two}>{subtitle_two}</h2>
                    </div>

                    <form style={form} onSubmit={handleSubmit(onSubmit)}>
                        <TextBox text="Naam invoeren" tb_ref={register} tb_name="name"/>
                        <TextBox text="Room pin invoeren" tb_ref={register} tb_name="room_pin"/>
                        <ButtonStart name="Doe mee!" />
                    </form>
                
                    <p style={hint}>{info}</p>
                </div>
            </div>
        );
}

export default Start;