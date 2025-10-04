import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendSignInLinkToEmail, signInWithEmailLink } 
from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Registration
document.getElementById("registerBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  const repass = document.getElementById("repassword").value;

  if (pass !== repass) {
    alert("Passwords do not match!");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      name: name,
      email: email,
      createdAt: new Date()
    });

    alert("✅ Registration successful!");
  } catch (error) {
    alert(error.message);
  }
});

// Email+Password Login
document.getElementById("loginBtn").addEventListener("click", async () => {
  const email = document.getElementById("loginEmail").value;
  const pass = document.getElementById("loginPassword").value;

  try {
    await signInWithEmailAndPassword(auth, email, pass);
    alert("✅ Login successful!");
  } catch (error) {
    alert(error.message);
  }
});

// OTP Login
document.getElementById("sendOtpBtn").addEventListener("click", async () => {
  const email = document.getElementById("otpEmail").value;

  const actionCodeSettings = {
    url: window.location.href,
    handleCodeInApp: true,
  };

  try {
    await sendSignInLinkToEmail(auth, email, actionCodeSettings);
    window.localStorage.setItem("emailForSignIn", email);
    alert("📩 OTP link sent to your email!");
  } catch (error) {
    alert(error.message);
  }
});

document.getElementById("verifyOtpBtn").addEventListener("click", async () => {
  const email = window.localStorage.getItem("emailForSignIn");
  if (signInWithEmailLink(auth, email, window.location.href)) {
    alert("✅ OTP Login successful!");
  } else {
    alert("❌ Invalid OTP link!");
  }
});

