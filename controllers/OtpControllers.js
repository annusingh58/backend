import { v4 as uuidv4} from 'uuid';
import Users from '../modals/Users.js';


// .................otp otpRegisteration......................

export const otpRegisteration =async (req,res) => {
     
 try{
    const { number, email } =req.body;
    if(!number) return res.send("Number is required");
    if(!email) return res.send("Email is required");
     console.log(number);

    var codeemail = uuidv4();  // var declare for email 

    var codenumber=uuidv4();   // var declare for number
    // console.log(code,"code here")
    // res.send(code);

    const isNumberpresent = await Users.find({number}).exec();
    console.log(isNumberpresent,"isNumberpresent")
     if(isNumberpresent.length) return res.send("number already used!")
    
     const isEmailpresent = await Users.find({email}).exec();
     if(!isEmailpresent) return res.send("email already used!")
    
    
    
    
     const user = new Users ({
        email ,
        number,
        emailotp: codeemail,
        numberotp:codenumber
    })
    await user.save();
    res.send("check your mobile no and gmail for otp");

    

    }catch(error){
        return res.send(error)
    }
}

// .................otpCheckForRegister...................

export const otpCheckForRegister = async(req,res) =>{
try{
   const{number ,email,otp} = req.body;

   if(!number) return res.send("Number is required")
   if(!email) return res.send("Email is required")
   if(!otp) return res.send("Otp is required")

   const user = await Users.find({email}).exec();
   if(!user.length) return res.send("user not found");

   if(user[0].emailotp== otp){

        return res.send("registeration done");

   }
   return res.send("otp  is wrong");
   
//    return res.send (user[0]);



} catch(error){
    return res.sen(error);
}


}




//   ..............otp --chk --for -number-only-registeration..............


export const otpCkeckForNumber = async (req, res) => {      
    try{
        const {number,otp} = req.body;
        if(!number) return res.send("number is required");
        if(!otp) return res.send("otp is required");

        const user = await Users.find({number}).exec();
        if(!user.length) return res.send("user not found");

        if(user[0].numberotp== otp){

            const user = await Users.findOneAndUpdate({ number }, { isNumberVerified: true }).exec();
            await user.save();
            // res.send("Check your mobile number  for OTP.")
         return res.send("Nummber is verified");

        }
        return res.send("otp wrong plz try again");

        // return res.send(user[0]);


    }catch(error){
        return res.send(error);
    }
}


// ...................otp -chk -for -email -only- registeration.........



export const otpCkeckForEmail = async (req, res) => {
    try{
        const {email,otp} = req.body;
        if(!email) return res.send("email is required");
        if(!otp) return res.send("otp is required");

        const user = await Users.find({email}).exec();
        if(!user.length) return res.send("user not found");

        if(user[0].emailotp== otp){
            const user = await Users.findOneAndUpdate({ email }, { isEmailVerified: true }).exec();
            await user.save();
            // res.send("Check your mobile number  for otp.")
         return res.send("Email is verified");

        }
        return res.send("otp wrong plz try again");

        // return res.send(user[0]);


    }catch(error){
        return res.send(error);
    }
}





// ...............LOGIN- OTP -CLASS-PRACTICE.............


export const otplogin = async (req, res) => {
try{
        const{email,number} = req.body;
        if(!email) return res.send("email is required");
        if(!number) return res.send("number is required")

        const user = await Users.find({email,number}).exec();
        if (!user) return res.send("user is not found")
        console.log(user[0],"user")
        // const userid =user[0]?._id;
        const code=uuidv4();
        const codenumber=uuidv4();

        const updateuser = await Users.findByIdAndUpdate({_id:user[0]._id}, {loginemailotp:code,loginnumberotp:codenumber}).exec();
         res.send ("check you email or number for otp")



} catch(error){

    res.send(error)
}

}

// .............OTP CHECK LOGIN CLASS.............


// export const otpchecklogin =async (req,res) => {
//     try{

//         const {otp,number ,email} = req.body;
        
//         if(!number) return res.send("number not found")
//         if(!email) return res.send("email not found")
//         if(!otp) return res.send("otp not found")

//         const user = await Users.find({number,email}).exec();
//         if (user[0].loginotp==otp){
//             return res.send("login successfull")
//         }
//         return res.send("otp is wrong");

//     } catch(error){
//         res.send(error)
//     }
// }



// ....................OTP-LOGIN-FOR-EMAIL..............................

export const otpCkeckForloginEmail = async (req, res) => {
    try{
        const {email,otp} = req.body;
        if(!email) return res.send("email is required");
        if(!otp) return res.send("otp is required");

        const user = await Users.find({email}).exec();
        if(!user.length) return res.send("user not found");

        if(user[0].loginemailotp== otp){
            const user = await Users.findOneAndUpdate({ email }, { isEmailVerified: true }).exec();
            await user.save();
            // res.send("Check your mobile number  for otp.")
         return res.send("Emaail is verified");

        }
        return res.send("otp wrong plz try again");

        // return res.send(user[0]);


    }catch(error){
        return res.send(error);
    }
}



// ....................LOGIN-OTP-FOR-NUMBER................

export const otpCkeckForloginNumber = async (req, res) => {
    try{
        const {number,otp} = req.body;
        if(!number) return res.send("Number is required");
        if(!otp) return res.send("otp is required");

        const user = await Users.find({number}).exec();
        if(!user.length) return res.send("user not found");

        if(user[0].loginnumberotp== otp){
            const user = await Users.findOneAndUpdate({ number }, { isnumberVerified: true }).exec();
            await user.save();
            // res.send("Check your mobile number  for otp.")
         return res.send("Number is verified");

        }
        return res.send("otp wrong plz try again");

        // return res.send(user[0]);


    }catch(error){
        return res.send(error);
    }
}


