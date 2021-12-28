const express =require("express");
const app=express();
const mongoose =require("mongoose");
const dotenv= require("dotenv")
const authRoute=require("./routes/auth")
const useRoute=require("./routes/users")
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");

dotenv.config()


mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });


// mongoose.connect(process.env.MONGO_URL,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
// });
// const MONGO_URL = process.env.MONGO_URL;
// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect(MONGO_URL).then(()=>{
//       console.log("DB connection succesful")
//   }).catch(err=>console.log(err));
// }

app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/users",useRoute);
app.use("/api/movies",movieRoute);
app.use("/api/lists", listRoute);



app.listen(8800,()=> {
    console.log("Backend server is running");
})