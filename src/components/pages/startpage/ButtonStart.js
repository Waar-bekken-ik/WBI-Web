import React, { useState } from "react";

function ButtonStart({ name }) {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked)
    };

    var lnk;

    if (clicked) {
        lnk = {
            fontFamily: "Montserrat",
            fontSize: "20px",
            borderRadius: "10px",
            border: "2px #314C8C solid",
            width: "100%",
            height: "20%",
            margin: "10px",
            alignSelf: "center",
            backgroundColor: '#314C8C',
            color: 'white',
            textDecoration: 'none',
            textAlign: 'center',
            paddingLeft: "10px",
            paddingRight: "10px",
            marginTop: "20px",
        }
    } else {
        lnk = {
            fontFamily: "Montserrat",
            fontSize: "20px",
            borderRadius: "10px",
            border: "2px #0C2074 solid",
            width: "100%",
            height: "20%",
            margin: "10px",
            alignSelf: "center",
            backgroundColor: '#0C2074',
            color: 'white',
            textDecoration: 'none',
            textAlign: 'center',
            paddingLeft: "10px",
            paddingRight: "10px",
            marginTop: "20px",
        }
    }

    return (
        <button style={lnk} onMouseDown={() => handleClick()} onTouchStart={() => handleClick()}>
            {name}
        </button>
    )
}

export default ButtonStart;