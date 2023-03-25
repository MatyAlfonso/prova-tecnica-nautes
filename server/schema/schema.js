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
  GraphQLNonNull,
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

// GET all users, only one user, all todos, only one todo
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

// Mutations
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // Create user
    addUser: {
      type: UserType,
      args: {
        firstname: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const user = new User({
          firstname: args.firstname,
        });
        return user.save();
      },
    },
    // Delete user
    deleteUser: {
      type: UserType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return User.findByIdAndRemove(args.id);
      },
    },
    // Add a to do
    addTodo: {
      type: TodoType,
      args: {
        task: { type: GraphQLNonNull(GraphQLString) },
        done: { type: GraphQLNonNull(GraphQLBoolean), defaultValue: false },
        user_id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const todo = new Todo({
          task: args.task,
          done: args.done,
          user_id: args.user_id,
        });
        return todo.save();
      },
    },
    // Delete a to do
    deleteTodo: {
      type: TodoType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Todo.findByIdAndRemove(args.id);
      },
    },
    // Update a to do
    updateTodo: {
      type: TodoType,
      args: {
        task: { type: GraphQLString },
        done: { type: GraphQLBoolean },
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Todo.findByIdAndUpdate(
          args.id,
          {
            $set: {
              task: args.task,
              done: args.done,
            },
          },
          { new: true }
        );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
