import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../config/firebase.config";
import { generateToken, removeToken } from "../utils/api";

export const AuthContext = createContext(null);

const FirebaseAuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  //providers
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  //create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //signin user
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //update
  const updateCurrentUser = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    });
  };

  //google
  const handleGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //github
  const handleGithubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  //signout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // console.log(user);

  //onAuthStateChanged
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };

      //generate token
      if (user) {
        (async () => {
          const result = await generateToken(loggedUser);
          // console.log("logged in", result);
          return result;
        })();
      } else {
        //remove token
        (async () => {
          const result = await removeToken(loggedUser);
          // console.log("logged out", result);
          return result;
        })();
      }
      // console.log(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, [user]);

  //
  const authInfo = {
    createUser,
    loading,
    setLoading,
    user,
    setUser,
    logOut,
    updateCurrentUser,
    logInUser,
    handleGoogleLogin,
    handleGithubLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
FirebaseAuthProvider.propTypes = {
  children: PropTypes.element,
};
export default FirebaseAuthProvider;
