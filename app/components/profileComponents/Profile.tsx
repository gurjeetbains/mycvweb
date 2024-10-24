import React from 'react';

const Profile: React.FC = () => {
    return (
        <div className="profile-container">
            <img
                src="/profile.png"
                alt="Profile"
                className="profile-image"
                data-testid="profile-image"
            />
            <h1 className="profile-name">Gurjeet Singh Bains</h1>
            <p className="profile-header">
                Test Architect | Automation Engineer with 10+ Years in Web & Mobile | CI/CD Expert | Full Stack Developer | Udemy Instructor
            </p>
        </div>
    );
};

export default Profile;