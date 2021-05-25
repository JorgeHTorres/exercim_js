//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (first, second) => {
  if (first === '' && second === '') return 0;
  if (first === '')
      return 'left strand must not be empty';
  if (second === '')
      return 'right strand must not be empty';
  if (first.length !== second.length)
      return 'left and right strands must be of equal length';
  second = second.split('');
  return first.split('').reduce((result, value, index) => {
      if (value !== second[index])
          result++;
      return result;
  }, 0)
};
