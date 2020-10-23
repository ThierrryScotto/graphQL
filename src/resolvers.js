const users = [
  { id: 1, name: "Thierry", email: "Thierry@test.com" },
  { id: 2, name: "GAI", email: "GAI@test.com" }
];

module.exports = {
  Query: {
    users: () => users,
    user: () => users[0]
  },

  Mutation: {
    createUser: () => users[0]
  }
};