/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 *   firstNonRepeatedCharacter('AACBDBC'); // => 'D'
 *   firstNonRepeatedCharacter('AAAAA'); // => null;
 *   firstNonRepeatedCharacter('ABC'); // => 'A';
*/

var firstNonRepeatedCharacter = function(string) {
  var frequency = {};
  for (var i = 0; i < string.length; i++) {
    if (!frequency[string[i]]) {
      frequency[string[i]] = 1;
    } else {
      frequency[string[i]]++;
    }
  }
  for (var key in frequency) {
    if (frequency[key] === 1) {
      return key;
    } 
  }
  return null;
};

console.log(firstNonRepeatedCharacter('ABC'));


