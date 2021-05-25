//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (nbr) => {
  let rainDrops = '';
  if(nbr % 3 == 0) rainDrops+= 'Pling';
  if(nbr % 5 == 0) rainDrops+= 'Plang';
  if(nbr % 7 == 0) rainDrops+= 'Plong';
  if(!rainDrops) return `${nbr}`;
  return rainDrops;
};
