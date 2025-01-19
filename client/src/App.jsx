import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Questions from './pages/Questions';
import Login from './pages/Login';
import Register from './pages/Register';
import { useState, useEffect } from 'react';
import api from './services/api';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Test the API connection
    api.get('/')
      .then(response => {
        setMessage(response.data.msg);
        console.log('API Response:', response.data);
      })
      .catch(error => {
        console.error('API Error:', error);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <main style={styles.main}>
          <h1 style={styles.title}>Welcome to Question Board</h1>
          <p style={styles.subtitle}>A place to ask and answer questions</p>
          <p style={styles.apiMessage}>API Message: {message}</p>
          <div style={styles.buttons}>
            <button style={styles.button}>Ask a Question</button>
            <button style={styles.button}>Browse Questions</button>
          </div>
        </main>
      </div>
    </Router>
  );
}

const styles = {
  nav: {
    backgroundColor: '#333',
    color: 'white',
    padding: '1rem 2rem',
    marginBottom: '2rem'
  },
  logo: {
    margin: 0,
    fontSize: '1.5rem'
  },
  main: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 2rem',
    textAlign: 'center'
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '1rem'
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '2rem'
  },
  apiMessage: {
    color: '#007bff',
    marginBottom: '2rem'
  },
  buttons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center'
  },
  button: {
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  }
};

export default App;