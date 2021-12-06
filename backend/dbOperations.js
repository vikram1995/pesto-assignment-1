const client = require('./connect').client;
const dbName = "test";
const db = client.db(dbName);
const col = db.collection("users");

const insertData = async (operation, data) => {
    new Promise(async (resolve, rejects) => {
        try {
            console.log("Connected correctly to server");
            const p = await col[operation](data);
            console.log("Data Inserted")
            resolve("data inserted");
        } catch (error) {
            console.log(error)
            rejects(error);
        }
    })
}

const findData = async (filter = {}) => {
    return new Promise(async (resolve, rejects) => {
        try {
            console.log("Connected correctly to server");
            col.find().toArray(function (err, result) {
                if (err) throw err;
                resolve(result);
            });
        } catch (error) {
            rejects(error);
        } 
    })

}

module.exports.insertData = insertData
module.exports.findData = findData