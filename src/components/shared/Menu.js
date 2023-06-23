import styled from "styled-components"

export default function Menu(){
       
    
    return (
        <MenuGeneral >
            <img src="assets/home.png" />
            

        </MenuGeneral>
    )
}

const MenuGeneral = styled.div`
    width: 75px;
    height: 100%;
    background-color: #F3C715;
    position: fixed;
    display: inline-block;
    left: 0;
    margin-top: 73px;
    flex-direction: column;
    font-family: 'Playball';
    font-weight: 400;
    font-size: 40px;
    color: #FFFFFF;
    padding: 10px;
    img {
        margin-left:5px;
        margin-top: 5px;
        width: 40px;
    }
  `