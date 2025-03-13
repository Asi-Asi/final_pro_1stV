import { readFile, writeFile } from 'fs/promises';

export async function validateUser( username, password) {
    try {
        let users = await readFile('./data/users.json', 'utf-8');
        users = JSON.parse(users);
        
        // חיפוש המשתמש לפי שם משתמש בלבד
        let user = users.find(user => user.username === username);

        if (!user) {
            return { error: "User not found" }; // ❌ שם המשתמש לא קיים
        }

        if (user.password !== password) {
            return { error: "Incorrect password" }; // ❌ הסיסמה שגויה
        }

        return user; // ✅ החזרת המשתמש אם הכל תקין
    } catch (error) {
        return { error: "Error reading user data" }; // ❌ שגיאה בקריאת קובץ JSON
    }
}

export async function addNewUser(fullName, username, email, phone, password, profileImage=null) {
    let users = await readFile('./data/users.json', 'utf-8');
    users = JSON.parse(users);

    if (users.find(user => user.username === username )){
        return {success:false, message:"Username already exists"}
    }

    if (users.find(user => user.email === email )){
        return {success:false, message:"Email already exists"}
    }

    if (users.find(user => user.phone === phone )){
        return {success:false, message:"Phone number already exists"}
    }



    users.push({ fullName, username, email, phone, password, profileImage });
    await writeFile('./data/users.json', JSON.stringify(users));

    return {success:true};
}



export async function updateUser(userId, fullName, email, profileImage = null) {
    try {
        let users = await readFile('./data/users.json', 'utf-8');
        users = JSON.parse(users);

        // מציאת המשתמש לפי ID
        let userIndex = users.findIndex(user => user.username === userId); // לפי שם משתמש כי אין לנו ID ייחודי

        if (userIndex === -1) {
            return { success: false, message: "User not found" }; // ❌ אם המשתמש לא קיים
        }

        // עדכון רק שדות שמולאו
        if (fullName) users[userIndex].fullName = fullName;
        if (email) users[userIndex].email = email;
        if (profileImage) users[userIndex].profileImage = profileImage;

        // שמירת הנתונים המעודכנים בקובץ
        await writeFile('./data/users.json', JSON.stringify(users, null, 2));

        return { success: true, message: "User updated successfully", user: users[userIndex] };
    } catch (error) {
        console.error("Error updating user:", error);
        return { success: false, message: "Error updating user" };
    }
}