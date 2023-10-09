export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") {
    password = String(password);
  }

  // * * * YOUR CODE GOES IN HERE ... * * *
  /*
   * if (password is not exactly 10 digits or characters...) {
   *   return ...;
   * }
   *
   * if (is not composed by digits and numbers) {
   *   return ...;
   * }
   */

  // Check password with a directly ascending/descending sequence of number
  if (/01|12|23|34|45|56|67|78|89|98|87|76|65|54|43|32|21|10/.test(password))
    return false;

  // Check if password has the appropriate length
  // If password includes numbers and letters (uppercase and lowercase)
  // Password does not include any special characters
  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])[a-zA-Z\d]{10}$/.test(password))
    return false;

  // Check that forbidden passwords are not considered
  if (forbiddenPasswords.includes(password)) return false;

  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;
  return true;
}
