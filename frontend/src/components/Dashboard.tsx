import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import for translations

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    // Función para obtener el nombre de usuario del backend
    const fetchUsername = async () => {
      try {
        const response = await fetch('http://localhost:5000/user', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Assuming you have stored the user email in local storage
            // Replace 'userEmail' with the actual key you are using to store the email
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
          }
        });
        const data = await response.json();
        setUsername(data.username);
      } catch (error) {
        console.error('Error fetching username:', error);
      }
    };

    // Llamamos a la función para obtener el nombre de usuario cuando el componente se monta
    fetchUsername();
  }, []);

  const handleLogout = () => {
    // TODO: Implement logout logic (e.g., clear local storage, make API call)
    console.log('Logout clicked!'); // Replace with actual logout logic
    // Clear user data from storage
    localStorage.removeItem('accessToken');
    // Redirect to login page
    navigate('/login');
  };

  return (
    <><div className="dashboard">
      <h1>{t('Bienvenido')} {username}</h1>
      {/* Your other dashboard content here */}
      <button onClick={handleLogout}>{t('Logout')}</button>

    </div>
    
    
      </>

  );
};

export default Dashboard;