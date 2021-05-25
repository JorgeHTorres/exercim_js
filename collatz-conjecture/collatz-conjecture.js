//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (number) => {
  var step = 0;
  if (number < 1){
    throw Error('Only positive numbers are allowed')
  }

  while (number != 1){
    step += 1
    if (number % 2 == 0 ){
      number = number / 2
    } else {
      number = number * 3 + 1
    }  
  }  
  return step
};
