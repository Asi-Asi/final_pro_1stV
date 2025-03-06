import { uploadToCloud } from "../upload/upload.model.js";
import { validateUser, addNewUser } from "./auth.model.js";

export async function login(req, res) {
    let { username, password } = req.body;

    let user = await validateUser(username, password);

    if (user) {
        res.status(200).json({
            message: 'Login successful',
            user
        });
    } else {
        res.status(401).json({
            message: 'Login failed'
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