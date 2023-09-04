const mongoose = require('mongoose');

const register_newUser = new mongoose.Schema({
    referalled : {

    },
    my_referal_code : {

    },
    email : {

    },
    password : {

    },
    balance : {

    },
    isadmin :{
        
    }
    
});

const Users = mongoose.model('User', register_newUser);

module.exports = { Users};
