// Mongoose models
const Todo = require("../models/Todo");
const User = require("../models/User");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLBoolean,
} = require("graphql");

// Todo type
const TodoType = new GraphQLObjectType({
  name: "Todo",
  fields: () => ({
    id: { type: GraphQLID },
    task: { type: GraphQLString },
    done: { type: GraphQLBoolean },
    user: {
      type: UserType,
      resolve(parent, args) {
        return User.findById(parent.user_id);
      },
    },
  }),
});

// User type
const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    firstname: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find();
      },
    },
    user: {
      type: TodoType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.findById(args.id);
      },
    },
    todos: {
      type: new GraphQLList(TodoType),
      resolve(parent, args) {
        return Todo.find();
      },
    },
    todo: {
      type: TodoType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Todo.findById(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
