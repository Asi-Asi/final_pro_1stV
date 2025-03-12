import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useState, useRef } from "react";

export default function ProfileEditModal() {
  const [open, setOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("/default-avatar.png");
  const fileInputRef = useRef(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className="inline-block rounded-full bg-[#FF5733] px-3 py-1 text-sm font-medium text-white hover:bg-[#FF5733]/30 transition"
      >
        Edit
      </button>

      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              border: "2px solid #FF5733",
              padding: "20px",
              bgcolor: "background.paper",
              borderRadius: "12px",
              boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
              minWidth: "350px",
              maxWidth: "400px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "15px",
              width: "100%",
            }}
          >
            {/* Title */}
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#FF5733" }}>
              Edit Profile Details
            </Typography>
            <Typography variant="body1" sx={{ color: "gray", textAlign: "center" }}>
              Update your personal details and profile picture below.
            </Typography>

            {/* Avatar */}
            <Avatar src={image} sx={{ width: 100, height: 100, border: "3px solid #FF5733" }} />

            {/* File upload button */}
            <Button
              variant="outlined"
              color="primary"
              onClick={() => fileInputRef.current.click()}
              sx={{
                textTransform: "none",
                fontSize: "0.9rem",
                fontWeight: "bold",
                borderColor: "#FF5733",
                color: "#FF5733",
                "&:hover": { backgroundColor: "#FF5733", color: "#fff" },
                padding: "8px 16px",
              }}
            >
              Choose Profile Picture
            </Button>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              style={{ display: "none" }}
            />

            {/* Input fields */}
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              size="medium"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              sx={{ fontSize: "1rem" }}
            />

            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              size="medium"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ fontSize: "1rem" }}
            />

            {/* Save & Close buttons */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FF5733",
                fontSize: "1rem",
                fontWeight: "bold",
                padding: "10px 20px",
                "&:hover": { backgroundColor: "#cc4629" },
              }}
              fullWidth
            >
              Save Changes
            </Button>

            <Button onClick={handleClose} sx={{ marginTop: "10px", color: "gray" }}>
              Cancel
            </Button>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
