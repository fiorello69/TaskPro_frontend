// theme
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from '../constants/theme.js';
import { Outlet, useNavigate } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { selectUserTheme } from '../redux/auth/authSelectors.js';
import {
  getAllDashboards,
  getDashboardById,
} from '../redux/dashboards/dashboardsOperations.js';

import Header from '../components/Header/Header.js';
import { Container } from '../components/Container/Container.styled.js';
import { Sidebar } from '../components/Sidebar/Sidebar.js';
import Loader from '../components/AuthPage/Loader.js';

const Home = () => {
  const dispatch = useDispatch();
  const activeUserTheme = useSelector(selectUserTheme);
  const navigate = useNavigate();

  const selectThemeIndex = () => {
    if (activeUserTheme === 'dark') {
      return 0;
    } else if (activeUserTheme === 'light') {
      return 1;
    } else if (activeUserTheme === 'violet') {
      return 2;
    }
  };

  useEffect(() => {
    dispatch(getAllDashboards()).then(data => {
      if (data.payload.length === 0) {
        return;
      }

      dispatch(getDashboardById(data.payload[0]._id));
      navigate(`/home/${data.payload[0].name}`);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme[selectThemeIndex()]}>
      <Container>
        <Header />

        <Sidebar />

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
