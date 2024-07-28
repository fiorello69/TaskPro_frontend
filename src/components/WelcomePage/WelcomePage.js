import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import iconImage from '../../images/welcome-icon.png';
import sprite from '../../images/sprite.svg';
import {
  WelcomeWrapper,
  WelcomeIcon,
  WelcomeLogo,
  WelcomeLogoIcon,
  WelcomeContainer,
  WelcomeDescription,
  WelcomeLoginButton,
  GoogleLoginButton,
  WelcomeRegisterButton,
  WelcomeLogoTitle,
} from './WelcomePage.styled';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleSuccess = async response => {
    try {
      const res = await fetch(
        'https://taskpro-118463d10954.herokuapp.com/auth/google/callback',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id_token: response.credential,
          }),
        }
      );

      const data = await res.json();
      if (res.ok) {
        sessionStorage.setItem('accessToken', data.accessToken);
        sessionStorage.setItem('refreshToken', data.refreshToken);
        navigate('/current');
      } else {
        console.error('Not signed in:', data.message);
      }
    } catch (error) {
      console.error('Autentification error:', error);
    }
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <WelcomeWrapper>
        <WelcomeContainer>
          <WelcomeIcon src={iconImage} alt="man with macbook" />
          <WelcomeLogo>
            <WelcomeLogoIcon>
              <use href={sprite + '#icon-logo'} />
            </WelcomeLogoIcon>
            <WelcomeLogoTitle>Task Pro</WelcomeLogoTitle>
          </WelcomeLogo>
          <WelcomeDescription>
            Supercharge your productivity and take control of your tasks with
            Task Pro - Don't wait, start achieving your goals now!
          </WelcomeDescription>
          <WelcomeRegisterButton to="/auth/register">
            Registration
          </WelcomeRegisterButton>
          <WelcomeLoginButton to="/auth/login">Log In</WelcomeLoginButton>
          <GoogleLogin
            onSuccess={handleSuccess}
            onFailure={error => console.error('Login Failed:', error)}
            render={renderProps => (
              <GoogleLoginButton
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <img
                  src="/images/google-icon.svg"
                  alt="Google Icon"
                  width="20"
                  height="20"
                />
                Sign in with Google
              </GoogleLoginButton>
            )}
          />
        </WelcomeContainer>
      </WelcomeWrapper>
    </GoogleOAuthProvider>
  );
};

export default WelcomePage;
