import { uploadToCloud } from "../upload/upload.model.js";
import { validateUser, addNewUser, updateUser } from "./auth.model.js";



export async function login(req, res) {
    let { username, password } = req.body;

    let user = await validateUser(username, password);

    if (user && !user.error) {  // בדיקה האם המשתמש נמצא וללא שגיאה
        res.status(200).json({
            message: "Login successful",
            success: true,
            user: user
        });
    } else {
        res.status(401).json({
            message: user.error || "Login failed", // הצגת השגיאה שחזרה מ-validateUser
            success: false
        });
    }
}

export async function register(req, res) {

    try{
        
        let { fullName, email, phone, username, password } = req.body;
        
        //אם הועלתה תמונה של פרופיל
        let profileImageUrl = null;
        if(req.file) {
    
            let result = await uploadToCloud(req.file.path);
            profileImageUrl = result.secure_url;
    
        }
    
        let ans = await addNewUser(fullName, username, email, phone, password, profileImageUrl);
    
        if (!ans.success) {
            return res.status(400).json({ message: ans.message });
        }
    
        return res.status(201).json({ message: "User registered successfully" });
    }
    catch{
        return res.status(500).json({ message: "Internal Server Error" });

    }

}




export const updateUserController = async (req, res) => {

    console.log("📌 Request Body:", req.body); // ✅ הדפסה כדי לבדוק אם `username` מגיע לשרת

    try {
        const { username, fullName, email } = req.body; // מזהים משתמש לפי `username`
        const profileImage = req.file ? `/files/${req.file.filename}` : null; // קבלת תמונת הפרופיל אם הועלתה

        if (!username) {
            return res.status(400).json({ success: false, message: "Username is required" });
        }

        const result = await updateUser(username, fullName, email, profileImage);

        if (!result.success) {
            return res.status(404).json(result);
        }

        return res.status(200).json(result);
    } catch (error) {
        console.error("Error in updateUserController:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};