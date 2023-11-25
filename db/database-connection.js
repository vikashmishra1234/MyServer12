const mongoose = require('mongoose');

  const  Connection = async()=>{
    try {
        const URI = 'mongodb+srv://MyServer:zTQUMIVwem8pZRjk@cluster0.totiye2.mongodb.net/?retryWrites=true&w=majority';
        await mongoose.connect(URI,{useNewUrlParser:true});
        console.log("connected successfully with the database");
    } catch (error) {
        console.log("can not connect to the data base");
        
    }

}

module.exports = Connection;

