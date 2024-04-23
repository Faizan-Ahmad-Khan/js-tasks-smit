function isPalindrome(input) {
  let i = 0;
  let j = 0;
  let reverse = "";

  // Calculate the length of the input
  while (true) {
    if (input[j] === undefined) {
      break;
    }
    j++;
  }

  // Create the reverse string
  for (i = j - 1; i >= 0; i--) {
    reverse += input[i];
  }

  // Check if input and reverse are the same
  for (i = 0; i < j; i++) {
    if (input[i] !== reverse[i]) {
      return false;
    }
  }

  return true;
}

// Test cases
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("faizan")); // false
console.log(isPalindrome("level")); // true
