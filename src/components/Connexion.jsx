import React from "react";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import '../assets/css/Connexion.css';
import axios from "axios";

export default function LoginPage() {
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/api/login",
        {
          email,
          password,
        }
      );

      console.log(response.data);

      // stocker le token
      localStorage.setItem("token", response.data.token);

      // stocker utilisateur
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      alert("Connexion réussie !");
    } catch (error) {
      console.log(error);

      alert("Email ou mot de passe incorrect");
    }
  };

    return (
        <div className="connexion-page">
            <div className="connexion-card">
                <div className="connexion-layout">
                    <aside className="connexion-left">
                        <div className="connexion-left-overlay" />

                        <div className="connexion-brand">
                            <div className="connexion-brand-mark">
                                360
                            </div>
                            <span className="connexion-brand-text">Med-Archive</span>
                        </div>

                        <div className="connexion-left-content">
                            <h2 className="connexion-left-title">
                                Bon retour !
                            </h2>
                            <p className="connexion-left-text">
                                Pour rester connecte avec nous, veuillez vous connecter avec vos informations personnelles.
                            </p>

                            {/* <button
                                type="button"
                                className="connexion-left-button"
                            >
                                Sign in
                            </button> */}
                        </div>
                    </aside>

                    <section className="connexion-right">
                        <div className="connexion-corner" />

                        <div className="connexion-form-panel">
                            <h1 className="connexion-right-title">
                                Connexion a votre espace
                            </h1>

                            <div className="connexion-socials">
                                <button type="button" className="connexion-social-btn">
                                    <FaFacebookF />
                                </button>
                                <button type="button" className="connexion-social-btn">
                                    <FaGooglePlusG />
                                </button>
                                <button type="button" className="connexion-social-btn">
                                    <FaLinkedinIn />
                                </button>
                            </div>

                            <p className="connexion-right-subtitle">
                                ou utilisez votre E-mail pour vous connecter :
                            </p>

                            <form onSubmit={handleSubmit} className="connexion-form">
                                <div className="connexion-field">
                                    <span className="connexion-field-icon"><FiUser /></span>
                                    <input type="text" placeholder="IMU" className="connexion-input" />
                                </div>

                                {/* <div className="connexion-field">
                                    <span className="connexion-field-icon"><FiMail /></span>
                                    <input type="email" placeholder="Email" className="connexion-input" />
                                </div> */}

                                <div className="connexion-field">
                                    <span className="connexion-field-icon"><FiLock /></span>
                                    <input type="password" placeholder="Mot de passe" className="connexion-input" />
                                </div>

                                <div className="connexion-options-row">
                                    <label className="connexion-remember">
                                        <input type="checkbox" />
                                        <span>Se souvenir de moi</span>
                                    </label>
                                    <a href="#" className="connexion-forgot-link">Mot de passe oublie ?</a>
                                </div>

                                <div className="connexion-submit-wrap">
                                    <button
                                        type="submit"
                                        className="connexion-submit"
                                    >
                                        Se connecter
                                    </button>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}