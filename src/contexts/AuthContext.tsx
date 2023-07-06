import React, { createContext, useContext, useState } from "react";

// Definindo o tipo do contexto
type AuthContextType = {
  email: string | null;
  login: (email: string, password: string) => void;
  logout: () => void;
};

// Definindo o tipo das props
type AuthContextProps = {
  children: React.ReactNode;
};

// Criando o contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook customizado para utilizar o contexto
const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};

// Componente provedor do contexto
const AuthProvider = ({ children }: AuthContextProps) => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const login = (inputEmail: string, password: string) => {
    if (inputEmail === "admin@teste.com" && password === "admin") {
      setEmail(inputEmail);
      setPassword(password);
    }
    else{
      alert("Email deve ser: admin@teste.com e Senha: admin");
    }
  };

  const logout = () => {
    // Lógica de logout aqui...
    setEmail(null);
  };

  // Criando o objeto de contexto
  const authContextValue: AuthContextType = {
    email,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider, useAuth };
