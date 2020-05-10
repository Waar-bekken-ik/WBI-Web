import React from "react";
import CodeCard from './CodeCard';
import background from '../../../images/background.png';
// https://www.egmadviseurs.nl/public/uploads/Advies-Erasmus-MC-Rotterdam-13.jpg


function Start(){
    
        var vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        const bg = {
            backgroundImage: `URL(${background})`,
            backgroundColor: "#0B2073",
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
            height:"100vh",
            display: "flex",
            flexDirection: "column",
        };

        const header = {
            fontSize: "40px",
            color: "#FFFFFF",
            alignSelf: "center",
            fontFamily: "Montserrat",
        };

        return(
            <div style={bg}>
              <div style={menu}>
                    <h1 style={header}>
                    </h1>
                    <CodeCard/>
              </div>
            </div>
        );
}


export default Start;