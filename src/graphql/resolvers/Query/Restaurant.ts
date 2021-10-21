import { GraphQLList, GraphQLString } from "graphql";
import RestaurantType from "../../typeDefs/RestaurantType";

// db
const menuList = [
  { id: 1, name: "Chicken dumplings", price: "12.60" },
  { id: 2, name: "Noodles", price: "9" },
  { id: 3, name: "Burger", price: "8.30" },
];

const restaurants = [
  {
    id: 1,
    name: "Hwatu and Manchi",
    email: "hwatu@gmail.com",
    location: "Melbourne",
    menu: menuList,
  },
  {
    id: 2,
    name: "samsam",
    email: "samsaam@gmail.com",
    location: "USA",
    menu: menuList,
  },
];

// services
function getRestaurants() {
  return restaurants;
}

function getRestaurant(id: number) {
  const rest = restaurants.find((restaurant) => restaurant.id === id);
  return rest;
}

const RestaurantField = {
  restaurants: {
    type: GraphQLList(RestaurantType),
    resolve() {
      return getRestaurants();
    },
  },
  restaurant: {
    type: RestaurantType,
    args: { id: { type: GraphQLString } },
    resolve(parent: any, args: { [id: string]: any }) {
      const { id } = args;
      return getRestaurant(id);
    },
  },
};

export default RestaurantField;
