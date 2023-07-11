const jwt = require('jsonwebtoken');

 function auth (req , res , next){
const token = req.header('x-token');
if(!token) return res.status(401).send('Access denied. user is not authorized');
try{
    const decoded = jwt.verify(token,process.env.ACCESS_TOKEN);
    req.user = decoded;
    next()
}
catch (ex){
res.status(400).send('Invalid token.')
}
}

module.exports = auth ;