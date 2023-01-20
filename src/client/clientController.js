const clientModel = require("./modelClient")

module.exports = {
  getClient: (req, res) => {
      res.json({
        status: 200,
        message: "Berhasil",
      });
  },putClient: (req, res) => {
    res.json({
      status: 200,
      massage: "Berhasil ",
    });
  },postClient: (req, res) => {
    const data = req.body
    clientModel.postClient(data).then((result)=>{
      res.json({
        status: 200,
        massage: "Berhasil simpan data",
        data: result
      });
    }).catch((err)=>{
      res.json({
        status: 500,
        massage: "Gagal Simpan data",
        error: err
      });
    })
    
  },deleteClient: (req, res) => {
    res.json({
      status: 200,
      massage: "Berhasil Delete",
    });
  }
};
