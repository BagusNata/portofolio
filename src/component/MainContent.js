import React, { Component } from "react";
import Header from "./Header";
import ContactLogo from "./images/contactLogo.png";
import PhoneLogo from "./images/phoneLogo.png";
import EmailLogo from "./images/emailLogo.png";
import GithubLogo from "./images/github.png";
import LocationLogo from "./images/locLogo.png";
import Bulat1 from "./images/bulet1.png";
import Bulat2 from "./images/bulet2.png";
import Bulat4 from "./images/bulet4.png";
import Bulat5 from "./images/bulet5.png";
import Indonesia from "./images/indonesia.png";
import Inggris from "./images/inggris.png";
import Bali from "./images/bali.png";
import Game from "./images/Game.png";
import TV from "./images/TV.png";
import Music from "./images/Music.png";

export class MainContent extends Component {
  render() {
    const contactBox = <ContactBox />;
    const skillBox = <SkillBox />;
    const languageBox = <LanguageBox />;
    const passionBox = <PassionBox />;
    const aboutMe = <AboutMe />;
    const education = <Education />;
    const codingExperience = <CodingExperience />;
    const project = <Project />;

    return (
      <div>
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
        <img className="phone-img" src={PhoneLogo} alt="" />
        081-237-083-255
      </div>
      <div className="font-logo">
        <img className="email-img" src={EmailLogo} alt="" />
        Bagusnata330@gmail.com
      </div>
      <div className="font-logo">
        <img className="github-img" src={GithubLogo} alt="" />
        www.github.com/bagusnata330
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
        <div style={{ display: "inline-block" }}>
          <img className="skill-img" src={Bulat5} alt="" />
          <img className="skill-img" src={Bulat1} alt="" />
        </div>
      </div>
      <div className="font-skill">
        Renang <br />
        <div>
          <img className="skill-img" src={Bulat5} alt="" />
          <img className="skill2-img" src={Bulat2} alt="" />
        </div>
      </div>
      <div className="font-skill">
        Rebahan <br />
        <div>
          <img className="skill-img" src={Bulat5} alt="" />
          <img className="skill-img" src={Bulat4} alt="" />
        </div>
      </div>
    </div>
  );
}

function LanguageBox() {
  return (
    <div>
      <h1 className="font-language-header">LANGUAGE</h1>
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
    <div style={{ paddingBottom: "4rem" }}>
      <h1 className="font-passion-header">PASSIONS</h1>
      <div style={{ display: "inline-block" }}>
        <div className="font-passion passion-icon">
          <img className="passionGame-img" src={Game} alt="Game logo" />
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
        Perkenalkan nama saya I Made Bagus Nata Dwi Kusuma, saya lahir di
        Denpasar pada tanggal 30 Agustus 2002. Saya adalah anak bungsu dari 2
        bersaudara. Saya berasal dari kabupaten Tabanan dan menetap tinggal di
        Denpasar.
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
        Saya sudah menempuh pendidikan selama 12 tahun. Saya menempuh sekolah
        dasar selama 6 tahun di SD Saraswati 6 Denpasar, lanjut ke SMP Negeri 12
        Denpasar selama 3 tahun, setelah itu lanjut ke SMA Negeri 3 Denpasar
        selama 3 tahun, dan sekarang saya sedang menempuh perguruan tinggi di
        ITB Stikom Bali.
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
        Pengalaman saya mengenal dunia IT berawal dari kakak saya yang masuk ke
        bidang IT, lalu ia menyarankan saya untuk mengambil kuliah jurusan IT
        karena kedepannya IT pasti sangat dibutuhkan di dunia kerja. Ia
        menyarankan saya masuk ke ITB Stikom Bali yang mana dia adalah alumni
        dari sana. Saya pertama kali diajarkan coding pada saat lulus SMA, saya
        diajarkan bahasa pemrogramman javascript dengan menggunakan libraries
        react. Hari-hari pertama memang terasa agak sulit untuk memahami semua
        pelajarannya karena saya sama sekali belum mengetahui tentang bahasa
        pemrogramman. Dalam waktu 4 bulan yaitu saat libur kelulusan SMA saya
        terus belajar untuk lebih memahami bahasa pemrogramman ini, dan sekarang
        saya sudah lumayan mengerti bagaimana cara coding meskipun masih banyak
        sekali yang saya belum ketahui.
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
      <div>
        <h3 className="projectList-font">&#10148; Binary Converter</h3>
        <p className="aboutContent-font">
          Dalam project ini saya membuat converter yaitu dari decimal ke binary.
          Binary merupakan bahasa yang dimengerti komputer yang terdiri dari 0
          dan 1.
        </p>
      </div>
      <div>
        <h3 className="projectList-font"> &#10148; Shoes Store</h3>
        <p className="aboutContent-font">
          Dalam project ini saya belajar bagaimana cara menambah barang ke
          keranjang belanjaan, mentotal semua harga barang di keranjang, dan
          membuat form yang diisi data produk yang ingin dimasukkan ke list
          produk. Di github saya ada 2 project ini yang saya beri nama
          KrenengShoeStore-app, Belajar-app (KrenengShoesStore yang saya buat
          full stack).
        </p>
      </div>
      <div>
        <h3 className="projectList-font">&#10148; Sorting Algorithm</h3>
        <p className="aboutContent-font">
          Dalam project ini saya belajar bagaimana cara membuat sorting
          algorithm menggunakan javascript.
        </p>
      </div>
    </div>
  );
}
export default MainContent;
