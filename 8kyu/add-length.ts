export function addLength(str: string): string[] {
    // your code here
    return str.split(' ').map(word => `${word} ${word.length}`)
  }