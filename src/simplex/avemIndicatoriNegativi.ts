export function avemIndicatoriNegativi(matrice: number[][]): boolean {
  const randIndicatori: number = matrice.length - 1;

  for (let i: number = 0; i < matrice[randIndicatori].length; i++) {
    if (matrice[randIndicatori][i] < 0) {
      return true;
    }
  }

  return false;
}
