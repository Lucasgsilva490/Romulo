import "../styles.css";
import {
  Box,
  TextField,
  styled,
  FormControl,
  Button,
  Alert,
  Typography,
  Grid,
  createTheme,
  ThemeProvider
} from "@mui/material/";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import SearchIcon from "@mui/icons-material/Search";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex"
      }}
    >
      <Box
        sx={{
          width: "25%",
          height: 20,
          display: "inline-block",
          backgroundColor: "blue"
        }}
      ></Box>

      <Box
        sx={{
          width: "75%",
          display: "flex",
          padding: 2,
          justifyContent: "center",
          gap: "92%",
          position: "fixed",
          left: 279,
          zIndex: 21,
          backgroundColor: "white"
        }}
      >
        <Box>
          <SearchIcon />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "55%"
          }}
        >
          <PeopleAltIcon />
          <NotificationsIcon />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          justifyContent: "center",
          width: "77.5%",
          position: "absolute",
          left: 279,
          top: 126.5
        }}
      >
        <Box
          sx={{
            backgroundColor: "red",
            width: "100%",
            height: 202.38,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 5
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              width: "20%",
              height: "30vh",
              borderRadius: 4
            }}
          ></Box>
          <Box
            sx={{
              backgroundColor: "white",
              width: "20%",
              height: "30vh",
              borderRadius: 4
            }}
          ></Box>
          <Box
            sx={{
              backgroundColor: "white",
              width: "20%",
              height: "30vh",
              borderRadius: 4
            }}
          ></Box>
          <Box
            sx={{
              backgroundColor: "white",
              width: "20%",
              height: "30vh",
              borderRadius: 4
            }}
          ></Box>
        </Box>
        <Box
          sx={{ backgroundColor: "yellow", width: "100%", height: 505.75 }}
        ></Box>
        <Box
          sx={{ backgroundColor: "green", width: "100%", height: 541.15 }}
        ></Box>
      </Box>
    </Box>
  );
};
export default Home;

