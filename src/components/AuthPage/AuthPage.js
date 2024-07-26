// un welcome wrapper in care sa avem un ToastContainer cu inauntru un modal cu o sectie de "navigatie" spre registration(/auth/register)si login(/auth/login)iar ca fallback loaderul
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import * as React from 'react';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { AuthLinkContainer, BgAuth } from 'components/RegisterForm/RegisterForm.styled';


export const AuthPage = () =>{
 const [value, setValue] = useState('1');

 const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BgAuth>
        <AuthLinkContainer>
    <Box sx={{ width: '100%' }}>
      <TabContext value={value}>
        <Box sx={{  borderColor: 'white', marginLeft: '9%', marginBottom: '20px' }}>
          <TabList onChange={handleChange} 
          TabIndicatorProps={{
            style: {
              display: 'none', 
            },
          }}
          >
            <Tab label="Register" value="1"
            sx={{
                color:'rgba(255, 255, 255, 0.3)',
                textTransform: 'none',
                fontFamily: 'Poppins',
                fontWeight: '500',
                fontSize: '18px',
                lineHeight: '27px',
                '&.Mui-selected':{
                    color: 'rgba(255, 255, 255, 1)',

                }
            }} />
            <Tab label="Log in" value="2"
             sx={{
                color:'rgba(255, 255, 255, 0.3)',
                textTransform: 'none',
                fontFamily: 'Poppins',
                fontWeight: '500',
                fontSize: '18px',
                lineHeight: '27px',
                '&.Mui-selected':{
                    color: 'rgba(255, 255, 255, 1)',
                }
            }} />
          </TabList>
        </Box>
        
        <TabPanel value="1"><RegisterForm/></TabPanel>
        <TabPanel value="2"><LoginForm/></TabPanel>
      </TabContext>
    </Box>
    </AuthLinkContainer>
    </BgAuth>
  );

}