import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function ForgetPasswordPage() {
    return (
        <div className="text-center m-5-auto">
            <h2>Esqueceu sua senha ?</h2>
            <h5>Informe seu email e lhe enviaremos uma nova senha</h5>
            <form action="/login">
                <p>
                    <label id="reset_pass_lbl">Email: </label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Enviar email para resetar a senha</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Criar uma nova conta</Link>.</p>
                <p><Link to="/">Página Principal</Link>.</p>
            </footer>
        </div>
    )
}
