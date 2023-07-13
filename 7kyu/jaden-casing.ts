String.prototype.toJadenCase = function () {
  // Your code here
  return this.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}


interface String {      // Declaration needed, don't remove it
  toJadenCase(): string;
}