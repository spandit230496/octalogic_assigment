import { Sequelize, DataTypes } from "sequelize";
import {sequelize ,connectToDB} from "../conf/db_connection.js"; 
import VehicleType from "./vehicleType.js";

const Vehicle = sequelize.define("Vehicle", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: "vehicles",
  timestamps: false,
});

Vehicle.belongsTo(VehicleType, { foreignKey: "vehicle_type_id", onDelete: "CASCADE" });
VehicleType.hasMany(Vehicle, { foreignKey: "vehicle_type_id" });

export default Vehicle;
