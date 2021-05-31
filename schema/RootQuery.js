const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
} = require("graphql");
// Import GraphQL Types
const {
  UserType,
  NOKInputType,
  TenantType,
  HouseType,
  MRType,
} = require("./Typedef");
// Import MongoSchemas
const User = require("../mongoSchema/User");
const Tenant = require("../mongoSchema/Tenant");
const House = require("../mongoSchema/House");
const MeterReading = require("../mongoSchema/MeterReading");

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    // Tenants
    getAllActiveTenants: {
      type: new GraphQLList(TenantType),
      description:
        "A list of all tenants currently living in SunnyView Apartments",
      async resolve(parent, args) {
        const res = await Tenant.find({ status: "active" }).populate("user");
        // console.log(res);
        return res;
      },
    },
    getAllDepartedTenants: {
      type: new GraphQLList(TenantType),
      description:
        "A list of all tenants currently living in SunnyView Apartments",
      async resolve(parent, args) {
        const res = await Tenant.find({ status: "departed" }).populate("user");
        // console.log(res);
        return res;
      },
    },
    // Users
    getAllUsers: {
      type: new GraphQLList(UserType),
      description: "Gets all users in the system. Admins only can call this",
      async resolve(parent, args) {
        const res = await User.find();
        // await console.log(res);
        return res;
      },
    },
    getOneUser: {
      type: UserType,
      description: "Get one user using one criteria",
      args: {
        _id: { type: GraphQLString },
        national_id: { type: GraphQLString },
        username: { type: GraphQLString },
      },
      resolve: async (parent, { _id, national_id, username }) => {
        let res;
        if (_id) {
          res = await User.findById(_id);
          // User.collection.insert()
        }
        if (national_id) {
          res = await User.find({ national_id });
        }
        if (username) {
          res = await User.find(username);
        }
        console.log(res);
        return res[0];
      },
    },

    // Houses
    getAllHouses: {
      type: new GraphQLList(HouseType),
      description: "List of all the houses in the SUVIMIS",
      async resolve(parent, args) {
        const res = await House.find();
        return res;
      },
    },

    // Meter Readings
    getAllMeterReadings: {
      type: new GraphQLList(MRType),
      description: "Gets all readings ever made",
      resolve: async (parent, args) => {
        const res = await MeterReading.find().populate({
          path: "tenant",
          populate: {
            path: "user",
          },
        });
        console.log(res);
        return res;
      },
    },
  },
});

module.exports = RootQuery;
