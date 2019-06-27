/**
 * AJAX request function which abstracts superagent away
 */
import superagent from 'superagent';

/**
 * Creates a new AJAX request without actually executing it. Sets the `Accepts` header to `application/json`.
 *
 * @param {string} method HTTP method
 * @param {string} path   Path
 * @returns {superagent}
 */
export default (method, path) => {
  return superagent(method, path).accept('json');
};
