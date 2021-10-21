import { GraphQLList, GraphQLInt } from "graphql";
import UserType from "../../typeDefs/UserType";

// db
const userList = [
  {
    id: 1,
    name: "foo",
    email: "foo@gmail.com",
    password: "secret",
  },
  {
    id: 2,
    name: "goo",
    email: "goo@gmail.com",
    password: "goosecret",
  },
];

// services
function getUsers() {
  return userList;
}

function getUser(id: number) {
  const rest = userList.find((user) => user.id === id);
  return rest;
}

const UserField = {
  users: {
    type: GraphQLList(UserType),
    resolve() {
      return getUsers();
    },
  },
  user: {
    type: UserType,
    args: { id: { type: GraphQLInt } },
    resolve(parent: any, args: { [id: string]: any }) {
      const { id } = args;
      return getUser(id);
    },
  },
};

export default UserField;
