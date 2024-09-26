const express = require("express");
const port = 6666;
const app = express();

app.get("/", (req, res ) =>{
  return res.json({ message: "ola mundo"})
});

app.listen(port, ()=>{
  console.log(`Aplicação rodando na porta ${port}`)
} )



