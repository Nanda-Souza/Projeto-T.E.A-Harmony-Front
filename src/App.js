import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/RegisterPage';
import { UserProvider } from './contexts/UserContext';
import useToken from './hooks/useToken';
import HomePage from './pages/HomePage';
import PacientPage from './pages/PacientPage'

export default function App() {
  return (
    <>
      <ToastContainer />
        <UserProvider>
          <Router>
            <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/sign-up" element={<SignUp />} />            
            <Route path="/home" element={<HomePage />} /> 
            <Route path="/pacient" element={<PacientPage />} />         
            </Routes>
          </Router>
        </UserProvider>      
    </>
  );
}

function ProtectedRouteGuard({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  return <>{children}</>;
}
