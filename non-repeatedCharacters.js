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

  var frequency1characters = [];
  for (var key in frequency) {
    if (frequency[key] === 1) {
      frequency1characters.push(key);
    }
  }

  if (frequency1characters.length === 0) {
    return null;
  } else {
    return frequency1characters[0];
  }
};

console.log(firstNonRepeatedCharacter('ABC'));