function sum(n1, n2) {
  if (n1 == undefined || n2 == undefined) throw new Error('expected NaN to be a function');
  return n1 + n2;
}

export default sum;
