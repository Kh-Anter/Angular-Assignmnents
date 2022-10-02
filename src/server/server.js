const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const User=require('./mongo-models/users');
const mongoBD=require('mongoose');


mongoBD.connect( 'mongodb://localhost/test_mongo',{useNewUrlParser:true},(err)=>{
if(err)
 console.log(err);
else{
    console.log("connect to mogo");
}
});


const PORT=3000;
const app=express();
app.use(bodyParser.json());
app.use(cors());


app.get('/',function(req,res){
    res.send("Done");
})
app.listen(PORT,function(){
    console.log("server run on port 3000");
})

app.post('/signUp',function(req,res){
    User.find({email:(req.body.email)},(err,findRes)=>{
        if(err){
            console.log("error when find email");
            return;
        }
        if(findRes !=''){
            res.status(200).send({"result":"email already exist"})
            return;
        }else{
            const newUser=new User({
                username: req.body.userName,
                email:req.body.email,
                password:req.body.password,
                whereHearAboutUs:req.body.whereYouHear
            });
            newUser.save((err,res)=>{
                if(err){
                    console.log("an error in mongoDB");
                    return;
                }
                console.log("done");
            });
            res.status(200).send({"result":"done"})
        }
    })
})

app.post('/login',function(req,res){
    console.log()
    User.find({username:(req.body.username),password:(req.body.password)},(err,findRes)=>{
        if(err){
            console.log("error when find username");
            return;
        }
        if(findRes ==''){
            res.status(200).send({"result":"wrong username or password"})
            return;
        }else{
            res.status(200).send({"result":"done"})
        }
    })
})


