const urlModels = require("../model/urls");
const shortid = require("shortid");
const handleGetAllUrls = async (req, res) => {
  const userId = req.user.id;
  try {
    const allUrls = await urlModels.find({ userId: userId });
    return res.status(200).json({
      msg: "Data Recived Succesfully",
      data: allUrls,
      sucess: true,
    });
  } catch (err) {
    return res.status(500).json({
      msg: "Internal Server error",
      sucess: false,
    });
  }
};
const handleGetSingleUrl = async (req, res) => {
  try {
    const { id } = req.params;
    const Url = await urlModels.findOne({ shortUrl: id });
    let idOfUrl = Url.id;
    const totalClicksTillNow = Url.totalClicks;
    // totalClicksTillNow=
    let update = totalClicksTillNow + 1;
    await urlModels.findOneAndUpdate({ id:idOfUrl }, { totalClicks: update });
    return res.redirect(Url.redirectUrl);
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      msg: "Internal Server error",
      sucess: false,
    });
  }
};
const handleCreateUrl = async (req, res) => {
  try {
    const { url } = req.body;
    const userId = req.user.id;
    console.log(userId);

    if (url) {
      const shortUrl = shortid();
      const createdUrl = await urlModels.create({
        shortUrl: shortUrl,
        redirectUrl: url,
        userId,
        totalClicks: 0,
      });
      return res.status(200).json({
        msg: "User Created Succesfully",
        sucess: true,
        url: shortUrl,
      });
    } else if (!url) {
      return res.status(400).json({
        msg: "All Fields are required",
        sucess: false,
      });
    }
  } catch (err) {
    return res.status(500).json({
      msg: "Internal server error",
      sucess: false,
      err,
    });
  }
};

module.exports = {
  handleGetAllUrls,
  handleGetSingleUrl,
  handleCreateUrl,
};
