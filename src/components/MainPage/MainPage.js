// import logo from './logo.svg';
import React from 'react';
import Header from "../Header/Header.js";
import ContactPictureText from "../ContactPictureText/ContactPictureText.js";
import './MainPage.css';

function MainPage() {
  return (
    <div className="MainPage">
        <Header />
        <ContactPictureText />
    </div>
  );
}

export default MainPage;
