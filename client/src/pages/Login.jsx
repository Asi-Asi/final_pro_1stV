import { useState, useEffect, useContext } from "react";
import { Header } from "../components/layout/Header_Login_signup";
import { Footer } from "@/components/layout/Footer";
import { WelcomeSection } from "@/components/auth/WelcomeSection";
import { LoginForm } from "@/components/auth/LoginForm";


import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";// ✅ import the UserContext








export default function LoginPage() { 


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext); // ✅ get the setUser function from the UserContext

  // בדיקה אם יש משתמש מחובר
  useEffect(() => {
    const user = localStorage.getItem("user"); 
    if (user) {
      navigate("/dashboard"); 
    }
  }, [navigate]);

  async function handleSubmit(event) {
    event.preventDefault();
  

    try {
      let response = await fetch('http://localhost:5500/api/auth/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, rememberMe }),
      });
      let data = await response.json();

      console.log(' Data ==> ', data);
      console.log(' Response ==> ', response);
      
      // אם הכניסה נכונה
      if ( data.success ) {
        localStorage.setItem("user", JSON.stringify(data.user)); 
        setUser(data.user); // ✅ עדכון המשתמש ב-Context
        navigate('/dashboard'); 
      }

    } catch (error) {
      console.log("Error: ", error);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#333533]">
      <Header />
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
          <WelcomeSection />
          <LoginForm
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            rememberMe={rememberMe}
            setRememberMe={setRememberMe}
            handleSubmit={handleSubmit}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
