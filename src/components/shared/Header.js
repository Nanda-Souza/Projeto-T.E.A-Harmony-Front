import styled from "styled-components"
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Header(){
    const { userData } = useContext(UserContext);
    const imgUrl = userData.user.img_url;   
       
    
    return (
        <HeaderGeneral >
            <img src="assets/TEAlogo.png" alt="" />
            <img src={imgUrl} alt="" />

        </HeaderGeneral>
    )
}

const HeaderGeneral = styled.div`
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: 'Playball';
    font-weight: 400;
    font-size: 40px;
    color: #FFFFFF;
    padding: 10px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    p{
        display: flex;
        justify-content: center;
        align-items:center;
        margin-left: 20px;
    }
    img {
        width: 120px;
        height: 55px;
    }
  `