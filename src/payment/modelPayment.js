const { query } = require("../helper/database")
const koneksi = require ("../helper/database")

module.exports ={
    getPayment :() =>{
        return new Promise ((resolve,reject) =>{
            koneksi.query('SELECT * FROM sys_client_invoice',(err,result) =>{
                console.log(result)
                if(err){
                    reject(err)
                }else{
                    resolve(result)
                }
            })
            console.log("jalan model payment")
        })
        
    },
    postPayment : (data)=>{
        return new Promise ((resolve,reject)=>{
            koneksi.query ("insert into sys_client_invoice set ? ", [data], (err,result) =>{
                if(err){
                    reject(err)
                }else{
                    resolve(result)
                }
            })
        })
    },
    putPayment : () => {
        const data = {...req}
        const querysearch = 'SELECT * FROM sys_client_invoice WHERE id_sys_client=?';
        const queryupdate = 'UPDATE sys_client_invoice set? WHERE id_sys_client=?';

        koneksi.query (querysearch, req. params.id,  (err,rows) =>{
            console.log (req.params.id);

            if (err){
                return res.status(500).json ({message : 'ada kesalahan',error : 'error'});
            }

            if(rows.length){
                koneksi.queryupdate (queryupdate, [req, params.id], (rows) =>{

                    if (rows.err){
                        return res.status (500).json({message : 'ada kesalahan',error :'error'});
                    }
                })
           }else{
            return res.status(404).json({message : 'data tidak ditemukan', succes : false}) 
           }
        })
    },
    deletePayment : (data) => {
        console.log("isinyaaa");
        console.log(data.id_sys_client);
        return new Promise ((resolve,reject) => {
            koneksi.query('DELETE FROM sys_client_invoice WHERE id = ?',[data.id_sys_client],(err,result) => {
                console.log (result)
                if(err){
                    reject(err)
                }else{
                    resolve(result)
                }
            })
        })
        // const querySearch = 'SELECT * FROM sys_client_invoice WHERE id_sys_client =?';
        // const queryDelete = 'DELETE * FROM sys_client_invoice WHERE id_sys_client =?';

        // koneksi.query(querySearch, req. params. id, (err,)=>{
        //     if (err) {
        //         return res.status(500).json({message : 'ada kesalahan', error : err});
        //     }

        //     if (length.rows){
        //         koneksi.query(queryDelete, req.params.id, (err,)=>{
        //             if(err){
        //                 return res.status(500).json({message : 'ada kesalahan', error : err})
        //             }
        //         })
        //     }else{
        //         return res.status(404).json({message :'data tidak ditemukan', succes :false})
        //     }
        // })
    }
}