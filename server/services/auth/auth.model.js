import { readFile, writeFile } from 'fs/promises';

export async function validateUser( username, password) {
    let users = await readFile('./data/users.json', 'utf-8');
    users = JSON.parse(users);
    let user = users.find(user => user.username === username && user.password === password);
    return user;
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