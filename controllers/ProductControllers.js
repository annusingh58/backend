import Products from "../modals/Products.js";

export const addProduct =async(req,res)=>{
    try{
        console.log(req.body)

         const{Name,Price, Image} =req.body;
    // console.log(Name, Price ,Image, "req.body")
    if(!Name) return res.send("Name is required")
    if(!Price) return res.send("Price is required")
       // condition is complusory
       //store product data into database
       //  const product =schema ,mongodb connection,mongodb predefined function
        // user ko ok true respond


        const product= new Products({
            name:Name,
            price:Price,
            Image:Image,
        }

        )
        console.log(product,"chehk here")
        await product.save();

        return res.send(product);


    // res.send({Name ,Price,Image})
    // return res.send({Name, Price, Image})
    // return res.send(product)  // object structureing

    } 
    catch(error){
        console.log(error);
    }
}





export const getAllProducts = async (req, res) => {
    try {
        const resposne = await Products.find({}).exec();
        if (resposne) {
            return res.send(resposne);
        } else {
            return res.send("No Products Found!");
        }
    } catch (error) {
        return res.send(error);
    }
}
