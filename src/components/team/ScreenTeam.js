import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { toast } from 'react-toastify';
import { ThreeDots } from  'react-loader-spinner'

export default function ScreenTeam(){    
    const { userData } = useContext(UserContext);
    const userName = userData.user.name;    
    
    return (
    <TeamList>
       <UserName> <p className="textW">Bem vindo(a) <h1>{userName}</h1></p> </UserName>

        <InputLista>
       <h2>CADASTRAR NOVA EQUIPE MULTIDISCIPLINHAR</h2>

            <input                 
                type="text"
                placeholder="Paciente"
                required       
                />

            <input                 
                type="text"
                placeholder="Profissional 1"
                required       
                />

            <input                 
                type="text"
                placeholder="Profissional 2"
                required       
                />

            <input                 
                type="text"
                placeholder="Profissional 3"
                required       
                />

            <input                 
                type="text"
                placeholder="Profissional 4"
                required       
                />

            <input                 
                type="text"
                placeholder="Profissional 5"
                required       
                />


            <input                 
                type="text"
                placeholder="Profissional 6"
                required       
                />

            <input                 
                type="text"
                placeholder="Profissional 7"
                required       
                />

            <input                 
                type="text"
                placeholder="Profissional 8"
                required       
                />


            <TeamButton >                
                    <p                          
                        id="button" 
                        className="button-log">Cadastrar Equipe</p>
            </TeamButton>


        </InputLista>

    </TeamList>

    )
}



const TeamList = styled.ul`
    input {
        width: 450px;
        height: 45px;
        border: 0px solid #7CD0CB;
        border-radius: 5px;  
        margin-bottom: 5px;
        outline: none;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;  
        font-size: 20px;
        color: #7CD0CB;
        background-color: rgba(124,208,203,0.2);  
        ::placeholder {
            font-family: 'Roboto';
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
h2{
    margin-bottom: 15px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #7CD0CB;
}
`

const TeamButton = styled.button` 
        width: 450px;
        height: 45px;
        background-color: #7CD0CB;
        border: 10px solid #7CD0CB;
        border-radius: 5px;  
        margin-bottom: 50px;  
        font-family: 'Roboto';
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
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    h1{
        color:#F3C715;
        margin-left: 5px;
    }
    .textW{
        display: flex;
        flex-direction: row;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        color: #7CD0CB;
    }
        
    `
        