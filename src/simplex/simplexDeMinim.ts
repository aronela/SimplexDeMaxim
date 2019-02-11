import {simplexDeMaxim} from "./simplexDeMaxim";

export function simplexDeMinim(matrice: number[][], m: number, n: number): string {
  // Inversare matrice
  let matriceInversata: number[][] = [];

  for (let i: number = 0; i < n+1; i++) {
    matriceInversata.push([]);

    // X-uri
    for (let j: number = 0; j < m; j++) {
      matriceInversata[i].push(matrice[j][i] * (i === n ? -1 : 1));
    }

    // S-uri si Z-uri
    for (let j: number = 0; j < n + 1; j++) {
      matriceInversata[i].push(j === i ? 1 : 0);
    }

    // Aialalti
    matriceInversata[i].push(matrice[m][i]);
  }

  // Apelare algoritm simplex de maxim
  return simplexDeMaxim(matriceInversata, n, m);
}
