import { Sequelize, DataTypes } from "sequelize";
import {sequelize ,connectToDB} from "../conf/db_connection.js"; 

const VehicleType = sequelize.define("VehicleType", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  wheels: {
    type: DataTypes.INTEGER(255),
    allowNull: false,
  },
   type: {
  type: DataTypes.ENUM("bike", "car"),
  allowNull: false,
  },
  created_at: {
  type: DataTypes.DATE,
  defaultValue: DataTypes.NOW,
},
updated_at: {
  type: DataTypes.DATE,
  defaultValue: DataTypes.NOW,
},
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  }
});

export default VehicleType;
