const mongoose=require('mongoose')
const User = require('./model/user.model');
const Post = require('./model/post.model');

mongoose.connect('mongodb://localhost:27017/populate_db').then((success)=>{
    console.log('Successfully connected to database');
}).catch((error)=>{
    console.log(error);
    process.exit(1);
});

async function abc(){
    const post = await Post.create({postName:"asdasda", postDescription:"asdasdas"}); 
    console.log(post)

    const user = await User.create({userName:"adsadsa"});
    const updatedUser = await User.updateOne({_id:user._id},{$push:{Posts:post._id}})

    console.log(updatedUser)
    return post   
}
// const post = Post.create({postName:"asdasda", postDescription:"asdasdas"});
// console.log(post)
 //abc();

 async function cde(){
     const response = await User.findOne({_id:'619b539b30441cf0257c0502'});
     console.log(response)
 
}


cde();

// const response = User.create({userName:'Shamoon',);

