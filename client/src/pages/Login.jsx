import { useState } from "react";
import { Header } from "../components/LoginComponents/Header";
import { WelcomeSection } from "@/components/LoginComponents/WelcomeSection";
import { LoginForm } from "@/components/LoginComponents/LoginForm";
import { Footer } from "@/components/Footer";

export default function LoginPage() { 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("username: ", username);
    console.log("Password: ", password);
    console.log("Remember Me: ", rememberMe);

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
