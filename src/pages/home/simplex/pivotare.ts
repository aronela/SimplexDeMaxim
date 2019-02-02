import {cmmdc} from "./cmmdc";
import {PivotPosition} from "./pivotPosition";
import {aflaPivotul} from "./aflaPivotul";

export function pivotare(matrice: number[][]): void {
  // Afla pivotul
  let pivotPosition: PivotPosition = aflaPivotul(matrice);

  // Valoare pivot
  const valoarePivot: number = matrice[pivotPosition.linie][pivotPosition.coloana];

  // parcurgem coloana pivotului
  for (let i: number = 0; i < matrice.length; i++) {
    let valoareCurenta: number = matrice[i][pivotPosition.coloana];

    // sa nu fie pivotul si valoare sa fie diferita de zero
    if (i !== pivotPosition.linie && valoareCurenta !== 0) {
      let divizor: number = cmmdc(valoareCurenta, valoarePivot);
      let coeficientA: number = valoarePivot / divizor;
      let coeficientB: number = valoareCurenta / divizor;

      // Parcurgem tot randul
      for (let j = 0; j < matrice[i].length; j++) {
        matrice[i][j] = coeficientA * matrice[i][j] - coeficientB * matrice[pivotPosition.linie][j];
      }
    }
  }
}
