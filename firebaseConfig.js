import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";

// Firebase configuration (Replace with your Firebase credentials)
const firebaseConfig = {
   apiKey: "AIzaSyCTUOvpG5h_IvzYpxOJttbk5rtH1rWBGUg",
  authDomain: "job-recommendation-porta-ad40b.firebaseapp.com",
  projectId: "job-recommendation-porta-ad40b",
  storageBucket: "job-recommendation-porta-ad40b.firebasestorage.app",
  messagingSenderId: "601061582940",
  appId: "1:601061582940:web:d60dfe9275529354f4de99",
  measurementId: "G-8HYE99KC8Z",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Export RecaptchaVerifier (Optional: Only if using Phone Auth)
export const recaptchaVerifier = () => {
  return new RecaptchaVerifier(auth, "recaptcha-container", {
    size: "invisible",
    callback: (response) => {
      console.log("reCAPTCHA verified");
    },
  });
};

export default app;
