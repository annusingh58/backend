import express from "express";
import morgan from "morgan";
import{kunal,Anu,Snhel,Poonam,Abhi} from './controllers/All-Controllers.js';
import router from './routes/UserRoutes.js';
import mongoose from "mongoose";

const app = express();


app.use(express.json());   //data to parse

app.use(morgan('dev'));// use()  middleware

 app.use('/api/v1',router);
//  mongoose.connect(process.env.MONGOB) .then(()=> console.log("db connected"))
//  .catch((err)=> console.log("db error=>",err));

 mongoose.connect('mongodb+srv://annusingh:anusingh58@cluster0.md93vry.mongodb.net/')

 .then(()=> console.log("db connected"))
 .catch((err)=> console.log("db error=>",err));

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

