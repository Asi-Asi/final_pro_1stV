import { useState } from "react";
import PropTypes from "prop-types";
import { Lock, Eye, EyeOff } from "lucide-react";
import { InputField } from "./InputField"; // שימוש באותו עיצוב

export function PasswordField({ id, label, value, setValue }) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <InputField
            id={id}
            label={label}
            type={showPassword ? "text" : "password"}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            leftIcon={<Lock size={18} className="text-gray-400" />} // 📌 שינוי ל-leftIcon
            rightIcon={ // 📌 שימוש ב-rightIcon עבור העין
                <span onClick={() => setShowPassword(!showPassword)} className="cursor-pointer">
                    {showPassword ? <EyeOff size={18} className="text-gray-400" /> : <Eye size={18} className="text-gray-400" />}
                </span>
            }
        />
    );
}

PasswordField.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
};
