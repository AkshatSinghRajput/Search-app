const router = require("express").Router();
const Ads = require("../Models/Ads");
const Company = require("../Models/Company");

router.post("/search", async (req, res) => {
  try {
    let { query } = req.body;
    let reg = new RegExp(`${query}`, "i");
    let data = await Ads.aggregate([
      {
        $lookup: {
          from: "companies",
          localField: "companyId",
          foreignField: "id",
          as: "data",
        },
      },
      {
        $unwind: "$data",
      },
      {
        $match: {
          $or: [
            { primaryText: { $regex: reg } },
            { headline: { $regex: reg } },
            { description: { $regex: reg } },
            { "data.name": { $regex: reg } },
          ],
        },
      },
    ]);
      res.status(200).json({success:true,data:data});
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: "Internal server error" + error });
  }
});

// router.post("/search", async (req, res) => {
//   try {
//     let { query } = req.body;
//     let q = query.toLowerCase();
//     let data = await Ads.aggregate([
//       {
//         $lookup: {
//           from: "companies",
//           localField: "companyId",
//           foreignField: "id",
//           as: "data",
//         },
//       },
//       {
//         $unwind: "$data",
//       },
//     ]);
//     if (data.length === 0) {
//       res.status(404).json({ success: false, error: "No Ads found" });
//     } else {
//       let filteredData = data.filter((element) => {
//         return (
//           element.data.name.toLowerCase().includes(q) ||
//           element.primaryText.toLowerCase().includes(q) ||
//           element.headline.toLowerCase().includes(q) ||
//           element.description.toLowerCase().includes(q)
//         );
//       });
//       if (filteredData.length === 0) {
//         res.status(200).json({ success: true, data: [] });
//       } else {
//         res.status(200).json({ success: true, data: filteredData });
//       }
//     }
//   } catch (error) {
// res
//   .status(500)
//   .json({ success: false, error: "Internal server error" + error });
//   }
// });

module.exports = router;
