//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix) {
    this.rws = matrix.split('\n').map((elem)=>{return elem.split(' ').map(num=>parseInt(num))});
    this.cols = this.rws[0].map((col,i)=>{return this.rws.map((rw)=>{return rw[i]})})
  }

  get rows() {
    return this.rws
  }

  get columns() {
    return this.cols;
  }
}
