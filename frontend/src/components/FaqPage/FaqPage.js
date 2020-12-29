import React from "react";
import './FaqPage.css';
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer";
import FaqHeader from "../FaqHeader/FaqHeader.js"
import AnwsersQwestions from "../AnwsersQwestions/AnwsersQwestions.js"


class FaqPage extends React.Component {

    render () { 
        return (
            <div className="FaqPage">
                <Header />
                <FaqHeader />
                <AnwsersQwestions />
                <Footer />
            </div>
        )
    }
}

export default FaqPage