
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyArp0thtIpFXw5Adxsh8TKkf1u-XoGmFVc",
  authDomain: "clone-c4e38.firebaseapp.com",
  projectId: "clone-c4e38",
  storageBucket: "clone-c4e38.appspot.com",
  messagingSenderId: "437916884482",
  appId: "1:437916884482:web:2491a0bf62bebe19f3911b",
  measurementId: "G-2TX39BSEGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
 export const auth = getAuth(app)
 export const provider = new GoogleAuthProvider()
// export default {db,auth,provider, firebaseConfig, firebase}

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
        console.log(result);
        // firebase.auth().onAuthStateChanged(user => {
        //     if(user) {
        //       window.location = '/Users/harshmuralia/Desktop/Q/mock project - amazon clone/1/amazon-clone/src/views/user/Home.jsx';
        //     }
        //   });
  
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
      })
      .catch((error) => {
        console.log(error);
      });
  };