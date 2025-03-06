import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify"; // Import ToastContainer


import { ArrowRight, Eye, EyeOff, User, Mail, Lock, Phone, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";




export default function Register() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [profileImage, setProfileImage] = useState(null);
    const [profileBase64, setProfileBase64] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [agreeTerms, setAgreeTerms] = useState(false);

    // הפונקציה שקוראת את התמונה וממירה אותה ל-Base64
    useEffect(() => {
        if (!profileImage) return;

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setProfileBase64(fileReader.result);
        };
        fileReader.readAsDataURL(profileImage);
    }, [profileImage]);

    async function userRegister(event) {
        event.preventDefault();



      // בדיקה אם הסיסמאות תואמות
        if (password !== confirmPassword) {
            toast.error("⚠️ Passwords do not match!", { position: "top-center"});
            return;
        }
    
        try {
            let formData = new FormData();
            formData.append("fullName", fullName);
            formData.append("email", email);
            formData.append("phone", phone);
            formData.append("username", username);
            formData.append("password", password);

            if (profileImage) {
                formData.append("file", profileImage);
            }

            //שליחת הנתונים לשרת 
            
            let response = await fetch("http://localhost:5500/api/auth/register", {
                method: "POST",
                body: formData,
            });


            let data = await response.json();

            if (!response.ok) {
                toast.error(`❌ ${data.message}`, { position: "top-center", autoClose: 3000});
                return;
            }

            toast.success("✅ Successfully registered!", { position: "top-center", autoClose: 3000 });
            resetForm();


        } catch (error) {
            toast.error("❌ Error during registration, please try again!", { position: "top-center", autoClose: 3000});
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
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#232323] to-[#1A1A1A] text-white relative overflow-hidden pt-16 pb-16">
            <div className="absolute w-80 h-80 bg-[#FFD100] opacity-5 rounded-full blur-3xl top-16 left-24"></div>
            <div className="absolute w-80 h-80 bg-[#FF5733] opacity-5 rounded-full blur-3xl bottom-16 right-24"></div>

            <div className="bg-[#1E1E1E] p-8 rounded-xl shadow-2xl border-l-4 border-[#FFD100] w-full max-w-lg">
                <h2 className="text-3xl font-extrabold mb-6 text-center text-[#F4F4F4] tracking-wide">Create Your Account</h2>
                <form className="space-y-6" onSubmit={userRegister}>
                    <div className="relative text-center">
                        {profileBase64 ? (
                            <img src={profileBase64} alt="Profile preview" className="w-28 h-28 rounded-full mx-auto border-4 border-[#FFD100] shadow-lg" />
                        ) : (
                            <ImageIcon size={50} className="mx-auto text-gray-400" />
                        )}
                        <input type="file" accept="image/*" onChange={(event) => setProfileImage(event.target.files[0])} className="mt-3 text-center w-full text-sm text-gray-300 cursor-pointer file:bg-[#FFD100] file:text-black file:font-semibold file:px-3 file:py-1.5 file:rounded-md hover:file:bg-[#FF5733] hover:file:text-white transition" />
                    </div>

                    {[{ icon: User, placeholder: "Full Name", state: fullName, setState: setFullName },
                    { icon: User, placeholder: "Username", state: username, setState: setUsername },
                    { icon: Mail, placeholder: "Email", state: email, setState: setEmail },
                    { icon: Phone, placeholder: "Phone Number", state: phone, setState: setPhone }].map((field, index) => (
                        <div key={index} className="relative">
                            <field.icon size={18} className="absolute left-3 top-3 text-gray-400" />
                            <Input type="text" placeholder={field.placeholder} value={field.state} onChange={(event) => field.setState(event.target.value)} className="pl-10 bg-[#333533] border-0 text-white border-b border-[#F4F4F4] focus:ring-2 focus:ring-[#FFD100] transition-all" required />
                        </div>
                    ))}

                    {[{ label: "Password", state: password, setState: setPassword, showState: showPassword, setShowState: setShowPassword },
                    { label: "Confirm Password", state: confirmPassword, setState: setConfirmPassword, showState: showConfirmPassword, setShowState: setShowConfirmPassword }].map((field, index) => (
                        <div key={index} className="relative">
                            <Lock size={18} className="absolute left-3 top-3 text-gray-400" />
                            <Input type={field.showState ? "text" : "password"} placeholder={field.label} value={field.state} onChange={(event) => field.setState(event.target.value)} className="pl-10 bg-[#333533] border-0 text-white border-b border-[#F4F4F4] focus:ring-2 focus:ring-[#FFD100] transition-all" required />
                            <div className="absolute inset-y-0 right-3 flex items-center cursor-pointer" onClick={() => field.setShowState(!field.showState)}>
                                {field.showState ? <EyeOff size={18} className="text-gray-400" /> : <Eye size={18} className="text-gray-400" />}
                            </div>
                        </div>
                    ))}

                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" checked={agreeTerms} onCheckedChange={(checked) => setAgreeTerms(checked)} className="rounded-sm" required />
                        <label htmlFor="terms" className="text-sm text-[#F4F4F4]">I agree to the <span className="text-[#00A896]">Terms</span> and <span className="text-[#00A896]">Privacy Policy</span></label>
                    </div>

                    <Button type="submit" className="w-full py-3 bg-[#FF5733] text-white font-bold rounded-md shadow-lg transition-all hover:bg-white hover:text-gray-600" disabled={!agreeTerms}>Sign Up <ArrowRight className="ml-2" size={18} /></Button>
                    <Button type="reset" onClick={resetForm} className="w-full py-3 bg-gray-600 text-white font-bold rounded-md shadow-lg transition-all hover:bg-white hover:text-gray-600">Clear</Button>
                </form>
            </div>
            <ToastContainer />

        </div>
    );
}
