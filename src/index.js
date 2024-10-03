import React from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { db } from './lib/firebase.prod'; 
import { FirebaseProvider } from './context/firebase';


const rootElement = document.getElementById('root');

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <FirebaseProvider> 
      <GlobalStyles />
      <App />
    </FirebaseProvider>
  </React.StrictMode>,
);
