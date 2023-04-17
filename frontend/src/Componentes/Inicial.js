'use strict'
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
import { useState } from "react";
import * as React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { json, Link, Router } from "react-router-dom";
import Axios from "axios";

function Inicial() {
  const [value, setValue] = React.useState("1");
  const handleTab = (event, newValue) => {
    setValue(newValue);
  };
  const MeuButton = styled(Button)(() => ({
    marginTop: 20,
    borderRadius: 15,
    height: 50,
    width: 517,
    fontFamily: "Inter"
  }));
  const [Email, setEmail] = useState("lucasgsilva@gmail.com");
  const [Senha, setSenha] = useState("1234567");

  const handleEma = (event) => {
    setEmail(event.target.value);
  };
  const handlePass = (event) => {
    setSenha(event.target.value);
  };

  const IsEmaFunc = () => {
    if (Email === "") {
      return true;
    } else {
      return false;
    }
  };
  const meuTema = createTheme({
    palette: {
      primary: {
        main: "#6366F1"
      }
    }
  });

  const isEmail = () => {
    if (/[a-z]@[a-z]/.test(Email)) {
      return true;
    } else {
      return false;
    }
  };
  const IsPassFunc = () => {
    if (Senha === "") {
      return true;
    } else {
      return false;
    }
  };

  const MeuLink = styled(Link)(() => ({
    textDecoration: "none",
    width: 517
  }));
  const MeuTypo = styled(Typography)(() => ({
    fontFamily:
      '"Inter", -apple-system, BMeuLinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"'
  }));

const sla = () => {
    Axios.post("http://localhost:3001/Login", {
      email: Email,
      password: Senha,
    }).then((response) => {
      if(response.data.rowsAffected[0] === 1){
        console.log('Login efetuado com sucesso')
        console.log(response.data.rowsAffected[0])
      }else{
        console.log('Email ou senha inválidos')
        console.log(response.data.rowsAffected[0])
      }
    });
}

  return (
    <Grid container>
      <Grid
        padding={6}
        paddingTop={10}
        display="flex"
        flexDirection="column"
        gap={5}
        md={6}
      >
        <Box display="flex" flexDirection="column" gap={1}>
          <MeuTypo variant="h4" fontWeight="bold">
            Login
          </MeuTypo>
          <MeuTypo>
            Don't have an account? <MeuLink to="/Registro">Register</MeuLink>
          </MeuTypo>
        </Box>

        <Box>
          <TabContext value={value}>
            <Box sx={{ borderColor: "blue" }}>
              <TabList onChange={handleTab}>
                <Tab
                  label="Email"
                  value="1"
                  sx={{
                    textTransform: "none"
                  }}
                />
                <Tab
                  label="Phone number"
                  value="2"
                  sx={{
                    textTransform: "none"
                  }}
                />
              </TabList>
            </Box>

            <TabPanel value="1">
              <Box>
                <Box position="relative" left={-30} top={-25}>
                    <FormControl>
                    {IsEmaFunc() || isEmail() === false ? (
                      <TextField
                        sx={{
                          width: 510,
                          border: "3px solid red",
                          borderRadius: 2,
                          background: "#ffffff",
                          display: "block",
                          marginTop: 3,
                          fontFamily: "Segoe UI"
                        }}
                        name="e"
                        value={Email}
                        onChange={handleEma}
                        
                        variant="filled"
                        fullWidth
                        label="Email adress"
                        error
                        InputProps={{
                          disableUnderline: true
                        }}
                      />
                    ) : (
                      <TextField
                        sx={{
                          width: 510,
                          border: "1px solid #A9A9A9",
                          borderRadius: 2,
                          background: "#ffffff",
                          display: "block",
                          marginTop: 3,
                          fontFamily: "Segoe UI"
                        }}
                        name="e"
                        value={Email}
                        onChange={handleEma}
                        variant="filled"
                        fullWidth
                        label="Email adress"
                        InputProps={{
                          disableUnderline: true
                        }}
                      />
                    )}
                    {IsEmaFunc() ? (
                      <MeuTypo
                        variant="p"
                        sx={{
                          fontFamily: "Segoe UI",
                          color: "red",
                          width: 136,
                          textAlign: "center"
                        }}
                      >
                        Email is required
                      </MeuTypo>
                    ) : isEmail() ? null : (
                      <MeuTypo
                        variant="p"
                        sx={{
                          fontFamily: "Segoe UI",
                          color: "red",
                          width: 170,
                          textAlign: "center"
                        }}
                      >
                        Must be a valid email
                      </MeuTypo>
                    )}

                    {IsPassFunc() ? (
                      <TextField
                        sx={{
                          width: 510,
                          border: "3px solid red",
                          borderRadius: 2,
                          background: "#ffffff",
                          display: "block",
                          marginTop: 3,
                          fontFamily: "Segoe UI"
                        }}
                        name="p"
                        value={Senha}
                        onChange={handlePass}
                        variant="filled"
                        fullWidth
                        error
                        label="Password"
                        InputProps={{
                          border: "1px solid #A9A9A9",
                          disableUnderline: true
                        }}
                      />
                    ) : (
                      <TextField
                        sx={{
                          width: 510,
                          border: "1px solid #A9A9A9",
                          borderRadius: 2,
                          background: "#ffffff",

                          display: "block",
                          marginTop: 3,
                          fontFamily: "Segoe UI"
                        }}
                        name="p"
                        value={Senha}
                        type="password"
                        onChange={handlePass}
                        variant="filled"
                        fullWidth
                        label="Password"
                        InputProps={{
                          border: "1px solid #A9A9A9",
                          disableUnderline: true
                        }}
                      />
                    )}
                    {IsPassFunc() ? (
                      <MeuTypo
                        variant="p"
                        sx={{
                          fontFamily: "Segoe UI",
                          color: "red",
                          width: 170,
                          textAlign: "center"
                        }}
                      >
                        Password is required
                      </MeuTypo>
                    ) : null}
                    <MeuTypo
                      variant="p"
                      marginTop={1}
                      sx={{
                        fontFamily: "sans-serif",
                        color: "#5A5A5A"
                      }}
                    >
                      Optionally you can skip.
                    </MeuTypo>
                      <ThemeProvider theme={meuTema}>
                        <MeuButton
                          type="submit"
                          variant="contained"
                          size="large"
                          color="primary"
                          onClick={sla}
                          sx={{
                            fontFamily:
                              '"Inter", -apple-system, BMeuLinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"'
                          }}
                        >
                          Continue
                        </MeuButton>
                      </ThemeProvider>
                    <MeuLink to="/Home">
                      <MeuButton
                        type="submit"
                        size="large"
                        sx={{
                          fontFamily:
                            '"Inter", -apple-system, BMeuLinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
                          fontWeight: "bold"
                        }}
                      >
                        Skip authentication
                      </MeuButton>
                    </MeuLink>
                  </FormControl>           
                
                </Box>
                <Alert
                  severity="info"
                  sx={{
                    backgroundColor: "white"
                  }}
                >
                  You can use{" "}
                  <Box sx={{ fontWeight: "bold", display: "inline" }}>
                    demo@devias.io
                  </Box>{" "}
                  and password{" "}
                  <Box sx={{ fontWeight: "bold", display: "inline" }}>
                    Password123!
                  </Box>
                </Alert>
              </Box>
            </TabPanel>
            <TabPanel value="2">
              <MeuTypo>Numero de telefone</MeuTypo>
            </TabPanel>
          </TabContext>
        </Box>
      </Grid>
      <Grid
        backgroundColor="#111927"
        color="white"
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2
        }}
      >
        <Typography variant="h4">
          Welcome to{" "}
          <Typography variant="h4" sx={{ display: "inline" }}>
            {" "}
            Devias Kit{" "}
          </Typography>{" "}
        </Typography>
        <Typography variant="h6">
          A professional kit that comes with ready-to-use MUI components.
        </Typography>
        <img
          src="https://raw.githubusercontent.com/devias-io/material-kit-react/f4a7ef6f5785580419f82bf0a0bf1a8722f70dd4/public/assets/auth-illustration.svg"
          alt="Mulher"
        />
      </Grid>
    </Grid>
  );
}
export default React.memo(Inicial);
