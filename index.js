
  

import express from"express";
const app = express();
app.listen(3000) //port
app.get('/hello' , function(req, res ){res.send("hello india")})

