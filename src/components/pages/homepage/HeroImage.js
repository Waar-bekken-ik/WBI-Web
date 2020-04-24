import React, {Component} from 'react';
import Menu from  './Menu';

class HeroImage extends Component {
    constructor() {
        super();
        this.state = {
            title: "Waar Bekken Ik?",
        }
    }

    render () {

        const bg = {
          //  backgroundImage: "URL('https://daf9627eib4jq.cloudfront.net/app/uploads/2018/08/1_A99100.24-Passage_Kunst_01%E2%88%8FOssip-1024x768.jpg')",
            backgroundColor: "#0B2073",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height:"100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        };

        const header = {
            fontSize: "40px",
            color: "#FFFFFF",
            alignSelf: "center",
            fontFamily: "Arial",
        };

        return(
            <div style={bg}>
              <h1 style={header}>{this.state.title}</h1>
              <Menu />
            </div>
        );
    }
}

export default HeroImage;
