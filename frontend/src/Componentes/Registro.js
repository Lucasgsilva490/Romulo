import {
  Box,
  TextField,
  styled,
  Button,
  Typography,
  Grid,
  createTheme,
  ThemeProvider
} from "@mui/material/";
import { useState } from "react";
import * as React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const Registro = () => {
  const [Nome, setNome] = useState("");
  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");

  const handleNom = (event) => {
    setNome(event.target.value);
  };
  const handleEma = (event) => {
    setEmail(event.target.value);
  };
  const handlePass = (event) => {
    setSenha(event.target.value);
  };

  const isNomeNull = () => {
    if (Nome === "") {
      return true;
    } else {
      return false;
    }
  };
  const isEmailNull = () => {
    if (Email === "") {
      return true;
    } else {
      return false;
    }
  };
  const NoIsEmail = () => {
    if (/[a-z]@[a-z]/.test(Email)) {
      return false;
    } else {
      return true;
    }
  };

  const IsPassNull = () => {
    if (Senha === "") {
      return true;
    } else {
      return false;
    }
  };

  const MeuTypo = styled(Typography)(() => ({
    fontFamily:
      '"Inter", -apple-system, BMeuLinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"'
  }));

  const MeuLink = styled(Link)(() => ({
    textDecoration: "none",
    width: 517
  }));

  const meuTema = createTheme({
    palette: {
      primary: {
        main: "#6366F1"
      }
    }
  });

  const MeuButton = styled(Button)(() => ({
    marginTop: 20,
    borderRadius: 15,
    height: 50,
    width: 517,
    fontFamily: "Inter"
  }));

  const handleFocus = (event) => {
    console.log(event.target.width);
  };

const sla2 = () => {

  Axios.post("http://localhost:3001/Register", {
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
      <Grid md={6}>
        <Box padding={8} pt={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1
            }}
          >
            <MeuTypo variant="h4" fontWeight="bold">
              Register
            </MeuTypo>
            <MeuTypo>
              Already have an account? <MeuLink to="/">Log in</MeuLink>
            </MeuTypo>
          </Box>
          <Box>
            {isNomeNull() ? (
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
                value={Nome}
                onChange={handleNom}
                variant="filled"
                fullWidth
                error
                label="Name"
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
                value={Nome}
                onChange={handleNom}
                onFocus={handleFocus}
                variant="filled"
                fullWidth
                label="Name"
                InputProps={{
                  border: "1px solid #A9A9A9",
                  disableUnderline: true
                }}
              />
            )}

            {isNomeNull() ? (
              <MeuTypo
                variant="p"
                sx={{
                  fontFamily: "Segoe UI",
                  color: "red",
                  marginLeft: 2,
                  textAlign: "center"
                }}
              >
                Name is required
              </MeuTypo>
            ) : null}
            {isEmailNull() || NoIsEmail() ? (
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
                value={Email}
                onChange={handleEma}
                variant="filled"
                fullWidth
                error
                label="Email Adress"
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
                value={Email}
                onChange={handleEma}
                variant="filled"
                fullWidth
                label="Email"
                InputProps={{
                  border: "1px solid #A9A9A9",
                  disableUnderline: true
                }}
              />
            )}
            {isEmailNull() ? (
              <MeuTypo
                variant="p"
                sx={{
                  fontFamily: "Segoe UI",
                  color: "red",
                  marginLeft: 2,
                  textAlign: "center"
                }}
              >
                Email is required
              </MeuTypo>
            ) : NoIsEmail() ? (
              <MeuTypo
                variant="p"
                sx={{
                  fontFamily: "Segoe UI",
                  color: "red",
                  marginLeft: 2,
                  textAlign: "center"
                }}
              >
                Must be a valid email
              </MeuTypo>
            ) : null}
            {IsPassNull() ? (
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
                type="password"
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
                value={Senha}
                onChange={handlePass}
                variant="filled"
                type="password"
                fullWidth
                label="Senha"
                InputProps={{
                  border: "1px solid #A9A9A9",
                  disableUnderline: true
                }}
              />
            )}
            {IsPassNull() ? (
              <MeuTypo
                variant="p"
                sx={{
                  fontFamily: "Segoe UI",
                  color: "red",
                  marginLeft: 2,
                  textAlign: "center"
                }}
              >
                Password is required
              </MeuTypo>
            ) : null}

            <MeuLink>
              <ThemeProvider theme={meuTema}>
                <MeuButton
                  type="submit"
                  variant="contained"
                  size="large"
                  color="primary"
                  onClick={sla2}
                  sx={{
                    fontFamily:
                      '"Inter", -apple-system, BMeuLinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"'
                  }}
                >
                  Continue
                </MeuButton>
              </ThemeProvider>
            </MeuLink>
          </Box>
        </Box>
      </Grid>
      <Grid
        backgroundColor="#111927"
        color="white"
        p={2}
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
          <Typography variant="h4" sx={{ display: "inline", color: "#3FC79A" }}>
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
};
export default Registro;
