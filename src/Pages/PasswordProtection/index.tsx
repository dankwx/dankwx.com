import React, { useState, ReactNode, ChangeEvent } from 'react';

interface PasswordProtectionProps {
  correctPassword: string;
  children: ReactNode;
}

const PasswordProtection: React.FC<PasswordProtectionProps> = ({
  correctPassword,
  children,
}) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Senha incorreta!');
    }
  };

  if (isAuthenticated) {
    return <>{children}</>; // Renderiza o conteúdo da página se autenticado
  }

  return (
    <div>
      <label htmlFor="password">Senha:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button onClick={handleSubmit}>Entrar</button>
    </div>
  );
};

export default PasswordProtection;
