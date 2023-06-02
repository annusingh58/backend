import { v4 as uuidv4} from 'uuid';
import Users from '../modals/Users.js';

export const otpRegisteration =async (req,res) => {
   
   
 try{
    const{ number,email } =req.body;
    if(!number) return res.send("Number is required");
    if(!email) return res.send("Email is required");
     

    var code = uuidv4();
    // console.log(code,"code here")
    // res.send(code);

    const isNumberpresent = await Users.find({number}).exec();
    console.log(isNumberpresent,"isNumberpresent")
     if(!isNumberpresent.length) return res.send("number already used!")
    
     const isEmailpresent = await Users.find({email}).exec();
     if(!isEmailpresent) return res.send("email already used!")
    
    
    
    
     const user = new Users ({
        email :email,
        number:number,
        otp :code
    })
    await user.save();
    res.send("check your mobile no and gmail for otp");

    

    }catch(error){
        return res.send(error)
    }
}

export const otpCheckForRegister = async(req,res) =>{
try{
   const{number ,email,otp} = req.body;

   if(!number) return res.send("Number is required")
   if(!email) return res.send("Email is required")
   if(!otp) return res.send("Otp is required")

   const user = await Users.find({email}).exec();
   if(!user.length) return res.send("user not found");

   if(user[0].otp== otp){

        return res.send("registeration done");

   }
   return res.send("otp  is wrong");
   
//    return res.send (user[0]);



} catch(error){
    return res.sen(error);
}


}