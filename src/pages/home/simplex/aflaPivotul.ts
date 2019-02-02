import {PivotPosition} from "./pivotPosition";

export function aflaPivotul(matrice: number[][]): PivotPosition {
  // luam valoarea negativa cea mai mica din randul indicatorilor
  const i = matrice.length - 1;
  const bIndex = matrice[0].length - 1;
  let min = 0;
  let minPosition = 0;

  for (let j = 0; j < matrice[i].length; j++) {
    if (matrice[i][j] < min) {
      min = matrice[i][j];
      minPosition = j;
    }
  }

  let minRaport: number = null;
  let pivotPosition: number = 0;

  for (let x = 0; x < i; x++) {
    if (matrice[x][minPosition] !== 0) {
      let ratie = Math.abs(matrice[x][bIndex] / matrice[x][minPosition]);
      if (ratie > 0 && (minRaport === null || ratie < minRaport)) {
        minRaport = ratie;
        pivotPosition = x;
      }
    }
  }
  return {
    linie: pivotPosition,
    coloana: minPosition
  }
}
