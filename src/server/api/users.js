/**
 * Mock API users service
 * Example api service, only used for demonstration purposes.
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
function get() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mockUsers.length > 0) {
        resolve(mockUsers);
      } else {
        reject(new Error('No Users found'));
      }
    },
    2000);
  });
}

/**
 * Mock function to put data into backend
 * @param user
 */
function post(user) {
  return new Promise((resolve, reject) => {
    const newUser = user;
    newUser.id = mockUsers.length;
    mockUsers.push(newUser);
    // This check is only for illustration purposes
    if (Array.isArray(mockUsers)) {
      resolve(mockUsers);
    } else {
      reject(new Error('User could not be added'));
    }
  });
}


module.exports = {
  get,
  post,
};
