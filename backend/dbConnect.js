const mongoose=require('mongoose');
const url='mongodb+srv://rishirajmotion123:jtD9rA57F0Y32Npo@cluster0.7ayv5.mongodb.net/';
mongoose.connect(url,{useUnifiedTopology: true});

const connection=mongoose.connection;

connection.on('error', err=>console.log(err));
connection.on('connected', ()=>console.log('MongoDB connected'));
