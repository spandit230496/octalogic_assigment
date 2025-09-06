import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../conf/db_connection.js"; 
import User from "./user.js";
import Vehicle from "./vehicle.js";

const Booking = sequelize.define("Booking", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  vehicle_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: true,
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
  tableName: "bookings",
  timestamps: false,
});

Booking.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });
Booking.belongsTo(Vehicle, { foreignKey: "vehicle_id", onDelete: "CASCADE" });

User.hasMany(Booking, { foreignKey: "user_id" });
Vehicle.hasMany(Booking, { foreignKey: "vehicle_id" });

export default Booking;
