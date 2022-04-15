const mongoose= require('mongoose');

const userSchema = mongoose.Schema({
    userName:{
        type:String,
    },
    Posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Post'
        }
    ]
})

const User = mongoose.model('User',userSchema);

module.exports = User;