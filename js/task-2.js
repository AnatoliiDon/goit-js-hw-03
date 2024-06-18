function makeArray(firstArray, secondArray, maxLength) {
  const concatArray = firstArray.concat(secondArray);
  if (concatArray.length <= maxLength) {
    return concatArray;
  } else {
    const finalArray = concatArray.slice(0, maxLength);
    return finalArray;
  }
}

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []
console.log(
  makeArray(
    ['Earth', 'Jupiter', 'Mars', 'Saturn'],
    ['Neptune', 'Uranus', 'Venus'],
    6
  )
); // ['Earth', 'Jupiter', 'Mars', 'Saturn', 'Neptune', 'Uranus']
