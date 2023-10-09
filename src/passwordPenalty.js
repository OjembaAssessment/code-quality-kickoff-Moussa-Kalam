/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"

  // Early return is password is falsy
  if (!password) return 0;

  /**
   * If password contains three or more consecutive characters,
   * map each group of consecutive characters to 2 and get their sum
   *
   * If password contains two consecutive characters,
   * map each group of consecutive characters to 1 and get their sum
   */
  if (/(\w)\1\1+/g.test(password)) {
    return password
      .match(/(\w)\1\1+/g)
      .map((v) => 2)
      .reduce((a, b) => a + b, 0);
  } else if (/(\w)\1/g.test(password)) {
    return password
      .match(/(\w)\1/g)
      .map((v) => 1)
      .reduce((a, b) => a + b, 0);
  } else {
    return 0;
  }
}

// My test
console.log(penaltyPoints("U2jSS277pQ"));
console.log(penaltyPoints("amGGAg8m0Q"));
console.log(penaltyPoints("70vSSS859Q"));
console.log(penaltyPoints("70vSSS85DDDD9Q"));
console.log(penaltyPoints("amdGAg8m0Q"));
console.log(penaltyPoints(""));
console.log(penaltyPoints(null));
