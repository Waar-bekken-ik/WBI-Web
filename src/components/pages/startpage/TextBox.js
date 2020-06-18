

import React, { useState } from "react";

function TextBox ({text, tb_name, tb_ref}) {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(true)
    }

    var code_bar;
        
    if (clicked) {
    code_bar = {
        fontSize: "20px",
        height:"20%",
        width: "100%",
        border: "2px solid #CECECE",
        borderRadius: "10px",
        color: "#0B2073",
        alignSelf: "center",
        paddingLeft:"0px",
        paddingRight:"0px",
        textAlign:"center",
        margin:"10px",
        fontFamily: "Montserrat",
    }
    } else {
    code_bar = {
        fontSize: "20px",
        height:"20%",
        width: "100%",
        border: "2px solid #0B2073",
        borderRadius: "10px",
        color: "#0B2073",
        alignSelf: "center",
        paddingLeft:"0px",
        paddingRight:"0px",
        textAlign:"center",
        margin:"10px",
        fontFamily: "Montserrat",
    }
    }

    return(
        <input style={code_bar} type="text" 
        onInput={()=>handleClick()}
        ref={tb_ref}
        name={tb_name}
        placeholder={text}
        />
    )
}

export default TextBox;