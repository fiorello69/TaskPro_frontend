import { 
    Backround, 
    Container, 
    HomeContainer, 
    Icon, 
    ImageIcon, 
    Paragraf, 
    RedirectLink, 
    RegisterButton, 
    TaskProContainer, 
    TextLogo 
} from "./WelcomePage.styled";
import image from "../../images/welcome-icon.png";
import icon from "../../images/logo.png";

 
 export const WelcomePage = ()=>{
    return(
        <>
        <Backround>
           <HomeContainer>
               <Container>
                <ImageIcon src={image}/>
                
               </Container>
             
           <TaskProContainer>
   
             <Icon src = {icon}/>
             <TextLogo>Task Pro</TextLogo>
   
           </TaskProContainer>
           <Paragraf>Supercharge your productivity and take control of your tasks with Task Pro - Don't wait, start achieving your goals now!</Paragraf>
           <RegisterButton>Registration</RegisterButton>
           <RedirectLink >Log In</RedirectLink>
           </HomeContainer>
        
   
        </Backround>
        
        </>
   
       )
  }