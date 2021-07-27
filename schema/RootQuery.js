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
  InvoiceType,
} = require("./Typedef");
// Import MongoSchemas
const User = require("../mongoSchema/User");
const Tenant = require("../mongoSchema/Tenant");
const House = require("../mongoSchema/House");
const MeterReading = require("../mongoSchema/MeterReading");
const Invoice = require("../mongoSchema/Invoice");

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    // Tenants
    getAllActiveTenants: {
      type: new GraphQLList(TenantType),
      description:
        "A list of all tenants currently living in SunnyView Apartments",
      async resolve(parent, args) {
        try {
          const res = await Tenant.find({ status: "active" }).populate("user");
          return res;
        } catch (err) {
          throw err;
        }
      },
    },
    getOneTenant: {
      type: TenantType,
      description: "Get one tenant using id",
      args: {
        _id: { type: GraphQLString },
      },
      resolve: async (parent, { _id }) => {
        let res;
        if (_id) {
          res = await Tenant.findById(_id).populate("user");
          return res;
        }
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
      description: "Get one user using id",
      args: {
        _id: { type: GraphQLString },
      },
      resolve: async (parent, { _id }) => {
        let res;
        if (_id) {
          res = await User.findById(_id);
          // User.collection.insert()
          return res;
        }
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
        return res;
      },
    },

    // Invoices
    getInvoices: {
      type: new GraphQLList(InvoiceType),
      description: "Get all invoices saved",
      resolve: async (parent, args) => {
        try {
          const res = await Invoice.find();
          return res;
        } catch (err) {
          console.log(err);
        }
      },
    },
    getOneInvoice: {
      type: InvoiceType,
      description: "An invoice gotten by id",
      args: {
        _id: { type: GraphQLString },
        inv_date: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        try {
          let res;
          if (args._id) {
            res = await Invoice.findOne({ "bills._id": args._id });
            return res;
          }
          if (args.inv_date) {
            res = await Invoice.findOne({ inv_date: args.inv_date });
            return res;
          }
        } catch (err) {
          console.log(err);
        }
      },
    },
  },
});

module.exports = RootQuery;
