/** product: calculate the product of an array of numbers. */

function product(nums, index = 0) {
  if (nums.length === index) {
    return 1;
  }
  return (nums[index] * product(nums, index + 1))
}

//console.log(product([2, 3, 4]))

/** longest: return the length of the longest word in an array of words. */

function longest(words, index = 0, maxLength = 0) {
  if (words.length === index) {
    return maxLength;
  }
  const currentLength = words[index].length;
  const newMaxLength = Math.max(maxLength, currentLength);

  return longest(words, index + 1, newMaxLength);
}

//console.log(longest(["hello", "hi", "hol"]));


/** everyOther: return a string with every other letter. */

function everyOther(str, index = 0, result = '') {
  if (index >= str.length) {
    return result;
  }
  result += str[index];
  return everyOther(str, index + 2, result);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, -1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, value, index = 0) {
  if (index >= arr.length) {
    return -1;
  }
  if (arr[index] === value) {
    return index;
  }
  return findIndex(arr, value, index + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length <= 1) {
    return str;
  }
  return str.slice(-1) + revString(str.slice(0, -1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let result = [];

  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      result.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      result = result.concat(gatherStrings(obj[key]));
    }
  }

  return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }
  const middle = Math.floor((start + end) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (val < arr[middle]) {
    return binarySearch(arr, val, start, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, end);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
