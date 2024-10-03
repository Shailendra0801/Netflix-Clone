import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase'; 
import { getAuth, onAuthStateChanged } from 'firebase/auth'; 

export default function useAuthListener() {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('authUser');
    return storedUser ? JSON.parse(storedUser) : null; 
  });

  const { firebase } = useContext(FirebaseContext); 

  useEffect(() => {
    if (!firebase) {
      console.error("Firebase is not initialized.");
      return; 
    }

    const auth = getAuth(firebase);

    const listener = onAuthStateChanged(auth, (authUser) => { 
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser)); 
        setUser(authUser); 
      } else {
        localStorage.removeItem('authUser'); 
        setUser(null); 
      }
    });

    return () => listener(); 
  }, [firebase]); 

  return { user };
}
