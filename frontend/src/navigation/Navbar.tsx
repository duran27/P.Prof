import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importa el archivo de estilos CSS de la Navbar

// Import necessary components from react-i18next
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  // Call useTranslation hook inside the component
  const { t } = useTranslation();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">{t('home')}</Link>
        </li>
        <li>
          <Link to="/signup">{t('signup')}</Link>
        </li>
        <li>
          <Link to="/login">{t('login')}</Link>
        </li>
        <li>
          <Link to="/dashboard">{t('Buscar Producto')}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
