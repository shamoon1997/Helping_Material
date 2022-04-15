const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    postName:{
        type:String,
        required:true,
    },
    postDescription:{
        type:String,
        required:true,
    }
});

const Post = mongoose.model('Post',postSchema);

module.exports=Post;