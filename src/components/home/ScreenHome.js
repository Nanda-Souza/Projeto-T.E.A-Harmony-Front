import styled from "styled-components";
import { useState, useContext } from "react";
import UserContext from "../../contexts/UserContext";
import useUpdateProfile from "../../hooks/api/useUpdateProfile";
import { toast } from 'react-toastify';
import { ThreeDots } from  'react-loader-spinner'

export default function ScreenHome(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [confirmPassword, setConfirmPassword] = useState('');   
    const [name, setName] = useState("")
    const [img_url, setImageUrl] = useState("")
    const { userData, setUserData } = useContext(UserContext);
    const userName = userData.user.name;
    const { loadingUpdateProfile, updateProfile } = useUpdateProfile();
    
    
    async function updateṔrofile(e) {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast('As senhas devem ser iguais!');
          } else {
            try {            
                const updatedProfile = await updateProfile({name, email, password, img_url});
                setUserData(updatedProfile);                
                toast('Dados atualizados com sucesso!');                            
              } catch (err) {
                toast('Não foi possível atualizar o perfil!');            
              }                      
    }
}
    
    return (
<form onSubmit={updateṔrofile}>
    <ProfileList>
       <UserName> <p className="textW">Bem vindo(a) <h1>{userName}</h1></p> </UserName>

        <InputLista className="list">
       <h2>DADOS CADASTRAIS</h2>

            <input                 
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="nome"
                required
                disabled={loadingUpdateProfile}       
                />

            <input                
                type="email"
                value={email} 
                onChange={e => setEmail(e.target.value)}
                placeholder="email"
                required
                disabled={loadingUpdateProfile}         
                />

            <input                
                type="password"
                value={password} 
                onChange={e => setPassword(e.target.value)}
                placeholder="senha" 
                required 
                disabled={loadingUpdateProfile}     
                />
            
            <input                
                type="password"
                value={confirmPassword} 
                onChange={e => setConfirmPassword(e.target.value)}
                placeholder="confirmar senha" 
                required 
                disabled={loadingUpdateProfile}     
                />

            <input                
                type="url"
                value={img_url} 
                onChange={e => setImageUrl(e.target.value)}
                placeholder="foto" 
                required
                disabled={loadingUpdateProfile}     
                />



            <ProfileButton isLoading={loadingUpdateProfile}>
                {loadingUpdateProfile ? (
                    <ThreeDots 
                        height="40" 
                        width="40" 
                        color="#ffffff" 
                        />
                    ) : (
                    <p                          
                        id="button" 
                        className="button-log">Atualizar Cadastro</p>
                    )}                        
            </ProfileButton>


        </InputLista>

    </ProfileList>
</form>
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
@media (max-width: 600px) {
    .list{
      height:70vh;
      margin-top: 20%;
    }

`

const ProfileButton = styled.button` 
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
        