import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function ScreenHome(){    
    const { userData } = useContext(UserContext);
    const userName = userData.user.name;    
    
    return (
    <ProfileList>
       <UserName> <p>Bem vindo {userName}</p> </UserName>

        <InputLista>
       <p>DADOS CADASTRAIS</p>

            <input                 
                type="name"
                placeholder="nome"
                required       
                />

            <input                
                type="email"
                placeholder="email"
                required        
                />

            <input                
                type="password"
                placeholder="senha" 
                required 
                />


            <input                
                type="url"
                placeholder="foto" 
                required
                />



            <ProfileButton >
                
                    <p                          
                        id="button" 
                        className="button-log">Atualizar Cadastro</p>
            </ProfileButton>


        </InputLista>

    </ProfileList>

    )
}



const ProfileList = styled.ul`
    input {
        width: 450px;
        height: 45px;
        border: 0px solid #7CD0CB;
        border-radius: 5px;  
        margin-bottom: 5px;
        outline: none;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;  
        font-size: 20px;
        color: #7CD0CB;
        background-color: rgba(124,208,203,0.2);  
        ::placeholder {
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            padding-left:15px;
            margin-left: 12px;
            color: #7CD0CB;
            font-weight: 400;
            font-size: 20px;
        }
        `

const InputLista = styled.li`
position: static;
justify-content: left;
margin-top: 30px;
margin-bottom: 5px;
padding: 15px;
display: flex;
flex-direction: column;
align-items: center;
p{
    margin-bottom: 15px;
}

`

const ProfileButton = styled.button` 
        width: 310px;
        height: 45px;
        background-color: #F3C715;
        border: 10px solid #F3C715;
        border-radius: 5px;  
        margin-bottom: 50px;  
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
             
        `
    const UserName = styled.div`
    margin-left:95px;
    margin-top: 100px; 
    font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
    `
        