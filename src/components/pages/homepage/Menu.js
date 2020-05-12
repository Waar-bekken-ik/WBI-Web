import React from 'react';
import Button from './Button';

function Menu() {
   
        const menu = {
            height: "40vh",
            width: "70vw",
            alignSelf: "center",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            borderRadius: "20px",
            paddingTop: "10px",
            paddingBottom: "10px",
        }
        return(
            <div style={menu}>
                <Button name="Start" value="/start"/>
                <Button name="Opties" value="/"/>
                <Button name="Doei" value="/"/>
            </div>
        )
}

export default Menu;