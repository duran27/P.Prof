import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          name: 'Name',
          email: 'Email',
          password: 'Password',
          signup: 'Sign Up',
          successfulSignup: 'Registration successful',
          signupError: 'Error signing up',
          home: 'Home',
          dashboard: 'Dashboard',
          login: 'Login',
          
        },
      },
      es: {
        translation: {
          name: 'Nombre',
          email: 'Correo electrónico',
          password: 'Contraseña',
          signup: 'Registrarse',
          successfulSignup: 'Registro exitoso',
          signupError: 'Error al registrarse',
          home: 'Inicio',
          dashboard: 'Tablero',
          login: 'Iniciar sesión',
        },
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
