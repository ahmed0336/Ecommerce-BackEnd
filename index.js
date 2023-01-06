const express = require('express');

const config =  require('./db/config')

const User = require('./db/User');

const Product =require('./db/Product')

const app = express();

const cors =require('cors')

app.use(express.json());

app.use(cors())

app.post("/register", async (req, res)=>{

    let user = new User(req.body)
    let result = await user.save()
    // toObject convert into object
    result =result.toObject()
    delete result.password


res.send(result);

})

app.post('/addproduct', async (req ,res)=>{

    // product jo hai wo humera schema mtlb table me ja rha hai
    // req.body ==>browser se data aae ga tou usko hum apne schema me model jo product me us me dalege
    let product = new Product(req.body)
    let result = await product.save();

    res.send(product)

})



app.post("/login", async (req,res) =>{
    // resp.send(req.body)
    // findeOne ==>ek data ke lye use hota hai
    
    if(req.body.email && req.body.password ){

        let user = await User.findOne(req.body).select("-password")
    // res.send(user)
    if(user){
        res.send(user)
    }
    else{
        res.send({result:"No User Found"})

    }

    }
    else{
        res.send({result:"No User Found"})
    }

    
})

app.get('/products', async (req,resp)=>{

   let products = await Product.find();
   
   if(products.length > 0){
     
    resp.send(products)

   }
   else{
    resp.send({result:"No Data Found"})
   }

})



app.listen(5000,()=>{
    console.log(`Server is running on 5000`)
})

// local ip is neccessary that is ==>127.0.0.1
// mongoose.connect("mongodb://127.0.0.1:27017/ahmed",{
    
    // useCreateIndex: true,
    // useNewUrlParser: true,
    // useUnifiedTopology: true,    

// }, (error) => {
//     if(!error) {
//         console.log("db connected")
//     } else {
//         console.log(error);
//     }
// })

// const connectDB = async () =>{
//     mongoose.connect('mongodb://127.0.0.1/ecommerce',
    
//     );

//     const productSchema = new mongoose.Schema({});

//     const product = mongoose.model('products',productSchema);
//     const data = await product.find();

//     console.log("database new==>",data)
// }
// connectDB();
// mongodb:
//localhost:27017



// app.get('/', (req,res)=>{

//     console.log(req.query)

//     res.send(`hello ${req.query.name} baloch`)
// })
// let PORT = 5000;
// app.listen(5000);
