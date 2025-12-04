import React, { useState } from "react";

const ProfilePicUpload = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file first");
      return;
    }

    const formData = new FormData();
    formData.append("profilePic", file);

    try {
      const res = await fetch("https://skillswapbackend-f83q.onrender.com/api/auth/update-profile-pic", {
        method: "POST",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        body: formData
      });

      const data = await res.json();
      if (res.ok) {
        alert("Profile picture updated!");
        console.log("New profilePic URL:", data.profilePic);
        // ✅ trigger refresh in Profile.jsx
        if (onUploadSuccess) {
          onUploadSuccess();
        }
      } else {
        alert(data.message || "Upload failed");
      }
    } catch (err) {
      console.error("Upload error:", err);
      alert("Error uploading file");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button type="submit">Upload</button>
    </form>
  );
};

export default ProfilePicUpload;
