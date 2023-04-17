const express = require("express");
const app = express();
const sql = require("mssql");
const cors = require("cors");

const sqlConfig = {
  user: "usergtswiftmais",
  password: "SwiftMais",
  database: "dbGTSwiftMais",
  server: "10.255.4.20",
  options: {
    encrypt: false,
  },
};

app.use(express.json());
app.use(cors());

sql.connect(sqlConfig, (err) => {
    if (err) {
      console.log("Erro ao conectar com o banco:", err);
    } else {
      console.log("Conexão bem-sucedida");
    }
  });

  app.post("/Register", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    try {
      // Consultar o banco de dados
      const request = new sql.Request();
      request.input('emailParam', sql.NVarChar, email);
      request.input('passwordParam', sql.NVarChar, password);
      const result = await request.query('INSERT INTO usuarios (email, password) VALUES (@emailParam, @passwordParam)');
      console.log(result)
      
      // Enviar resposta com o resultado da consulta
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  });



app.post("/Login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    try {
      // Consultar o banco de dados
      const request = new sql.Request();
      request.input('emailParam', sql.NVarChar, email);
      request.input('passwordParam', sql.NVarChar, password);
      const result = await request.query('SELECT email, password FROM usuarios WHERE email = @emailParam AND password = @passwordParam');
      console.log(result.rowsAffected)

      // Enviar resposta com o resultado da consulta
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  });

app.listen(3001, () => console.log("Rodando na porta 3001"));