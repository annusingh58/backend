import express from "express";
import morgan from "morgan";
import{kunal,Anu,Snhel,Poonam,Abhi} from './controllers/All-Controllers.js';
import router from './routes/UserRoutes.js';

const app = express();



app.use(morgan('dev'));// use()  middleware

 app.use('/api/v1',router);

 app.use(express.json());   //data to parse
// app.get('/hello' , function(req, res ){res.send("hello india")}) 

// app.get('/anu',function(){console.log("inside awdix function..")}); 
//pass two parameter first parameter is path and second is function

// app.get('/anu',function(req,res){res.send("anu function..")});
// app.get('/snhel',function(req,res){res.send("snhel function..")});
// app.get('/poonam',function(req,res){res.send("poonam function..")});
// app.get('/abhi',function(req,res){res.send("abhi function..")});
// app.get('/kunal',function(req,res){res.send("kunal function..")});

app.get('/kunal',kunal);
app.get('/anu', Anu);
app.get('/poonam', Poonam);
app.get('/abhi' ,Abhi);
app.get('/snhel' , Snhel)


// app.post();
// app.patch();
// app.put();
// app.delete();


app.listen(8000,()=> console.log("working on port 8000")) //port  use for run

