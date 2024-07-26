// src/components/Modal/Modal.styled.js
import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3); /* Fundal transparent cu opacitate mai mică */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: #151515; /* Fundal negru */
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  max-width: 484px;
  height: auto;
  max-height: 90vh; /* Înălțimea maximă a modalului */
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto; /* Permite scroll dacă conținutul depășește înălțimea modalului */

  /* Media queries pentru ecrane mai mici */
  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 85%;
    padding: 10px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 20px; /* Mărim distanța dintre butoane și inputuri */

  /* Media queries pentru ecrane mai mici */
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

export const HeaderButton = styled.button`
  background: transparent;
  color: ${props =>
    props.active ? '#ffffff' : '#ffffff'}; /* Textul rămâne alb */
  opacity: ${props =>
    props.active ? '1' : '0.3'}; /* Opacitate pentru butonul neactiv */
  border: none;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  cursor: pointer;
  margin-right: 20px; /* Marginea între butoane */
  transition: color 0.3s, opacity 0.3s;

  &:hover {
    color: #bedbb0;
    opacity: 1;
  }

  /* Media queries pentru ecrane mai mici */
  @media (max-width: 768px) {
    font-size: 16px;
    margin-right: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-right: 10px;
  }
`;

export const Input = styled.input`
  width: 364px;
  height: 49px;
  margin: 10px 0;
  border: 1px solid #bedbb0;
  border-radius: 4px;
  background: transparent;
  color: #ffffff; /* Culoare text input */
  font-family: 'Poppins', sans-serif;
  opacity: 0.3; /* Opacitate 30% pentru text */

  &::placeholder {
    color: #ffffff; /* Culoare text placeholder */
    opacity: 0.3; /* Opacitate 30% pentru placeholder */
  }
  /* Media queries pentru ecrane mai mici */
  @media (max-width: 768px) {
    max-width: 70%;
  }

  @media (max-width: 480px) {
    max-width: 60%;
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;
  padding-bottom: 20px;
  height: 49px;

  /* Media queries pentru ecrane mai mici */
  @media (max-width: 768px) {
    max-width: 70%;
  }

  @media (max-width: 480px) {
    max-width: 60%;
  }
`;

export const EyeIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #bedbb0;
  font-size: 18px;

  /* Media queries pentru ecrane mai mici */
  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  max-width: 364px;
  height: 49px;
  background: #bedbb0; /* Culoare buton */
  color: #000; /* Text negru */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  margin-top: 20px;
  margin-bottom: 30px;
  &:hover {
    background: #a7c3b2; /* Culoare mai deschisă la hover */
  }

  /* Media queries pentru ecrane mai mici */
  @media (max-width: 768px) {
    max-width: 70%;
    margin-top: 15px;
  }

  @media (max-width: 480px) {
    max-width: 60%;
    margin-top: 10px;
    padding-left: 0px;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Media queries pentru ecrane mai mici */
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  max-width: 364px;
  margin-bottom: 20px; /* Ajustează distanța între butoane și inputuri */
  margin-top: 20px; /* Ajustează distanța între butoane și marginea modalului */
  gap: 5px; /* Spațiu între butoanele Register și Login */
  margin-left: 50px;

  /* Media queries pentru ecrane mai mici */
  @media (max-width: 768px) {
    margin-bottom: 15px;
    margin-top: 15px;
    padding-left: 53px;
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
    margin-top: 10px;
    padding-left: 0px;
  }
`;

export const ModalTitle = styled.h2`
  color: #ffffff;
  margin-bottom: 20px;

  /* Media queries pentru ecrane mai mici */
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
`;

export const ErrorMessage = styled.p`
  color: #ff4d4d; /* Culoare pentru mesajul de eroare */
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  margin-top: 10px;
  width: 100%;
  max-width: 364px;

  /* Media queries pentru ecrane mai mici */
  @media (max-width: 768px) {
    font-size: 12px;
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    margin-top: 15px;
  }
`;
