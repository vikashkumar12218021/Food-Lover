import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Rating,
  Alert,
} from "@mui/material";

const Overview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const menu = location.state; // Retrieve passed menu item
  const [orderPlaced, setOrderPlaced] = useState(false); // State for order status

  if (!menu) {
    // Redirect back to Menu if no menu data is passed
    navigate("/");
    return null;
  }

  const handleAddToCart = () => {
    // Simulate order placement
    setOrderPlaced(true);
    setTimeout(() => {
      setOrderPlaced(false);
      navigate("/"); // Redirect to menu after a delay
    }, 2000); // Display the message for 2 seconds
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 4,
        gap: 3,
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      {orderPlaced && (
        <Alert severity="success" sx={{ mb: 3, width: "80%" }}>
          Thanks for ordering! Redirecting to menu...
        </Alert>
      )}

      <Card sx={{ maxWidth: "600px", width: "2500px" }}>
        <CardMedia
          component="img"
          height="400"
          image={menu.image}
          alt={menu.name}
          sx={{ objectFit: "cover" }}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {menu.name}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {menu.description}
          </Typography>
          <Typography variant="h6" color="primary" sx={{ fontWeight: "bold" }}>
            Price: ₹{menu.price || "Not Available"}
          </Typography>
          <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
            <Typography variant="body1" sx={{ mr: 1 }}>
              Rating:
            </Typography>
            <Rating value={menu.rating || 4.5} readOnly />
          </Box>
        </CardContent>
      </Card>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button variant="contained" color="primary" onClick={() => navigate("/")}>
          Back to Menu
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default Overview;
