// Import Libraries
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLFloat,
  GraphQLScalarType,
  GraphQLList,
  GraphQLInputObjectType,
  GraphQLBoolean,
} = require("graphql");
const MeterReading = require("../mongoSchema/MeterReading");

// Next Of Kin
const NOKType = new GraphQLObjectType({
  name: "next_of_kin",
  fields: () => ({
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});
// Next of Kin Input
const NOKInputType = new GraphQLInputObjectType({
  name: "nok_input",
  fields: () => ({
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});
// User
const UserType = new GraphQLObjectType({
  name: "Users",
  description:
    "All the human entities using the system. This includes the Landlords, tenants, developers and administrators",
  fields: () => ({
    _id: { type: GraphQLString },
    first_name: { type: GraphQLString },
    other_names: { type: GraphQLString },
    national_id: { type: GraphQLString },
    designation: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    email: { type: new GraphQLList(GraphQLString) },
    phone: { type: new GraphQLList(GraphQLString) },
    next_of_kin: { type: NOKType },
  }),
});

// Tenant
const TenantType = new GraphQLObjectType({
  name: "Tenant",
  description: "Tenants living in SunnyView",
  fields: () => ({
    _id: { type: GraphQLString },
    user: {
      type: UserType,
    },
    hseno: {
      type: GraphQLInt,
    },
    checkin: {
      type: GraphQLString,
    },
    status: {
      type: GraphQLString,
    },
    rent: {
      type: GraphQLInt,
    },
    checkout: {
      type: GraphQLString,
    },
    meter_readings: {
      type: new GraphQLList(MRType),
      resolve: async (tenant) => {
        const res = await MeterReading.find({ tenant: tenant._id });
        return res;
      },
    },
  }),
});

// Meter Reading
const MRType = new GraphQLObjectType({
  name: "meter_reading",
  description: "Meter Readings taken every beginning of the month.",
  fields: () => ({
    _id: { type: GraphQLString },
    tenant: { type: TenantType },
    date: {
      type: GraphQLString,
    },
    reading: {
      type: GraphQLFloat,
    },
  }),
});

// Meter Reading Input
const MRInputType = new GraphQLInputObjectType({
  name: "meter_reading_bulk",
  description: "Meter Readings taken in bulk every beginning of the month.",
  fields: () => ({
    _id: { type: GraphQLString },
    tenant: { type: GraphQLString },
    date: {
      type: GraphQLString,
    },
    reading: {
      type: GraphQLFloat,
    },
  }),
});

const HouseType = new GraphQLObjectType({
  name: "House",
  description: "Houses in the building that are tenant residences",
  fields: () => ({
    hseno: { type: GraphQLInt },
    kplc_no: { type: GraphQLString },
    occupied: { type: GraphQLBoolean },
  }),
});

// Export variables/functions
module.exports = {
  UserType,
  NOKInputType,
  TenantType,
  MRType,
  HouseType,
  MRInputType,
};
