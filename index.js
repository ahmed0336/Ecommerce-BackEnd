const express = require('express');

const config =  require('./db/config')

const User = require('./db/User');
const app = express();

const cors =require('cors')

app.use(express.json());

app.use(cors())

app.post("/register", async (req, res)=>{

    let user = new User(req.body)
    let result = await user.save()

res.send(result);

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
