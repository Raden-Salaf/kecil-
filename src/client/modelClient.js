const koneksi = require("../helper/database")

module.exports = {
    getClient : () =>{
        console.log("jalan model client")
    },
    postClient : (data) =>{
        return new Promise((resolve,reject)=>{
            koneksi.query("insert into sys_client set ?",[data], (err,result)=>{
                if(err){
                   reject(err)
                }else{
                    resolve(result)
                }
            })
        })
    }
}