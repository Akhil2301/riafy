const Stock = require("../models/stockData");

const stockSearch = async (req, res) => {
  try {
    const stock = await Stock.find({
      Name: { $regex: "^" + req.query.sname, $options: "i" },
    });

    res.status(200).json(stock);
  } catch (err) {
    console.log(err);
  }
};

const stockById = async (req, res) => {
  try {
    const stockId = req.query.stockid;
    const result = await Stock.findById(stockId);
    res.status(200).json(result)
  } catch (err) {
    console.log(err);
  }
};

module.exports = { stockSearch, stockById };
