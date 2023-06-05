import styled from "styled-components"
import Logo from '../../components/Logo'
import FooterLogin from './FooterLogin';
import ScreenLogin from './ScreenLogin';

export default function SignIn() {

  return (
      
    <ScreenContainer>
        <Logo />
        <ScreenLogin />
        <FooterLogin />
    </ScreenContainer>
  
);
}


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