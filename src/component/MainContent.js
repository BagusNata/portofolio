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
import Game from "./images/Game.png";
import TV from "./images/TV.png";
import Music from "./images/Music.png";




export class MainContent extends Component {

  render() {
    const contactBox        = <ContactBox />;
    const skillBox          = <SkillBox />;
    const languageBox       = <LanguageBox />;
    const passionBox        = <PassionBox />;
    const aboutMe           = <AboutMe />;
    const education         = <Education />;
    const codingExperience  = <CodingExperience />
    const project           = <Project />

    return (
      <div style={{ marginBottom: "5px" }}>
        <div>
          <Header />
        </div>

        <div className="content-flex">
          <div className="col-md-4">
            <div className="contact-box">
              <div>{contactBox}</div>
              <div>{skillBox}</div>
              <div>{languageBox}</div>
              <div>{passionBox}</div>
            </div>
          </div>

          <div className="col-md-8 about-box">
            <div>{aboutMe}</div>
            <div>{education}</div>
            <div>{codingExperience}</div>
            <div>{project}</div>
          </div>
        </div>
      </div>
    );
  }
}

function ContactBox() {
  return (
    <div>
      <h1 className="font-contact">CONTACT</h1>
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
  );
}

function SkillBox() {
  return (
    <div className="skill-box">
      <h1 className="font-contact">SKILLS</h1>
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
  );
}

function LanguageBox() {
  return (
    <div>
      <h1 className="font-language-passion">LANGUAGE</h1>
      <div style={{ display: "inline-block" }}>
        <div className="font-language language-icon">
          <img className="language-img" src={Indonesia} alt="indonesia" />
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
  );
}

function PassionBox() {
  return (
    <div style={{ paddingBottom: "20rem" }}>
      <h1 className="font-language-passion">PASSIONS</h1>
      <div style={{ display: "inline-block" }}>
        <div className="font-passion passion-icon">
          <img className="passion-img" src={Game} alt="Game logo" />
          <img className="passion-img" src={Music} alt="Music logo" />
          <img className="passion-img" src={TV} alt="TV logo" />
        </div>
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div>
      <div className="aboutme-header">
        <div className="aboutme-font">ABOUT ME</div>
      </div>
      <div className="aboutContent-font">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem
      </div>
    </div>
  );
}

function Education() {
  return (
    <div>
      <div className="education-header">
        <div className="aboutme-font">EDUCATION</div>
      </div>
      <div className="aboutContent-font">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem
      </div>
    </div>
  );
}

function CodingExperience() {
  return (
    <div>
      <div className="experience-header">
        <div className="aboutme-font">EXPERIENCE</div>
      </div>
      <div className="aboutContent-font">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem
      </div>
    </div>
  );
}

function Project() {
  return (
    <div>
      <div className="project-header">
        <div className="aboutme-font">PROJECT</div>
      </div>
      <h3 className="text-right">Binary Converter</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
    </div>
  );
}
export default MainContent;
