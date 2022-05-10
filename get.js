/**
 * get.js
 *
 * @param {string | string[]} path
 * @param {object} data
 * @returns unknown
 */
function get(path, data) {
  if (!data) return undefined;
  const isValid =
    Array.isArray(path) &&
    path?.every(
      (element) => typeof element === "string" || typeof element === "number"
    );

  if (!isValid && typeof path !== "string") return undefined;

  const properties = isValid
    ? path
    : path
        .replace(/[\[\]/]/g, ".")
        .split(".")
        .filter((el) => el);
  return properties.reduce((prev, curr) => {
    return prev && prev[curr];
  }, data);
}

module.exports = { get };
