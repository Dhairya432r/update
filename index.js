
const mongoose = require("mongoose");
const dbUrl ="mongodb+srv://Brandzi:Dhairya432r,@cluster0.xoz1bl2.mongodb.net/";

const connectionparams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
mongoose
.connect(dbUrl,connectionparams).then(( )=>{
    console.info("connected to db")
})
.catch((e)=> {
    console.log("error",e);
});
