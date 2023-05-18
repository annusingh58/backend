// console.log("hello")
// console.log("hello aasff")
// console.log("hiiii annu")
  

import express from"express";
const app = express();
app.listen(3000); //port

app.get('/hello' , function(req, res ){res.send("hello india")})