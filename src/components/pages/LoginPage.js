import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

import '../../App.css'

const SignInPage=()=> {
    const navigate = useNavigate();
    const navegar=()=>{
        navigate(`/home/${document.getElementById('nomeusu').value}`);
    };
    const [frase, enviaUsu]=useState('');

    return (
        <div className="text-center m-5-auto">
            <h2>Efetuar Login</h2>
            <h5>{frase}</h5>
            <form action="/home">
                <p>
                    <label>Nome de usuário:</label><br/>
                    <input type="text" id="nomeusu" 
                            onChange={e=> 
                                enviaUsu('Seja bem vindo ' + e.target.value + '!')
                            } 
                            name="nomeusu" required />
                </p>
                <p>
                    <label>Senha</label>
                    <Link to="/forget-password"><label className="right-label">Esqueceu a senha?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" onClick={navegar}>Login</button>
                </p>
            </form>
            <footer>
                <p>Primeiro acesso? <Link to="/register">Cadastre-se</Link>.</p>
                <p><Link to="/">Página Principal</Link>.</p>
            </footer>
        </div>
    )
};
export default SignInPage;