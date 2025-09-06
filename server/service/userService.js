import User from "../schema/user.js";

export const getUser = async (req, res) => {
  try {
    const { first_name, last_name } = req.query;

    const user = await User.findOne({
      where: { first_name, last_name },
      attributes:["first_name","last_name"]
    });

    if (user) {
      return res.status(200).json({
        success: true,
        data: user,
        message: "User fetched successfully",
      });
    } else {
      return res.status(404).json({
        success: false,
        data: null,
        message: "User not found",
      });
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    return res.status(500).json({
      success: false,
      data: null,
      message: "Internal server error",
    });
  }
};

export const getAllUser = async (req, res) => {
  try {

    const user = await User.findAll({
      attributes:["first_name","last_name","id"]
    });

    if (user) {
      return res.status(200).json({
        success: true,
        data: user,
        message: "Users fetched successfully",
      });
    } else {
      return res.status(404).json({
        success: false,
        data: null,
        message: "Users not found",
      });
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    return res.status(500).json({
      success: false,
      data: null,
      message: "Internal server error",
    });
  }
};

export default getUser;
