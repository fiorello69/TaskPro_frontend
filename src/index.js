import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { App } from 'App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'modern-normalize';
import './i18n';

const root = document.getElementById('root');

createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/TaskPro_frontend">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
