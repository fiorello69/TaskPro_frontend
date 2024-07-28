// un welcome wrapper in care sa avem un ToastContainer cu inauntru un modal cu o sectie de "navigatie" spre registration(/auth/register)si login(/auth/login)iar ca fallback loaderul
import { Outlet, useParams } from 'react-router-dom';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import RegisterForm from '../../components/RegisterForm/RegisterForm.js';
import LoginForm from '../../components/LoginForm/LoginForm.js';
import {
  Modal,
  ModalNav,
  ModalNavItem,
  WelcomeWrapper,
} from './AuthPage.styled';
import Loader from './Loader.js';

const AuthPage = () => {
  const { id } = useParams();

  return (
    <WelcomeWrapper>
      <ToastContainer />
      <Modal>
        <ModalNav>
          <ModalNavItem to="/auth/register">Registration</ModalNavItem>
          <ModalNavItem to="/auth/login">Log In</ModalNavItem>
        </ModalNav>

        {id === 'login' && <LoginForm />}
        {id === 'register' && <RegisterForm />}

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Modal>
    </WelcomeWrapper>
  );
};

export default AuthPage;
