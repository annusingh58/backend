export const addProduct =(req,res)=>{
    try{
        // console.log(req.body)

         const{Name,Price, Image} =req.body;
    // console.log(Name, Price ,Image, "req.body")
    if(!Name) return res.send("Name is required")
    if(!Price) return res.send("Price is required")
       // condition is complusory
       //store product data into database
       //  const product =schema ,mongodb connection,mongodb predefined function
        // user ko ok true respond



    // res.send({Name ,Price,Image})
    return res.send({Name, Price, Image})
    return res.send(product)  // object structureing

    } 
    catch(error){
        console.log(error);

    }
   

}