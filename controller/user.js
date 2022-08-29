const hello = function (req,res,next){
    res.json({
        name : "thantzinwin"
    })
}
function saveUser(req,res,next){
    console.log("user",req.body);
    let user = req.body;
    user.id = 500;
    res.status(200).send(user)
}
module.exports ={
    hello,
    saveUser
}
