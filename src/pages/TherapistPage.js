
import styled from 'styled-components';
import Header from '../components/shared/Header';
import ScreenTherapist from '../components/therapist/ScreenTherapist';
import Menu from '../components/shared/Menu';



function HomePage() {
    

    return (
      
        <ScreenContainer>
            <Header />
            <Menu />
            <ScreenTherapist />
            
        </ScreenContainer>
      
    );
  }
  
  export default HomePage;
  
  const ScreenContainer = styled.div`
  background-color: #FFFFFF;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  
  justify-content: left;
  margin: 0px;
  padding: 0px;
  `