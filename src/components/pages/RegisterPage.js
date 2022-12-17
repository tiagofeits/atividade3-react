import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import '../../App.css'

const SignUpPage = () => {
    const navigate = useNavigate();
    const navegarLogin=()=>{
        navigate('/login');
    };
    return (
        <div className="text-center m-5-auto">
            <h2>Novo Cadastro</h2>
            <h5>Informe seus dados para criar uma nova conta!</h5>
            <form action="/home">
                <p>
                    <label for="nomeusu">Nome de usuário:</label>
                    <br/>
                    <input className="form-control" type="text" name="nomeusu" required aria-describedby="nomeHelp" placeholder="Informe seu nome completo"/>
                    <small id="nomeHelp" class="form-text text-muted">Usaremos seu nome apenas para esse cadastro</small>
                </p>
                <p>
                    <label for="email">Endereço de email:</label>
                    <br/>
                    <input className="form-control" type="email" name="email" required aria-describedby="emailHelp" placeholder="Informe seu email"/>
                    <small id="emailHelp" class="form-text text-muted">Vamos enviar a confirmação desse cadastro para esse endereço</small>
                </p>
                <p>
                    <label for="password">Senha:</label>
                    <br/>
                    <input className="form-control" type="password" name="password" requiredc aria-describedby="passwordHelp" placeholder="Informe uma senha"/>
                    <small id="passwordHelp" class="form-text text-muted">Sua senha precisa ter entre 8 e 16 caracteres, com números, letras e caracteres especiais</small>
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>Eu concordo com todos os termos de serviço em <a href="https://www.google.com.br" target="_blank" rel="noopener noreferrer">termos de serviço</a></span>.
                </p>
                <p>
                    <button id="sub_btn" onClick={navegarLogin}>Cadastrar</button>
                </p>
                <p>
                    <Link to="/">Página Principal</Link>
                </p>
            </form>
        </div>
    )
}
export default SignUpPage;