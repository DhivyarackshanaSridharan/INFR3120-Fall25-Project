import React, { useEffect, useState } from "react";
import ProfilePicUpload from "../components/ProfilePicUpload";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://skillswapbackend-f83q.onrender.com/api/auth/me", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
      .then(res => res.json())
      .then(data => setUser(data.user))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Profile</h2>

      {user?.profilePic ? (
        <img
          src={`https://skillswapbackend-f83q.onrender.com${user.profilePic}`}
          alt="Profile"
          style={{ width: "120px", borderRadius: "50%", marginBottom: "10px" }}
        />
      ) : (
        <p>No profile picture yet</p>
      )}

      <p><strong>Name:</strong> {user?.name}</p>
      <p><strong>Email:</strong> {user?.email}</p>

      {/* Upload form with refresh callback */}
      <ProfilePicUpload onUploadSuccess={() => {
        fetch("https://skillswapbackend-f83q.onrender.com/api/auth/me", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        })
          .then(res => res.json())
          .then(data => setUser(data.user))
          .catch(err => console.error(err));
      }} />
    </div>
  );
};

export default Profile;
