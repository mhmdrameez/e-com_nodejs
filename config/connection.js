const mongoClient= require("mongodb").MongoClient
const state={
    db:null
}
module.exports.connect=(done)=>{
    const url="mongodb+srv://node-comm:1@cluster0.u4cfz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    const dbname="shop"

    mongoClient.connect(url,{useUnifiedTopology: true,
        useNewUrlParser: true,},(err,data)=>{
        if(err) return done(err)
        state.db=data.db(dbname)
        done()
    })

    
}

module.exports.get=function(){
    return state.db
}