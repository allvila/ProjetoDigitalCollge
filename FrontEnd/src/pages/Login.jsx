// Login.jsx
import React from 'react';
import './Login.css';

import imagemSapatos from '../assets/SAPDI.png';
import segundaImagemSapatos from '../assets/SAPES.png';
import { useNavigate } from 'react-router-dom';


import Footer from '../components/Footer'; // <--- Certifique-se de que o caminho está correto

const googleIconUrl = "https://img.icons8.com/color/48/google-logo.png";
const facebookIconUrl = "https://img.icons8.com/color/48/facebook-new.png";
const metamaskIconUrl = "https://img.icons8.com/color/48/metamask-logo.png";



function Login() {
  const navigate = useNavigate();
  return (
    <div className="login-screen-wrapper">
      <div className="login-content-area">
        <div className="login-form-block">
          <div className="login-form-content">
            <h2 className="form-title">Acesse sua conta</h2>
            <p className="form-subtitle">
              Novo cliente? Então registre-se{' '}
              <span className="form-link" onClick={() => navigate('/cadastro')}>
                aqui
              </span>.
            </p>


            <form>
              <div className="form-group">
                <label htmlFor="loginEmail" className="form-label">Login *</label>
                <input
                  type="text"
                  id="loginEmail"
                  placeholder="Insira seu login ou email"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="loginSenha" className="form-label">Senha *</label>
                <input
                  type="password"
                  id="loginSenha"
                  placeholder="Insira sua senha"
                  className="form-input"
                />
              </div>
              <span className="form-forgot-password">Esqueci minha senha</span>
              <button type="submit" className="form-button">
                Acessar Conta
              </button>
            </form>
            <p className="form-social-text">Ou faça login com</p>
            <div className="form-social-icons-container">
              <img src={googleIconUrl} alt="Google" className="form-social-icon" />
              <img src={facebookIconUrl} alt="Facebook" className="form-social-icon" />
              <img src={metamaskIconUrl} alt="Metamask" className="form-social-icon" />
            </div>
          </div>
        </div>

        <img
          src={imagemSapatos}
          alt="Par de sapatos 1"
          className="shoe-image-one"
        />

        <img
          src={segundaImagemSapatos}
          alt="Par de sapatos 2"
          className="shoe-image-two"
        />
      </div>

      {/* Footer no final da tela */}
      <Footer />
    </div>
  );
}

export default Login;
