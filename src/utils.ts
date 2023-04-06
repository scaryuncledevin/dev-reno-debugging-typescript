export function average(arr: number[]): number {
  return arr.reduce((x,y) => x+y) / arr.length;
}
