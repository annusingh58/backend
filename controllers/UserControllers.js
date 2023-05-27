import Users from "../modals/Users.js";

export const login =(req,res)=> {
    return res.send("hii from login..")
  }
//   export const register=(req,res)=>{
//       return res.send("hello register done");
//   }
export const register= async(req,res)=>{
    
 try {
    const {UserName,UserEmail,UserPassword,Userconfirmpassword}=req.body;
    if(!UserName) return res.send(" user Name is required")
    if(!UserEmail) return res.send(" user Email is required")
    if(!UserPassword) return res.send(" user Password is required")
    if(!Userconfirmpassword) return res.send(" user Confirm password is required")
    if(UserPassword.length <=8){
        return res.send("user password more then 8 digit")

    }
    if(Userconfirmpassword.length<=8){
        return res.send("user confirmpassword more then 8 digit")

    }
    if(UserPassword!=Userconfirmpassword){
        return res.send(" password and confirm password not match")
    }
    const response =await Users.find({email:UserEmail}).exec();
    console.log(response,"response hii")

    if(response.length){
        return res.send("email already registered")
    }
    const user= new Users({
        name:UserName,
        email :UserEmail,
        password:Userconfirmpassword
    });
    

    await user .save();
    return res.send("registeration successfully")

 }
 catch (error){

    return res.send (error)
 }
}