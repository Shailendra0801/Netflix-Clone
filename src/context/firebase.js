import { createContext } from 'react';
import {app, auth, db } from '../lib/firebase.prod';

export const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={{firebase: app, auth, db }}>
      {children}
    </FirebaseContext.Provider>
  );
}; 