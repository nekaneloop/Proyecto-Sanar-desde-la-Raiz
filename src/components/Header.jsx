import React from "react";
import "../styles/style.scss";

function Header() {
    return (

        <div className="only-btn">
            <button className="btn-home">
                Home
            </button>

            <button className="btn-aboutMe">
                Sobre mí
            </button>

            <button className="btn-services">
                Servicios
            </button>

            <button className="btn-date">
                Inicia tu sanación aquí
            </button>
        </div>
    )
}

export default Header;