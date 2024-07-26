import { Field } from "formik"
// import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const BgAuth = styled.div`
width: 100vw;
height: 100vh;
background-color:rgba(21, 21, 21, 1);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const BigContainer = styled.div`

`

export const AuthContainer = styled.div`
width: 300px;
/* padding:0 7px 0 7px; */
/* margin:0 auto 0 auto; */
 display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center; 
 /* background-color: chocolate;  */

@media only screen and (min-width: 375px){
width:335px;
}

@media only screen and (min-width: 768px){
width:400px;
}
`


export const  AuthLinkContainer = styled.div`
 /* display:flex; */

 /* flex-direction: row;
 position:relative; */
 /* left:0; */
 /* background-color: blueviolet; */
 /* gap:14px;
 margin-bottom:40px; */
 /* margin-left:auto;
 margin-right:auto; */
 /* width: 300px; */

 @media only screen and (min-width: 375px){
  /* width:287px */
 }

 @media only screen and (min-width: 768px){
  /* padding: 10px; */
  /* width:424px; */
 }
`
export const AuthLink =  styled.a`
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: rgba(255, 255, 255, 0.3);
    cursor: pointer;

    &:active,
    &:hover{
        color: rgba(255, 255, 255, 1);
    }
   
    
`

export const AuthForm = styled.form`
 width:300px;
 /* background-color: rosybrown; */
 margin-bottom: 20px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items:center;

 @media only screen and (min-width: 375px){
  width: 335px;
 }

 @media only screen and (min-width: 768px){
  width:424px;
 }
 @media only screen and (min-width: 1280px){


 }

`
export const AuthInput = styled(Field)`
width: 280px;
height: 49px;
border: 1px solid rgba(190, 219, 176, 1);
border-radius: 8px;
padding-left: 18px;
padding-right: 18px;
padding-block: 0;

filter: drop-shadow( 0px 4px 16px 0px rgba(22, 22, 22, 0.08));
background-color: rgba(31, 31, 31, 1);
color: white;
box-sizing: border-box;
font-weight: 400;
font-size: 14px;
line-height: 21px;
font-family: 'Poppins';


 @media only screen and (min-width: 375px){
  width:287px
 }
 
 @media only screen and (min-width: 768px){
  width:344px;
 }
  &::placeholder{
    color: rgba(255, 255, 255, 1);
  
  } 



`
export const AuthInputPassword = styled.div`
position: relative;
`

export const ErrorMessageStyled = styled.span`
  display: block;
  color: #ff868d;
  font-size: 14px;
  font-family: 'Poppins';
  margin-top: 2px;
  margin-bottom:20px;
  @media only screen and (min-width: 768px) {
    margin-bottom:32px;
  }

`

export const AuthButton = styled.button`
 width: 280px;
 height: 49px;
 border-radius: 8px;
 background-color: rgba(190, 219, 176, 1);
 font-size: 14px;
 font-weight: 500px;
 line-height: 21px;
 font-family: 'Poppins';
 text-align: center;

 @media only screen and (min-width: 375px){
   width:287px
 }

 @media only screen and (min-width: 768px){
 width:344px;
 }


  /* &:focus-visible,
  &:hover{
    background-color: none;
    filter: drop-shadow(0 4px 10px rgba(190, 219, 176, 0.5));
  } */

`