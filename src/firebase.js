import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAe9aK0roVVKCybr47HJx6HHnhPTty6AIA",
  authDomain: "start-2ff0c.firebaseapp.com",
  projectId: "start-2ff0c",
  storageBucket: "start-2ff0c.appspot.com",
  messagingSenderId: "96858718317",
  appId: "1:96858718317:web:25fc1ee7d8ae016788bf64",
  measurementId: "G-T7NE9XCQ3G"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);