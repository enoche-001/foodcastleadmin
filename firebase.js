// ============================================
// SHOPNAIJA — FIREBASE CONFIG
// Shared between customer site and admin dashboard
// ============================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore }   from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth }        from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey:            "AIzaSyAAXngTIf3ALIHT9WYL-p28vKtD0PK5o8k",
  authDomain:        "shopnaija-5038f.firebaseapp.com",
  projectId:         "shopnaija-5038f",
  storageBucket:     "shopnaija-5038f.firebasestorage.app",
  messagingSenderId: "816824651598",
  appId:             "1:816824651598:web:2a518218b03050afd1d81f"
};

const app  = initializeApp(firebaseConfig);
const db   = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
