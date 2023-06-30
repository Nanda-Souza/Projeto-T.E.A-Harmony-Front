import styled from "styled-components";
import { useState, useContext } from "react";
import UserContext from "../../contexts/UserContext";
import useCreatePatient from "../../hooks/api/useCreatePatient"
import { toast } from 'react-toastify';
import { ThreeDots } from  'react-loader-spinner'
import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat);

export default function ScreenPatient(){    
    const { userData } = useContext(UserContext);
    const userName = userData.user.name;
    const [name, setName] = useState('');
    const [age, setAge] = useState(''); 
    const [diagnostic_date, setDiagnostic_date] = useState('');   
    const [doctor_name, setDoctor_name] = useState("");
    const [email, setEmail] = useState("");
    const { loadingCreatePatient, createPatient } = useCreatePatient();

    function checkDate(date) {
        const dateFormat = dayjs(date, 'DD-MM-YYYY', true).isValid();

        if (!dateFormat) {
            return false
        }
                
        return true
        
    }
    
    async function registerPatient(e) {
        e.preventDefault();

        const validateDate = checkDate(diagnostic_date);        

        if (!validateDate) {
            toast('Favor digitar uma data valida no formato DD-MM-AAAA!');
          } else {
            try {

                const inputDate = dayjs(diagnostic_date, 'DD-MM-YYYY');

                const convertDate = inputDate.format('YYYY-MM-DD');        
                
                await createPatient({name, age: parseInt(age), diagnostic_date: convertDate, doctor_name, email});                                
                
                toast('Paciente cadastrado com sucesso!');
                setName('');
                setAge('');
                setDiagnostic_date('');
                setDoctor_name('');
                setEmail('');
                
              } catch (err) {
                toast('Não foi possível cadastrar o paciente!');            
              }                      
    }
}
    
    return (
<form onSubmit={registerPatient}>
    <PatientList>
       <UserName> <p className="textW">Bem vindo(a) <h1>{userName}</h1></p> </UserName>

        <InputLista>
       <h2>CADASTRAR NOVO PACIENTE</h2>

            <input                 
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Nome"
                required
                disabled={loadingCreatePatient}       
                />

            <input
                type="number"                
                value={age}
                onChange={e => setAge(e.target.value)}
                placeholder="Idade"
                required
                disabled={loadingCreatePatient}        
                />

            <input
                type="text"
                value={diagnostic_date}
                onChange={e => setDiagnostic_date(e.target.value)}
                placeholder="Data do diagnóstico" 
                required
                disabled={loadingCreatePatient} 
                />


            <input
                type="text"
                value={doctor_name}
                onChange={e => setDoctor_name(e.target.value)}
                placeholder="Neurologista"
                required
                disabled={loadingCreatePatient}
                />
            
            <input                 
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                required
                disabled={loadingCreatePatient}       
                />

            <PatientButton isLoading={loadingCreatePatient}>                
            {loadingCreatePatient ? (
                    <ThreeDots 
                        height="40" 
                        width="40" 
                        color="#ffffff" 
                        />
                    ) : (
                    <p                          
                        id="button" 
                        className="button-log">Cadastrar Paciente</p>
                    )}
            </PatientButton>


        </InputLista>

    </PatientList>
</form>
    )
}



const PatientList = styled.ul`
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

const PatientButton = styled.button` 
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
        