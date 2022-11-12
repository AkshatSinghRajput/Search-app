const mongoose = require("mongoose");
const CompanySchema = new mongoose.Schema({
  id:{
    type: Number,
    required:true
  },
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});
const Company = mongoose.model("Company", CompanySchema);
Company.createIndexes();
module.exports = Company;