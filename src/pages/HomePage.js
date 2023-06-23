
import styled from 'styled-components';
import Header from '../components/shared/Header';
import ScreenHome from '../components/home/ScreenHome';
import Menu from '../components/shared/Menu';



function HomePage() {
    

    return (
      
        <ScreenContainer>
            <Header />
            <Menu />
            <ScreenHome />
            
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