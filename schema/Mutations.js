const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
} = require("graphql");
const mongoose = require("mongoose");
// Import files and functions
const {
  UserType,
  NOKInputType,
  TenantType,
  HouseType,
  MRType,
  MRInputType,
} = require("./Typedef");
const User = require("../mongoSchema/User");
const Tenant = require("../mongoSchema/Tenant");
const House = require("../mongoSchema/House");
const MeterReading = require("../mongoSchema/MeterReading");

const Mutation = new GraphQLObjectType({
  name: "MutationQuery",
  fields: {
    createUser: {
      type: UserType,
      description: "Creates a user in the system",
      args: {
        first_name: { type: GraphQLString },
        other_names: { type: GraphQLString },
        national_id: { type: GraphQLString },
        designation: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        email: { type: new GraphQLList(GraphQLString) },
        phone: { type: new GraphQLList(GraphQLString) },
        next_of_kin: { type: NOKInputType },
      },
      async resolve(parent, args) {
        const newUser = new User({
          first_name: args.first_name,
          other_names: args.other_names,
          national_id: args.national_id,
          designation: args.designation,
          username: args.username,
          password: args.password,
          email: args.email,
          phone: args.phone,
          next_of_kin: args.next_of_kin,
        });
        const res = await newUser.save();
        return res;
      },
    },
    createTenant: {
      type: TenantType,
      description: "Creates a tenant from the available users",
      args: {
        user: { type: GraphQLString },
        hseno: { type: GraphQLInt },
        checkin: { type: GraphQLString },
        rent: { type: GraphQLInt },
        status: { type: GraphQLString },
        checkout: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const newTenant = new Tenant({
          user: args.user,
          hseno: args.hseno,
          checkin: args.checkin,
          status: args.status,
          rent: args.rent,
          checkout: args.checkout,
        });
        const res = await newTenant.save();
        console.log(res);
        return res;
      },
    },
    addHouse: {
      type: HouseType,
      description: "Add a house to be managed by SUVIMIS",
      args: {
        hseno: { type: GraphQLInt },
        kplc_no: { type: GraphQLString },
        occupied: { type: GraphQLBoolean },
      },
      async resolve(parent, args) {
        const newHouse = new House({
          hseno: args.hseno,
          kplc_no: args.kplc_no,
          occupied: args.occupied,
        });
        const res = await newHouse.save();
        return res;
      },
    },
    addReading: {
      type: MRType,
      description: "Add a meter reading.",
      args: {
        tenant: { type: GraphQLString },
        date: { type: GraphQLString },
        reading: { type: GraphQLFloat },
      },
      resolve: async (parent, args) => {
        const newReading = new MeterReading({
          tenant: args.tenant,
          date: args.date,
          reading: args.reading,
        });

        const res = await newReading.save();
        console.log(res);
        return res;
      },
    },
    addReadingsBulk: {
      type: new GraphQLList(MRType),
      description: "Add meter readings in bulk.",
      args: {
        readings: { type: new GraphQLList(MRInputType) },
      },
      resolve: async (parent, args) => {
        try {
          const res = await MeterReading.insertMany(args.readings);
          return res;
        } catch (err) {
          console.log("An error occured on BulkInsert \n", err);
        }
      },
    },
  },
});

module.exports = Mutation;
