import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import SearchPage from './pages/SearchPage';
import AboutPage from './pages/AboutPage';

function App() {
  const path = window.location.pathname;

  const renderPage = () => {
    switch (path) {
      case '/':
        return <HomePage />;
      case '/post':
        return <PostPage />;
      case '/search':
        return <SearchPage />;
      case '/about':
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <BrowserRouter>
      {renderPage()}
      <Toaster position="bottom-center" toastOptions={{
        duration: 4000,
        style: {
          background: '#ffffff',
          color: '#333333',
          border: '1px solid #f9a8d4',
        },
      }} />
    </BrowserRouter>
  );
}

export default App;