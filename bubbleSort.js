/*
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
*/

var bubbleSort = function(array) {
  var sort = function(index1, index2, array) {
    var current = array[index1];
    array[index1] = array[index2];
    array[index2] = current;
    return array;
  }

  for (var i = 0; i < array.length; i++) {
    var sortCount = 0;
    for (var j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        sortCount++;
        sort(j, j + 1, array);
      }
    }
    if (!sortCount) {
      break;
    }
  }
  return array;
};

console.log(bubbleSort([6, 4, 2, 10, 1]));

