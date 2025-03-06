const ProfilePage = () => {
    const userProfile = {
    username: 'John Doe',
    profilePicture: 'https://example.com/profile-picture.jpg',
    bio: 'This is my bio'
    };

    return (
    <div className="profile-container">
        <h1>{userProfile.username}</h1>
        <img src={userProfile.profilePicture} alt="Profile Picture" />
        <p>{userProfile.bio}</p>
    </div>
    );
};

export default ProfilePage;
