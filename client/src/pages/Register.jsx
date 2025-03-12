import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TermsCheckbox from "@/components/auth/TermsCheckbox";

import ProfileImageUpload from "@/components/auth/ProfileImageUpload";

import {PasswordField} from "@/components/auth/PasswordField";
import { PhoneInput } from "@/components/auth/CustomInputs";
import { FullNameInput } from "@/components/auth/CustomInputs";
import { UsernameInput } from "@/components/auth/CustomInputs";
import { EmailInput } from "@/components/auth/CustomInputs";
import { Header } from "@/components/layout/Header_Login_signup";
import { Footer } from "@/components/layout/Footer";


export default function Register() {

    const navigate = useNavigate(); // 📌 יצירת הפונקציה להעברת משתמשים



    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [profileImage, setProfileImage] = useState(null);
    const [profileBase64, setProfileBase64] = useState(null);
    const [agreeTerms, setAgreeTerms] = useState(false);

    useEffect(() => {
        if (!profileImage) return;
        const fileReader = new FileReader();
        fileReader.onload = () => setProfileBase64(fileReader.result);
        fileReader.readAsDataURL(profileImage);
    }, [profileImage]);

    async function userRegister(event) {
        event.preventDefault();
        if (password !== confirmPassword) {
            toast.error("⚠️ Passwords do not match!", { position: "top-center", autoClose: 3000 });
            return;
        }
        try {
            let formData = new FormData();
            formData.append("fullName", fullName);
            formData.append("email", email);
            formData.append("phone", phone);
            formData.append("username", username);
            formData.append("password", password);
            if (profileImage) formData.append("file", profileImage);

            let response = await fetch("http://localhost:5500/api/auth/register", {
                method: "POST",
                body: formData,
            });

            let data = await response.json();
            if (!response.ok) {
                toast.error(`❌ ${data.message}`, { position: "top-center", autoClose: 3000 });
                return;
            }

            toast.success("✅ Successfully registered!", { position: "top-center", autoClose: 3000 });

            setTimeout(() => {
                navigate("/");
            }
            , 2000);{/*כדי שתופיע ההתראה  */}
            resetForm();{/*כדי שהטופס יתמחק */}


        } catch (error) {
            toast.error("❌ Error during registration, please try again!", { position: "top-center", autoClose: 3000 });
        }
    }

    function resetForm() {
        setProfileBase64(null);
        setProfileImage(null);
        setFullName("");
        setEmail("");
        setPhone("");
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        setAgreeTerms(false);
    }


    

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#232323] to-[#1A1A1A] text-white">
            {/* Header ממוקם בחלק העליון, מחוץ לאזור המרכזי */}
            <Header />
    
            <main className="flex-1 flex items-center justify-center relative overflow-hidden pt-16 pb-16">
                {/* עיגולים מטושטשים להוספת אפקט רקע */}
                <div className="absolute w-80 h-80 bg-[#FF5733] opacity-15 rounded-full blur-2xl top-16 right-24"></div>
                <div className="absolute w-80 h-80 bg-[#FFD100] opacity-15 rounded-full blur-2xl bottom-16 left-24"></div>
    
                <div className="bg-[#1E1E1E] p-8 rounded-xl shadow-2xl border-l-4 border-[#FFD100] w-full max-w-lg">
                    <h2 className="text-3xl font-extrabold mb-6 text-center text-[#F4F4F4] tracking-wide">
                        Create Your Account
                    </h2>
                    <form className="space-y-6" onSubmit={userRegister}>
                        <ProfileImageUpload profileBase64={profileBase64} setProfileImage={setProfileImage} />
    
                        <FullNameInput fullName={fullName} setFullName={setFullName} />
                        <UsernameInput username={username} setUsername={setUsername} />
                        <EmailInput email={email} setEmail={setEmail} />
                        <PhoneInput phone={phone} setPhone={setPhone} />
    
                        <PasswordField id="password" label="Password" value={password} setValue={setPassword} />
                        <PasswordField id="confirmPassword" label="Confirm Password" value={confirmPassword} setValue={setConfirmPassword} />
    
                        <TermsCheckbox agreeTerms={agreeTerms} setAgreeTerms={setAgreeTerms} />
    
                        {/* Signup Btn */}
                        <Button
                            type="submit"
                            className="w-full py-3 bg-[#FF5733] text-white font-bold rounded-md shadow-lg transition-all hover:bg-white hover:text-gray-600"
                            disabled={!agreeTerms}
                        >
                            Sign Up <ArrowRight className="ml-2" size={18} />
                        </Button>
    
                        {/* Clear Btn */}
                        <Button
                            type="reset"
                            onClick={resetForm}
                            className="w-full py-3 bg-gray-600 text-white font-bold rounded-md shadow-lg transition-all hover:bg-white hover:text-gray-600"
                        >
                            Clear
                        </Button>
                    </form>
                </div>
                <ToastContainer />
            </main>
            <Footer />
        </div>
    );
    
}
