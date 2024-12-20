const jwt = require("jsonwebtoken");
const User = require("../models/User");

const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader.split(" ")[1];

    jwt.verify(token, "xt3lYKNjKw9sDhGCPcbXMkf_0GIQ93z3Dt9C1tnxvSFkFE14yIZD7fdVUUlyuC_SoZvn1ifU01dAl_ji0Oosgw", async (err, decoded) => {
      if (err) return res.status(401).json("Not Authenticated.");
      req.user = await User.findById(decoded.id);

      next();
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = verifyToken;
