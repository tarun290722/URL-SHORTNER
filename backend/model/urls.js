const mongoose = require("mongoose");

const urlSchema = mongoose.Schema(
  {
    shortUrl: {
      type: String,
      require: true,
      unique: true,
    },
    redirectUrl: {
      type: String,
      require: true,
    },
    totalClicks: {
      type: Number,
      require: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);
const urlModel = mongoose.model("urls", urlSchema);
module.exports = urlModel;
