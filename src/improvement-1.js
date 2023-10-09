/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 1
export default function countOccurence(word) {
  // Spread the string into an array,
  // Then filter the array for "R".
  // Return the number of elements in the filtered array.
  return [...word].filter((letter) => letter === "R").length;
}
