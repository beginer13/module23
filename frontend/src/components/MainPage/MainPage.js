import React from 'react';
import Header from "../../containers/Header";
import ContactPictureText from "../ContactPictureText/ContactPictureText.js";
import ContactInfo from "../ContactInfo/ContactInfo.js";
import Team from "../Team/Team.js";
import Footer from "../Footer/Footer.js";
import './MainPage.css';

function MainPage() {
  return (
    <div className="MainPage">
        <Header />
        <ContactPictureText />
        <ContactInfo />
        <Team />
        <Footer />
    </div>
  );
}

export default MainPage;
