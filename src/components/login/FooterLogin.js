import styled from "styled-components"
import { Link } from "react-router-dom"

export default function FooterLogin(){
    
    return (
        <FooterLog>
   
        <Link to="/sign-up" style={{ color: '#F3C715'}}>
            <h1 >Não tem uma conta? Cadastre-se!</h1>
        </Link>

        </FooterLog>
    )
}

const FooterLog = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0 20px 0;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    color: #F3C715;
    
`