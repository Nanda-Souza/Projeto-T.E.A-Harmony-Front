import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/RegisterPage';
import { UserProvider } from './contexts/UserContext';
import { OptionProvider } from './contexts/OptionContext';
import useToken from './hooks/useToken';
import HomePage from './pages/HomePage';
import PacientPage from './pages/PatientPage'
import TeamPage from './pages/TeamPage'

export default function App() {
  return (
    <>
      <ToastContainer />
        <UserProvider>
          <OptionProvider>
            <Router>
              <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/sign-up" element={<SignUp />} />            
              <Route path="/home" element={<HomePage />} /> 
              <Route path="/patient" element={<PacientPage />} />         
              <Route path="/team" element={<TeamPage />} />  
              </Routes>
            </Router>
          </OptionProvider>
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
