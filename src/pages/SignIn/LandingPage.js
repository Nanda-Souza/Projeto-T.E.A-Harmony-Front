
import styled from 'styled-components';
import Logo from '../components/shared/Logo';
import ScreenLogin from '../components/login/ScreenLogin';
import FooterLogin from '../components/login/FooterLogin';



function LandingPage() {
    

    return (
      
        <ScreenContainer>
            <Logo />
            <ScreenLogin />
            <FooterLogin />
        </ScreenContainer>
      
    );
  }
  
  export default LandingPage;
  
  const ScreenContainer = styled.div`
  background-color: #FFFFFF;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  `