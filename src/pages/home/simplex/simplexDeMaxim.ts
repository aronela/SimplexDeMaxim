import {avemIndicatoriNegativi} from "./avemIndicatoriNegativi";
import {pivotare} from "./pivotare";
import {afisareSolutie} from "./afisareSolutie";

export function simplexDeMaxim(matrice: number[][], m: number, n: number): string {
  // verificam daca avem indicatori negativi
  while (avemIndicatoriNegativi(matrice)) {
    // Pivoteaza
    pivotare(matrice);
  }

  // Afisarea solutiei
  return afisareSolutie(matrice, m, n);
}
