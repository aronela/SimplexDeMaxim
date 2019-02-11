export function cmmdc(x: number, y: number): number {
  [x, y] = [Math.abs(x), Math.abs(y)].sort();

  while (y) {
    let t: number = y;
    y = x % y;
    x = t;
  }
  return x;
}
