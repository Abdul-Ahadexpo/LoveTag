import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import SearchPage from './pages/SearchPage';

// Component to handle redirects on refresh
const RedirectOnRefresh: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleBeforeUnload = () => {
      // Set a flag in sessionStorage indicating page will refresh
      sessionStorage.setItem('pageRefreshing', 'true');
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    // Check if the page is being loaded after a refresh
    if (sessionStorage.getItem('pageRefreshing') === 'true' && location.pathname !== '/') {
      sessionStorage.removeItem('pageRefreshing');
      navigate('/', { replace: true });
    }
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [location, navigate]);
  
  return <>{children}</>;
};

function App() {
  return (
    <BrowserRouter>
      <RedirectOnRefresh>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </RedirectOnRefresh>
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