import React from 'react';


function NoPage() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
      color: '#333',
    },
    heading: {
      fontSize: '2rem',
      marginBottom: '1rem',
    },
    message: {
      fontSize: '1.2rem',
      marginBottom: '1.5rem',
    },
    link: {
      color: '#007BFF',
      textDecoration: 'none',
      fontSize: '1rem',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.message}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <a href="/" style={styles.link}>
        Go back to the homepage
      </a>
    </div>
  );
}

export default NoPage;