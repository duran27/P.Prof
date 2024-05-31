import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './forms.css';


const Signup: React.FC = () => {
    const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Aquí puedes realizar la solicitud al backend para registrarte
    const response = await fetch('http://127.0.0.1:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      console.log(t('Registro exitoso'));
    } else {
      console.error(t('Error al registrarse'));
    }
  };

  return (
    <div className='signup-form'>
    <h1>{t('Signup')}</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">{t('name')}: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name" // Asignar un valor apropiado para el nombre
        />
      </div>
      <div>
        <label htmlFor="email">{t('email')}:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email" // Asignar un valor apropiado para el correo electrónico
        />
      </div>
      <div>
        <label htmlFor="password">{t('password')}</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password" // Asignar "new-password" para evitar autocompletar contraseñas existentes
        />
        <i
            className={`fas fa-eye${isPasswordVisible ? '-slash' : ''}`} // Toggle eye icon
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          ></i>
      </div>
      <button type="submit">{t('signup')}</button>
    </form>
  </div>
  );
}

export default Signup;
