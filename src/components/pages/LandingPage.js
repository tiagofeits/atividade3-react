import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/bg.png'

function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">PASSEANDO PELO CAMPO</h1>
            <p className="main-para text-center">Acesse ou Cadastre-se</p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">Login</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>Novo cadastro</span></button>
                </Link>
            </div>
        </header>
    )
}
export default LandingPage;

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}