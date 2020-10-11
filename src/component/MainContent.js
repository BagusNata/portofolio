import React, { Component } from "react";
import Header from "./Header";
import ContactLogo from "./images/contactLogo.png";
import PhoneLogo from "./images/phoneLogo.png";
import EmailLogo from "./images/emailLogo.png";
import LocationLogo from "./images/locLogo.png";
import Nilai6 from "./images/bulet6.png";
import Nilai7 from "./images/bulet7.png";
import Nilai9 from "./images/bulet9.png";
import Indonesia from "./images/indonesia.png";
import Inggris from "./images/inggris.png";
import Bali from "./images/bali.png";


export class MainContent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div style={{marginBottom:"5px"}}>
        <div>
          <Header />
        </div>

        <div className="content-flex">
          <div className="col-md-4">
            <div className="contact-box">
              <div>
                <h1 className="font-contact">KONTAK</h1>
                <div className="font-logo">
                  <img className="contact-img" src={ContactLogo} alt="" />
                  Bagus Nata
                </div>
                <div className="font-logo">
                  <img className="contact-img" src={PhoneLogo} alt="" />
                  081-237-083-255
                </div>
                <div className="font-logo">
                  <img className="email-img" src={EmailLogo} alt="" />
                  Bagusnata330@gmail.com
                </div>
                <div className="font-logo">
                  <img className="contact-img" src={LocationLogo} alt="" />
                  Kesiman-Denpasar Timur
                </div>
              </div>

              <div className="skill-box">
                <h1 className="font-contact">KEAHLIAN</h1>
                <div className="font-skill">
                  Coding <br />
                  <img className="skill-img" src={Nilai6} alt="" />
                </div>
                <div className="font-skill">
                  Renang <br />
                  <img className="skill-img" src={Nilai7} alt="" />
                </div>
                <div className="font-skill">
                  Rebahan <br />
                  <img className="skill-img" src={Nilai9} alt="" />
                </div>
              </div>

              <div style={{paddingBottom:"2rem"}}>
                <h1 className="font-contact">BAHASA</h1>
                <div style={{ display: "inline-block" }}>
                  <div className="font-language language-icon">
                    <img
                      className="language-img"
                      src={Indonesia}
                      alt="indonesia"
                    />
                    <img className="language-img" src={Inggris} alt="inggris" />
                    <img className="language-img" src={Bali} alt="bali" />
                  </div>

                  <div className="font-language">
                    <div className="language-display">Indonesia</div>
                    <div className="language-display">English</div>
                    <div className="language-display">Balinese</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div>
              <h1>oidjook</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContent;
