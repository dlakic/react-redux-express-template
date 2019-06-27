/**
 * API users
 * Example api-service, which is not complete example.
 * Only used for demonstration purpose.
 * --> see e.g. admin-tool for complete api-service class.
 */
const mockUsers = [
  {
    id: 0,
    name: 'Daniel Lakic',
    profession: 'Software Engineer',
  },
  {
    id: 1,
    name: 'Andreas Schaufelbühl',
    profession: 'Software Engineer',
  },
];

/**
 * Executes a GET request on users
 * Here the DB connection should be created
 */
function get(api, path, qs = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockUsers);
    },
    2000);
  });
}

/**
 * Mock function to put data into backend
 * @param api
 * @param path
 * @param user
 */
function post(user) {
  return new Promise((resolve, reject) => {
    const newUser = user;
    newUser.id = mockUsers.length;
    mockUsers.push(user);
    resolve(mockUsers);
  });
}


module.exports = {
  get,
  post,
};
