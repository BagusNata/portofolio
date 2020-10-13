/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import profilePic from "./images/profilePict.png";

export class Header extends Component {
  render() {
    return (
      <div>
        <div className="row bg-profile">
            <div className="col-md-4 profile-card">
              <img
                src={profilePic}
                className="profile-img"
                alt="profile picture"
              />
            </div>
            <div className="judul col-md-8">
              <h1 className="font-nama">I MADE BAGUS NATA DWI KUSUMA</h1>
              <h2 className="font-ket">MAHASISWA ITB STIKOM BALI</h2>
              <h4 className="font-slogan">"Datang Dan Pergi Untuk Sebuah Cita-Cita"</h4>
            </div>
        </div>
      </div>
    );
  }
}

export default Header;
