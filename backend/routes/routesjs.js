const express = require("express");


const router = express.Router();




let dataBase = {
    users: [{
        id: 1,
        username: "Andrija",
        password: "123"
    }],
    messages: [

    ]
};


router.post('/post1', (req, res, next) => {
    dataBase.users.push({
        id: Math.random(),
        username: req.body.username,
        password: req.body.password
    });


    const message = "Your registration is succsesfull!!";
    res.json(message);
})

router.post('/message', (req, res, next) => {
    dataBase.messages.push({
        id: Math.random(),
        name: req.body.name,
        email: req.body.email,
        textMessage: req.body.message
    });

    console.log(dataBase.messages);
    const message = "Your message is recived - Thank you very much";
    res.json(message);
})

router.post('/loging', (req, res, next) => {
    const userName = req.body.username;
    
    const userPassword = req.body.password;
    console.log(userName);
    let result;

    dataBase.users.forEach( user => {
        if(user.username === userName && user.password === userPassword){
            result =  true;
        }else{
            result = false;
        }
    })


    const message = result;
    console.log(dataBase.users);
    res.json(message);
})




router.get('/get1', (req, res, next) => {
    let users = [...dataBase.users]
    res.json(users);
})



module.exports = router;