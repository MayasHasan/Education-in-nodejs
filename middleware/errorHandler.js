const logger = require('../startup/logging')
const { constants } = require("../constants");

module.exports = function(err,req,res,next){
    logger.error(err.message,err);
    res.status(500).sendStatus('Something field')
}

