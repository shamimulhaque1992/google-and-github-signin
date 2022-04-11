import "./App.css";
import app from "./firebase.init";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const provider1 = new GoogleAuthProvider();
  const provider2 = new GithubAuthProvider();
  const handleSignin = () => {
    signInWithPopup(auth, provider1)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleSignout = () => {
    signOut(auth)
      .then((result) => {
        setUser({});
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGitHubSignIn = () => {
    signInWithPopup(auth, provider2)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      {user.uid ? (
        <button onClick={handleSignout}>GoogleSignOut</button>
      ) : (
        <>
          <button onClick={handleSignin}>GoogleSignIn</button>
          <button onClick={handleGitHubSignIn}>GitHubSignIn</button>
        </>
      )}
      <h1>{user.displayName}</h1>
      <h1>{user.email}</h1>
      <img src={user.photoURL} alt={user.photoURL}></img>
    </div>
  );
}

export default App;
