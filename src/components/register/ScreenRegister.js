import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { ThreeDots } from  'react-loader-spinner'

import useSignUp from "../../hooks/api/useSignUp";

export default function ScreenRegister(){
    const { loadingSignUp, signUp } = useSignUp();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [confirmPassword, setConfirmPassword] = useState('');   
    const [name, setName] = useState("")
    const [img_url, setImageUrl] = useState("")
    const navigate = useNavigate()

    async function createLogin(e) {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast('As senhas devem ser iguais!');
          } else {
            try {
              await signUp(name, email, password, img_url);
              toast('Inscrito com sucesso! Por favor, faça login.');
              navigate('/');
            } catch (error) {            
              toast('Não foi possível fazer o cadastro!');
            }
          }
}

    
    return (
<form onSubmit={createLogin}>
    <InputRegister>

        <InputList>
            <input                
                type="email"
                value={email} 
                onChange={e => setEmail(e.target.value)}
                placeholder="email"
                required
                disabled={loadingSignUp}         
                />

            <input                
                type="password"
                value={password} 
                onChange={e => setPassword(e.target.value)}
                placeholder="senha" 
                required 
                disabled={loadingSignUp}     
                />
            
            <input                
                type="password"
                value={confirmPassword} 
                onChange={e => setConfirmPassword(e.target.value)}
                placeholder="confirmar senha" 
                required 
                disabled={loadingSignUp}     
                />

            <input                 
                type="name"
                value={name} 
                onChange={e => setName(e.target.value)}
                placeholder="nome"
                required
                disabled={loadingSignUp}        
                />

            <input                
                type="url"
                value={img_url} 
                onChange={e => setImageUrl(e.target.value)}
                placeholder="foto" 
                required
                disabled={loadingSignUp}     
                />

            <Registration isLoading={loadingSignUp}>
                {loadingSignUp ? (
                    <ThreeDots 
                        height="40" 
                        width="40" 
                        color="#ffffff" 
                        />
                    ) : (
                    <p                         
                        id="button" className="button-regis">Cadastrar</p>
                    )}
            </Registration>


        </InputList>

    </InputRegister>
</form>
    )
}



const InputRegister = styled.ul`
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

const InputList = styled.li`
padding: 15px;
display: flex;
flex-direction: column;
align-items: center;

`

const Registration = styled.button` 
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