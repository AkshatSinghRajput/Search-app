const mongoose = require("mongoose");
const AdsSchema = new mongoose.Schema({
  companyId: {
    type: Number,
    required:true
  },
  primaryText: {
    type: String,
    required: true,
  },
  headline: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  CTA: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});
const Ads = mongoose.model("Ads", AdsSchema);
Ads.createIndexes();
module.exports = Ads;
