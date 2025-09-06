import { sequelize } from "../conf/db_connection.js";
import Vehicle from "../schema/vehicle.js";
import VehicleType from "../schema/vehicleType.js";
import User from "../schema/user.js";

async function seed() {
  try {
    await sequelize.sync({ force: true });

    const carTypes = await VehicleType.bulkCreate([
      { name: "Hatchback" ,type:"car",wheels:4},
      { name: "SUV" ,type:"car",wheels:4},
      { name: "Sedan",type:"car" ,wheels:4},
    ]);

   const bikeTypes = await VehicleType.bulkCreate([
  { name: "Cruiser" ,type:"bike",wheels:2},
  { name: "Sports",type:"bike",wheels:2 },
]);


    await Vehicle.bulkCreate([
      { name: "Swift", vehicle_type_id: carTypes[0].id },
      { name: "i20", vehicle_type_id: carTypes[0].id },
      { name: "Creta", vehicle_type_id: carTypes[1].id },
      { name: "Scorpio", vehicle_type_id: carTypes[1].id },
      { name: "Verna", vehicle_type_id: carTypes[2].id },
      { name: "City", vehicle_type_id: carTypes[2].id },
      { name: "Royal Enfield", vehicle_type_id: bikeTypes[0].id },
    { name: "Harley Davidson", vehicle_type_id: bikeTypes[0].id },
    { name: "Kawasaki Ninja", vehicle_type_id: bikeTypes[1].id },
    { name: "Yamaha R15", vehicle_type_id: bikeTypes[1].id },
    ]);

    await User.bulkCreate([
      { first_name: "sandip", last_name:"pandit"  },
      { first_name: "john", last_name:"pandit"  },
      { first_name: "johny", last_name:"pandit"  },
      
    ]);

    console.log("✅ Seeding complete");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  }
}

seed();
