import { useState, useEffect, useContext } from "react";
import { Header } from "../components/layout/Header_Login_signup";
import { Footer } from "@/components/layout/Footer";
import { WelcomeSection } from "@/components/auth/WelcomeSection";
import { LoginForm } from "@/components/auth/LoginForm";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // חובה אם לא הוספת

import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext"; // ✅ קבלת ה-Context של המשתמש

export default function LoginPage() { 

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext); // ✅ עדכון המשתמש ב-Context

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
      
      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.user)); 
        setUser(data.user); // ✅ עדכון המשתמש ב-Context

        toast.success("✅ Login successful! Redirecting...", {
          position: "top-center",
          autoClose: 3000,
        });

        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      } else {
        // בדיקה אם השגיאה קשורה לכך שאין משתמש כזה
        if (data.message && data.message.toLowerCase().includes("user not found")) {
          toast.warning("⚠️ Username does not exist!", {
            position: "top-center",
            autoClose: 3000,
          });
        } else {
          toast.error(`❌ ${data.message || "Invalid username or password!"}`, {
            position: "top-center",
            autoClose: 3000,
          });
        }
      }
    } catch (error) {
      toast.error("❌ Server error! Please try again later.", {
        position: "top-center",
        autoClose: 3000,
      });
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
      <ToastContainer /> 
    </div>
  );
}
