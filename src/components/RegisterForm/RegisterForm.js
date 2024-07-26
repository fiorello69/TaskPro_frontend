import { Container } from "components/WelcomePage/WelcomePage.styled";
import { 
    AuthContainer,
    AuthLink, 
    AuthLinkContainer, 
    ErrorMessageStyled, 
    AuthForm, 
    AuthButton, 
    AuthInput,
    BgAuth,
    AuthInputPassword} from "./RegisterForm.styled";
import {Formik, ErrorMessage } from 'formik';
// import { useState } from "react";
import * as Yup from 'yup';
import { register } from "../../redux/auth/authOperations";
import { useDispatch, useSelector } from "react-redux";
import { ShowPasswordButton, ShowPasswordImage } from "components/LoginForm/LoginFrom.styled";
import eyeClosed from '../../images/eye-closed.svg';
import eyeOpend from '../../images/eye-open.svg';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { selectIsLoading } from "../../redux/auth/authSelectors";

export const RegisterForm = ()=>{
  
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoading);
  
  const initialValues = {
        name: '',
        email: '',
        password: '',
  };

  const validationSchema = Yup.object({
    name: Yup
     .string()
     .required('Name is required')
      .matches(/^[a-zA-Z0-9._%+-]*$/, 
        'The name can only contain Latin characters, numbers and special characters: ., _, %, +, -')
     .min(2, 'Must have min 2 characters')
     .max(32, 'Must have max 32 characters'),
    email: Yup
     .string()
     .email('Invalid email format')
     .required('Email is required')
     .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}$/, 
       'The name can only contain latin characters, numbers and special characters: ., _, %, +, -'),
    password: Yup.string()
        .required('Password is required')
        .matches(/^[^\s]*$/, 'The password must not contain spaces')
        .min(8, 'Must have min 8 characters')
        .max(64, 'Must have max 64 characters'),
  
      });

  const onSubmit = (values, {resetForm}) => {
    try{
       const response = dispatch(
       register({
        name: values.name,
        email: values.email,
        password: values.password
      })
     ).unwrap();
     console.log('Success:', response);
     resetForm();

     if (isLoggedIn) {
        navigate('/home');
      } else {
        console.log('You are not logged in');
      }

     }catch(err){
      console.error('Error:', err)
    }

  }

  const handleShowPassword = ()=>{
    setShowPassword(!showPassword);
    console.log('butonul a fost apasat')
  }

  return (
<>
{/* <BgAuth> */}
  <Container>
   {/* <AuthLinkContainer>
      <AuthLink >
       Registration      
      </AuthLink>

      <AuthLink >
        Log In
      </AuthLink>
   </AuthLinkContainer> */}

   <AuthContainer>
     <Formik 
       initialValues={initialValues}
       validationSchema={validationSchema}
       onSubmit={onSubmit}
      >  

       {({handleSubmit})=>(
          <AuthForm onSubmit={handleSubmit}>
              
            <AuthInput
              name ="name" 
              type="text"
              placeholder="Enter your name"
              autoComplete="on"
            />

            <ErrorMessageStyled >
              <ErrorMessage component="span" name="name"/>
            </ErrorMessageStyled>

            <AuthInput
              name ="email" 
              type="email" 
              placeholder="Enter your email"
              autoComplete="on"
            />

            <ErrorMessageStyled >
               <ErrorMessage component="span" name="email"/>
            </ErrorMessageStyled>

           <AuthInputPassword>  
              <AuthInput
                name ="password" 
                type={showPassword ? 'text' : 'password'} 
                placeholder="Confirm a password"
                autoComplete="off"
              
              />
              <ShowPasswordButton 
              type="button" 
              onClick={handleShowPassword}>
                {showPassword ?  (
                  <ShowPasswordImage src={eyeClosed}/>
                ) : (
                  <ShowPasswordImage src={eyeOpend}/>
                )}
              </ShowPasswordButton>

            </AuthInputPassword>   

            <ErrorMessageStyled >
              <ErrorMessage component="span" name="password"/>
            </ErrorMessageStyled>

            <AuthButton type="submit">
               Register Now
            </AuthButton>

          </AuthForm>
       )}
      </Formik>    
   </AuthContainer>
 </Container>
{/* </BgAuth> */}

</>

    )
}