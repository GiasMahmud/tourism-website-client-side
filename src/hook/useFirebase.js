import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react';

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();

    const handleGooleSignIn = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider);

    };

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
                alert('dasasd')
            }).catch((error) => {

            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
                console.log(user)
            }
            else {
                setUser({})
            }
        })
    }, [])

    return {
        handleGooleSignIn,
        logOut,
        user

    }
};


export default useFirebase;