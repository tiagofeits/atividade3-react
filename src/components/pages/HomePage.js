import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function HomePage() {
    const {usuario} = useParams();
    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">Bem vindo {usuario}!</h1>
            <Link to="/">
                <button className="primary-button">Sair</button>
            </Link>
        </div>
    );
}