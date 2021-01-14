// Pair Programming with Jerrica Joe, Alex Hauka, and Luke Oloffs

// Transpose Function from previous PP
const transpose = function(matrix) {
    if (matrix === []) {
      return undefined;
    }
    let newArray = [];
    // for each column (values in nested array at [0]), add an array to newArray
    for (let x = 0; x < matrix[0].length; x++) {
      newArray.push([]);
      // add each element by column into each new array (all 1st elements to array at[0], 2nd elements to array at [1], ...)
      for (let y = 0; y < matrix.length; y++) {
        newArray[x].push(matrix[y][x]);
      }
    }
    return newArray;
  };
  
  const searchArrays = (arr, word) => {
    for (const l of arr) {
      if (l.includes(word)) {
        return true;
      } 
    };
    return false;
  };
  
  const wordSearch = (letters, word) => {
    if (letters.length > 0) {
      // console.log(letters);
      // if (letters === []) {
      //   return undefined;
      // }
      // Convert nested arrays to strings 
      const horizontalJoin = letters.map(l => l.join(''));
      const verticalJoin = transpose(letters).map(l => l.join(''));
      // Check the arrays/strings for the word 
      const horizontal = searchArrays(horizontalJoin, word);
      const vertical = searchArrays(verticalJoin, word);
      // Return whether the word is present in either direction
      if (horizontal || vertical === true) {
        return true;
      } else {
        return false;
      }
    }
    else {
      return undefined;
    }
};
    
module.exports = wordSearch;
   