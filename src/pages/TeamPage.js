import styled from 'styled-components';
import Header from '../components/shared/Header';
import ScreenTeam from '../components/team/ScreenTeam'
import Menu from '../components/shared/Menu';



function TeamPage() {
    

    return (
      
        <ScreenContainer>
            <Header />
            <Menu />
            <ScreenTeam />
            
        </ScreenContainer>
      
    );
  }
  
  export default TeamPage;
  
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