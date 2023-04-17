import { Box } from "@mui/material/";
import { Route, Routes } from "react-router-dom";
import { Navigate } from 'react-router-dom';

import Inicial from "./Inicial";
import Home from "./Home";
import Registro from "./Registro";
function Login() {
  return (
    <Box>
      <Routes>
        <Route element={<Inicial />} path="/" exact />
        <Route element={<Home />} path="/Home" />
        <Route element={<Registro />} path="/Registro" />
      </Routes>
    </Box>
  );
}

export default Login
