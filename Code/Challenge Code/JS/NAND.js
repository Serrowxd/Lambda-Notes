function NAND(x, y) {
  // You can use whatever JS operators that you would like: &&, ||, !
  if (!(x && y)) {
    return 1;
  } else {
    return 0;
  }
}
function NOT(n) {
  // Do not use !
  if (this.NAND(n, n)) {
    return 1;
  } else {
    return 0;
  }
}
function AND(x, y) {
  // Do not use &&, ||, or !
  // You can use any of the functions that you have already written
  if (this.NOT(this.NAND(x, y))) {
    return 1;
  } else {
    return 0;
  }
}
function OR(x, y) {
  // Do not use ||, &&, or !
  // You can use any of the functions that you have already written
  if (this.NAND(this.NOT(x), this.NOT(y))) {
    return 1;
  } else {
    return 0;
  }
}
function XOR(x, y) {
  // Do not use ||, &&, or !
  // You can use any of the functions that you have already written
  if (this.AND(this.NAND(x, y), this.OR(x, y))) {
    return 1;
  } else {
    return 0;
  }
}
