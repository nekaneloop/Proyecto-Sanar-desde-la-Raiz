import React from "react";
import "../styles/style.scss";

function Header() {

    const clickHome = () => {
        window.location.href= '/';
    }

    const clickAboutMe = () => {
        window.location.href= '/SobreMi';
    }

    const clickServices = () => {
        window.location.href= '/Servicios';
    }

    return (
    
        <div className="only-btn">
            <button type="button" className="btn-home" onClick={clickHome}>
                Home
            </button>

            <button className="btn-aboutMe" onClick={clickAboutMe}>
                Sobre mí
            </button>

            <button className="btn-services" onClick={clickServices}>
                Servicios
            </button>

            <button className="btn-date">
                Inicia tu sanación aquí
            </button>
        </div>
    )
}

export default Header;