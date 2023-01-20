const paymentModel =  require ("./modelPayment")

module.exports = {
    getPayment: (req, res, result) => {
      paymentModel.getPayment().then((result) =>{
        res.json({
            status: 200,
            message: "Berhasil tampilkan data",
            data: result
      })  
      
      });
    },putPayment: (req, res) => {
        res.json({
            status: 200,
            message: "berhasil update data"
        });

    },postPayment: (req, res) => {
        const data = req.body
        data.created_at = new Date()
        data.updated_at  = new Date()
        paymentModel.postPayment(data).then((result)=>{
        res.json({
            status: 200,
            message: "berhasil simpan data",
            data: result
          });
        }).catch ((err)=>{
            res.json({
                status:500,
                message: "gagal simpan data",
                error: err
            });
        }) 

    },deletePayment: (req, res, result) => {
        const data = req.body
        data.result
        paymentModel.deletePayment(data).then((result)=>{
            res.json({
                status: 200,
                message: "berhasil hapus data",
                data: result
            });
        })
    },
  };
  