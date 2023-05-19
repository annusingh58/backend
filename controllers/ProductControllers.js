export const addProduct =(req,res)=>{
    try{
        console.log(req.body)
         // const{Name,Price, Image} =req.body;
    // console.log(req.body,"req.body")
    res.send(`hii add products`)
    } 
    catch(error){
        console.log(error);

    }
   

}