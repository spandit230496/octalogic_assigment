import { Sequelize, DataTypes } from "sequelize";
import {sequelize ,connectToDB} from "../conf/db_connection.js"; 

const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  created_at: {
  type: DataTypes.DATE,
  defaultValue: DataTypes.NOW,
},
updated_at: {
  type: DataTypes.DATE,
  defaultValue: DataTypes.NOW,
}
});

export default User;
