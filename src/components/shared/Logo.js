import styled from "styled-components"

export default function Logo(){
    
    return (
        <LogoContainer>
            <img src="assets/TEAlogo.png" alt="logo"/>

        </LogoContainer>
    )
}

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 68px 0 20px 0;
    img {
        width: 350px;
    }
`