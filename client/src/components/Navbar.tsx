import { Link } from "react-router-dom";

// MUI components
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Link to="/">
          <Typography variant="h2">Workout World</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
