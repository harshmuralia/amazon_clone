
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
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
 export const emailSignIn = new signInWithEmailAndPassword()
// export default {db,auth,provider, firebaseConfig, firebase}

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        console.log(result);
        // firebase.auth().onAuthStateChanged(user => {
        //     if(user) {
        //       window.location = '/Users/harshmuralia/Desktop/Q/mock project - amazon clone/1/amazon-clone/src/views/user/Home.jsx';
        //     }
        //   });
  
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  export const signInWithGoogleSeller = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        console.log(result);
        // firebase.auth().onAuthStateChanged(user => {
        //     if(user) {
        //       window.location = '/Users/harshmuralia/Desktop/Q/mock project - amazon clone/1/amazon-clone/src/views/user/Home.jsx';
        //     }
        //   });
  
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
      })
      .catch((error) => {
        console.log(error);
      });
  };


// export const signInWithEmailPassword = () => {
//     var email = "test@example.com";
//     var password = "hunter2";
//     // [START auth_signin_password]
//     firebase.auth().signInWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // Signed in
//         var user = userCredential.user;

//       })
//       .catch((error) => {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//       });
//     // [END auth_signin_password]
//   }