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
    try {
        console.log("✅ register function called");
        console.log("📌 Request body:", req.body);
        console.log("📌 Uploaded file:", req.file);

        if (!req.file) {
            console.error("❌ No file uploaded");
            return res.status(400).json({ message: 'No file uploaded' });
        }

        let result = await uploadToCloud(req.file.path);
        console.log("☁️ File uploaded to Cloudinary:", result.secure_url);

        let ans = await addNewUser(req.body.username, req.body.password, result.secure_url);
        console.log("🆕 User added:", ans);

        if (!ans) {
            return res.status(400).json({ message: 'User already exists' });
        }

        res.status(201).json({ message: 'User registered successfully' });

    } catch (error) {
        console.error("❌ Error in register function:", error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}