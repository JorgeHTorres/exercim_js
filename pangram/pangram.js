//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  let a = 97, alphabet = [];
  for (let i = 0; i < 26; i++) {
    alphabet[i] = String.fromCharCode(a + i);
  }

  return alphabet.every(char => sentence.toLowerCase().includes(char)); 
};
