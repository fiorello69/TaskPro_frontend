import styled from "styled-components";
// import backroundGrid from '../images/bg inicio.png'

export const Backround = styled.div`
background:linear-gradient(0deg, rgba(190, 219, 176, 1) 0%, rgba(196, 196, 196, 0) 100% );
width: 100vw;
height: 100vh;

position: relative;
display:flex;
align-items:center;
justify-content:center;
/* background-color: cadetblue; */

`
export const ImageIcon = styled.img`
width: 124px;
height: 124px;
@media only screen and (min-width: 768px){
width: 162px;
height: 162px;
 }



`
export const HomeContainer = styled.div`
display: flex;
justify-content:center;
align-items: center;
flex-direction:column;
margin: 0 auto 0 auto;
width: 300px;
/* height: 438px; */
 /* background-color:tomato;  */
 @media only screen and (min-width: 375px){
 width: 335px;  
}
@media only screen and (min-width: 768px){
 width: 473px;  
}

`
export const TaskProContainer = styled.div`
display: flex;
justify-content:center;
align-items: center;
margin-top: 24px;
/* background-color: blue; */
`
export const Icon = styled.img`
 width: 40px;
 height: 40px;
 margin: auto 14px auto 0;

 @media only screen and (min-width: 768px){
  width: 48px;
  height: 48px;

 }



`
export const Container = styled.div`
/* background-color:violet; */
`
export const TextLogo = styled.span`
font-family: 'Poppins';
font-weight:600;
font-size: 28px;
line-height:42px;
color:rgba(22, 22, 22, 1);
 @media only screen and (min-width: 768px){

 font-size: 40px;
 line-height:60px; 

 }
 


`

export const Paragraf = styled.p`
font-weight: 400;
font-size: 14px;
line-height: 18px;
font-family: 'Poppins';
text-align:center;
margin-block-start: 24px;
margin-block-end: 24px;
width: 300px;
/* background-color:gold; */
height: 54px;
 @media only screen and (min-width: 375px){
 width: 335px;


 }
 @media only screen and (min-width: 768px){
 width: 473px;
 height: 36px;


 }
`
export const RegisterButton = styled.button`
 width:300px;
 height: 49px;
 border-radius: 8px;
 background-color: rgba(22, 22, 22, 1);
 color: rgba(255, 255, 255, 1);
 font-weight: 500;
 font-size:14px;
 line-height:21px;
 margin-bottom: 14px;
 font-family: 'Poppins';

 @media only screen and (min-width: 375px){
 width: 335px;
 }
 @media only screen and (min-width: 768px){
 width: 344px;
 }


`
export const RedirectLink = styled.a`
font-weight: 500;
font-size: 14px;
line-height: 21px;
font-family: 'Poppins';
color: rgba(22, 22, 22, 1);

 &:hover{
 width:300px;
 height: 49px;
 border-radius: 8px;
 background-color: rgba(22, 22, 22, 1);
 color: rgba(255, 255, 255, 1);
 font-weight: 500;
 font-size:14px;
 line-height:21px;
 font-family: 'Poppins';
 text-align:center;
 align-items: center;

 @media only screen and (min-width: 375px){
 width: 335px;
 }
 }

`
