import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import logo from '../../../images/logo_erasmusmc.png';
import background from '../../../images/background.png';
// https://www.egmadviseurs.nl/public/uploads/Advies-Erasmus-MC-Rotterdam-13.jpg

function Home() {
    const title = "Waar Bekken Ik?"
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    const bg = {
        backgroundImage: `URL(${background})`,
        backgroundColor: "#0B2073",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "calc(var(--vh, 1vh)*100)",
        // ^^ for mobile browsers
        display: "flex",
        flexDirection: "column",
    };

    const menu = {
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
    };

    const header = {
        fontSize: "40px",
        color: "#FFFFFF",
        alignSelf: "center",
        fontFamily: "Montserrat",
    };

    const logostl = {
        width: "50vw",
        alignSelf: "center",
        height: "auto",
        marginTop: "10px",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
    }

    const size = useWindowSize()
    console.log(size)

    return (
        size.width <= 980 ?
            <div style={bg}>
                <img alt="Logo" style={logostl} src={logo} />
                <div style={menu}>
                    <h1 style={header}>
                        {title}
                    </h1>
                    <Menu />
                </div>
            </div>
            :
            <h1 style={{ textAlign: 'center' }}>Deze site is helaas alleen beschikbaar op mobiele apparaten</h1>
    );
}

function useWindowSize() {
    const isClient = typeof window === 'object';

    function getSize() {
        return {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined
        };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        if (!isClient) {
            return false;
        }

        function handleResize() {
            setWindowSize(getSize());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
}

export default Home;
