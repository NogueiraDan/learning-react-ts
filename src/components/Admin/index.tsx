import "./admin.scss";
import React, { useContext } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { ThemeContext } from "../../contexts/ThemeContext";

const Admin: React.FC = () => {
  // Context API
  const { email, logout } = useAuth();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`admin-container ${theme === "dark" ? "dark" : ""}`}>
      <button
        onClick={toggleTheme}
        className={`button ${theme === "dark" ? "dark" : ""}`}
      >
        {theme === "light" ? "Modo Escuro" : "Modo Claro"}
      </button>
      <p className="content">
        Este é um exemplo de aplicativo que usa a Context API para gerenciar o
        tema. O tema atual é: <strong>{theme}</strong>.
      </p>
      <h2 className="admin-heading">Admin</h2>
      <p className="admin-email">Email: {email}</p>
      <button onClick={logout} className="admin-button">
        Sair
      </button>
      <hr />
    </div>
  );
};

export default Admin;
