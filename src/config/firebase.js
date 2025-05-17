// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCbYkdLwJzrEPhisYfABYz57_CKSE2Mx0",
  authDomain: "chat-app-gs-48821.firebaseapp.com",
  projectId: "chat-app-gs-48821",
  storageBucket: "chat-app-gs-48821.appspot.com",
  messagingSenderId: "1074137072012",
  appId: "1:1074137072012:web:4adba2d02a9aee258ad6a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      username: username.toLowerCase(),
      email,
      name: "",
      avatar: "",
      bio: "Hey, There I am using chat app",
      lastSeen: Date.now()
    });

    await setDoc(doc(db, "chats", user.uid), {
      chatData: []
    });

  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join)(" ");
  }
};

const login = async(email,password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error(error);
        toast.error(error.code.split('/')[1].split('-').join)(" ");
    }
}

const logout = async() => {
    try {
        await signOut(auth)
    } catch (error) {
        console.error(error);
        toast.error(error.code.split('/')[1].split('-').join)(" ");
    }
    
}
export { signup,login,logout,auth,db };
