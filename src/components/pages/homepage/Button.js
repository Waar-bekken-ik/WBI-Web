import React, { useState } from 'react';
import { useStore } from '../../../store';

function Button({ value, name }) {
    const [clicked, setClicked] = useState(false);
    const { setGamePhase } = useStore();

    const handleClick = () => {
        setClicked(!clicked)
    };

    var btn;
    if (clicked) {
        btn = {
            fontFamily: "Montserrat",
            fontSize: "20px",
            borderRadius: "10px",
            border: "none",
            width: "100%",
            height: "30%",
            margin: "10px",
            alignSelf: "center",
            backgroundColor: '#314C8C',
            color: 'white',
        }
    } else {
        btn = {
            fontFamily: "Montserrat",
            fontSize: "20px",
            borderRadius: "10px",
            border: "none",
            width: "100%",
            height: "30%",
            margin: "10px",
            alignSelf: "center",
            backgroundColor: '#0C2074',
            color: 'white',
        }
    }

    return (
        <button
            onPointerUp={() => setGamePhase('start')}
            onMouseDown={() => handleClick()}
            onTouchStart={() => handleClick()}
            style={btn}
        >
            {name}
        </button>
    )
}

export default Button;