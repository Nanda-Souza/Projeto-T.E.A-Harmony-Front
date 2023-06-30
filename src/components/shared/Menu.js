import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { OptionContext } from "../../contexts/OptionContext";
import { useContext } from "react";

export default function Menu(){    
    const { 
        home, 
        setHome,
        patient,
        setPatient,
    } = useContext(OptionContext)
    const navigate = useNavigate();    

    const selectHome = () => {
        setHome(true);
        setPatient(false);
        navigate('/home');
    };
    
    const selectPatient = () => {
        setPatient(true);
        setHome(false);        
        navigate('/patient');
    };
       
    
    return (
        <MenuGeneral >
            <img 
                src={home ? "assets/homeRed.png" : "assets/home.png"}
                alt=""
                onClick={selectHome} 
                />

            <img 
                src={patient ? "assets/patientRed.png" : "assets/patient.png"} 
                alt=""
                onClick={selectPatient}  
                />
            
            <img src="assets/team.png" alt="" />

            <img src="assets/calendar.png" alt="" />

            <img src="assets/puzzle.png" alt="" />

            <img src="assets/schedule.png" alt="" />

            <img src="assets/email.png" alt="" />

            <img src="assets/exit.png" alt="" />


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
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 40px;
    color: #FFFFFF;
    padding: 10px;
    img {
        margin-bottom: 15px;
        margin-left:5px;
        margin-top: 5px;

        width: 40px;
    }
  `