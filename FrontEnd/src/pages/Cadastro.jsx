// src/pages/Cadastro.jsx
import React from 'react';
import './Login.css'; // Reaproveita o mesmo CSS do Login
import imagemSapatos from '../assets/SAPDI.png';
import segundaImagemSapatos from '../assets/SAPES.png';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const googleIconUrl = "https://img.icons8.com/color/48/google-logo.png";
const facebookIconUrl = "https://img.icons8.com/color/48/facebook-new.png";

export default function Cadastro() {
  const navigate = useNavigate();

  return (
    <div className="login-screen-wrapper">
      <div className="login-content-area">
        <div className="login-form-block">
          <div className="login-form-content">
            <h2 className="form-title">Crie sua conta</h2>
            <p className="form-subtitle">
              Já possui uma conta? Entre <span className="form-link" onClick={() => navigate('/login')}>aqui</span>.
            </p>
            <form>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email *</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Insira seu email"
                  className="form-input"
                />
              </div>
              <button type="submit" className="form-button">
                Criar Conta
              </button>
            </form>
            <p className="form-social-text">Ou faça login com</p>
            <div className="form-social-icons-container">
              <img src={googleIconUrl} alt="Google" className="form-social-icon" />
              <img src={facebookIconUrl} alt="Facebook" className="form-social-icon" />
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

      <Footer />
    </div>
  );
}
