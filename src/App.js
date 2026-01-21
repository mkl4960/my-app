import './App.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Content from './Content';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
        {currentPage === 'login' ? (
          <LoginForm 
            onRegisterClick={() => setCurrentPage('register')} 
            onLoginSuccess={() => setCurrentPage('content')}
          />
        ) : currentPage === 'register' ? (
          <RegisterForm onBackToLogin={() => setCurrentPage('login')} />
        ) : (
          <Content />
        )}
      </header>
    </div>
  );
}

export default App;
