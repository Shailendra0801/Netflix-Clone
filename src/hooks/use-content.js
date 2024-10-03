import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    if (!firebase || !firebase.firestore) {
      console.error("Firebase is not initialized or Firestore is not available");
      return; // Early return if firebase or Firestore is not initialized
    }

    const fetchData = async () => {
      try {
        const snapshot = await firebase.firestore().collection(target).get();
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));

        setContent(allContent);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [firebase, target]); // Added target as a dependency

  return { [target]: content };
}
