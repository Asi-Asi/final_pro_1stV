import { Image as ImageIcon } from "lucide-react";
import PropTypes from "prop-types";

export default function ProfileImageUpload({ profileBase64, setProfileImage }) {
    return (
        <div className="relative text-center">
            {profileBase64 ? (
                <img src={profileBase64} alt="Profile preview" className="w-28 h-28 rounded-full mx-auto border-4 border-[#FFD100] shadow-lg" />
            ) : (
                <ImageIcon size={50} className="mx-auto text-gray-400" />
            )}
            <input
                type="file"
                accept="image/*"
                onChange={(event) => setProfileImage(event.target.files[0])}
                className="mt-3 text-center w-full text-sm text-gray-300 cursor-pointer file:bg-[#FFD100] file:text-black file:font-semibold file:px-3 file:py-1.5 file:rounded-md hover:file:bg-[#FF5733] hover:file:text-white transition"
            />
        </div>
    );
}

ProfileImageUpload.propTypes = {
    profileBase64: PropTypes.string,
    setProfileImage: PropTypes.func.isRequired,
};
