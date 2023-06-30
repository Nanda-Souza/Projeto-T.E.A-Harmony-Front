import styled from "styled-components";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { ThreeDots } from  'react-loader-spinner'

import UserContext from '../../contexts/UserContext';
import useSignIn from '../../hooks/api/useSignIn';


export default function ScreenLogin(){    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');    
    const { loadingSignIn, signIn } = useSignIn();
    const { setUserData } = useContext(UserContext);
    const navigate = useNavigate();
   
    async function sendLogin(e) {
        e.preventDefault();

        try {            
            const userData = await signIn(email, password);
            setUserData(userData);
            toast('Login realizado com sucesso!');
            console.log(userData);
            navigate('/home');
          } catch (err) {
            toast('Não foi possível fazer o login!');            
          }              
 }
    
    return (
<form onSubmit={sendLogin}>
    <InputLogin>

        <InputLista>
            <input                
                type="email"
                value={email} 
                onChange={e => setEmail(e.target.value)}
                placeholder="email"
                required
                disabled={loadingSignIn}                
                />

            <input                
                type="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)}
                placeholder="senha" 
                required
                disabled={loadingSignIn}
                />


            <LogIn isLoading={loadingSignIn}>
                {loadingSignIn ? (
                    <ThreeDots 
                        height="40" 
                        width="40" 
                        color="#ffffff" 
                        />
                    ) : (
                    <p                          
                        id="button" 
                        className="button-log">Entrar</p>
                )}
            
            </LogIn>


        </InputLista>

    </InputLogin>
</form>
    )
}



const InputLogin = styled.ul`
    input {
        width: 303px;
        height: 45px;
        border: 1px solid #7CD0CB;
        border-radius: 5px;  
        margin-bottom: 6px;
        outline: none;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;  
        font-size: 20px;
        color: #7CD0CB;  
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
padding: 15px;
display: flex;
flex-direction: column;
align-items: center;

`

const LogIn = styled.button` 
        width: 310px;
        height: 45px;
        background-color: #F3C715;
        border: 10px solid #F3C715;
        border-radius: 5px;  
        margin-bottom: 6px;  
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
             
        `
        