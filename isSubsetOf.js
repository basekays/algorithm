/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/


Array.prototype.isSubsetOf = function (arr) {
  var objectify = function(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
      obj[arr[i]] = true;
    }
    return obj;
  };
  var obj = objectify(arr);
  for (var j = 0; j < this.length; j++) {
    if (obj[this[j]] === undefined) {
      return false;
    }
  }
  return true;
};

var test = [['a', 'b'], {'a': 1, 'b': 2}, 'a', 'c'];
console.log(test.isSubsetOf(['c', ['a', 'b'], {'a': 1, 'b': 2}, 'a', 'b']));