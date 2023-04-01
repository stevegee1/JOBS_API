const {ReasonPhrases, StatusCodes}= require("http-status-codes")
class notFound extends Error{
    constructor(){
       super(ReasonPhrases.NOT_FOUND)
       this.statusCode= StatusCodes.NOT_FOUND

    }

}
module.exports= notFound