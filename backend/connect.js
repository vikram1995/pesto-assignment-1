const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://obend:vikram47@cluster0.2frtk.mongodb.net/test";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const dbConnect = () => {
    return new Promise(async(resolve, reject) => {
        try {
            await client.connect();
            console.log("Connected correctly to Mongo DB server");
            resolve();
        } catch (err) {
            console.log(err.stack);
            reject();
        }
    })

}
module.exports.dbConnect = dbConnect
module.exports.client = client
