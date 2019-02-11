export function afisareSolutie(matrice: number[][], m: number, n: number): string {
  let z: number = parseFloat(
    (matrice[matrice.length - 1][matrice[0].length - 1] / matrice[matrice.length - 1][matrice[0].length - 2])
      .toFixed(2)
  );
  let solutie: number[] = [];

  // parcurg fiecare coloana si pentru fiecare coloana parcurg fiecare linie pentru a afla daca exista o valoare optima
  for (let j = 0; j < n; j++) {
    let valoareColoana: number = 0;
    let limieOptima: number = 0;

    for (let i = 0; i < m; i++) {
      if (matrice[i][j] !== 0) {
        if (valoareColoana !== 0) {
          // a doua valoare nenula
          valoareColoana = 0;
          break;
        } else {
          valoareColoana = matrice[i][j]
          limieOptima = i;
        }
      }
    }

    // am gasit o valoare optima
    solutie.push(valoareColoana ?
      parseFloat((matrice[limieOptima][matrice[0].length - 1] / valoareColoana).toFixed(2))
      : 0);
  }

  return '(' + solutie.join(', ') + ') = ' + z;
}
