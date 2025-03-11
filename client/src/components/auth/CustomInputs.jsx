import { InputField } from "./InputField";
import { User, Mail, Phone, Hash} from "lucide-react";
import PropTypes from "prop-types";






export function PhoneInput({ phone, setPhone }) {
    const handleChange = (e) => {
        let value = e.target.value.replace(/\D/g, ""); // מסיר תווים לא מספריים
        if (value.length > 10) value = value.slice(0, 10); // מגביל ל-10 תווים
        setPhone(value);
    };

    return (
        <InputField 
            id="phone"
            label="Phone Number"
            type="tel"
            value={phone}
            onChange={handleChange}
            inputMode="numeric"
            maxLength="10"
            leftIcon={<Phone size={18} className="text-gray-400" />} // 📌 העברת האייקון ישירות כאן
        />
    );
}

PhoneInput.propTypes = {
    phone: PropTypes.string.isRequired,
    setPhone: PropTypes.func.isRequired,
};




export function FullNameInput({ fullName, setFullName }) {
    const handleChange = (e) => {
        let value = e.target.value.replace(/[^a-zA-Zא-ת\s]/g, ""); // מאפשר רק אותיות ורווחים
        setFullName(value);
    };

    return (
        <InputField 
            id="fullName"
            label="Full Name"
            type="text"
            value={fullName}
            onChange={handleChange}
            leftIcon={<Hash size={18} className="text-gray-400" />} // 📌 העברת האייקון ישירות כאן
        />
    );
}

FullNameInput.propTypes = {
    fullName: PropTypes.string.isRequired,
    setFullName: PropTypes.func.isRequired,
};




export function UsernameInput({ username, setUsername }) {
    const handleChange = (e) => {
        let value = e.target.value.replace(/\s/g, ""); // מונע רווחים
        setUsername(value);
    };

    return (
        <InputField 
            id="username"
            label="Username"
            type="text"
            value={username}
            onChange={handleChange}
            leftIcon={<User size={18} className="text-gray-400" />} // 📌 העברת האייקון ישירות כאן

        />
    );
}

UsernameInput.propTypes = {
    username: PropTypes.string.isRequired,
    setUsername: PropTypes.func.isRequired,
};






export function EmailInput({ email, setEmail }) {
    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <InputField 
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={handleChange}
            leftIcon={<Mail size={18} className="text-gray-400" />} // 📌 העברת האייקון ישירות כאן
        />
    );
}

EmailInput.propTypes = {
    email: PropTypes.string.isRequired,
    setEmail: PropTypes.func.isRequired,
};