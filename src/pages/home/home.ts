import {Component} from '@angular/core';
import {seturiIntrare} from "./simplex/seturiIntrare";
import {simplexDeMaxim} from "./simplex/simplexDeMaxim";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  seturiIntrare = seturiIntrare;
  solutii: {solutie: string, numar: number, selected: boolean}[] = [];
  solutiaAleasa: {solutie: string, numar: number, selected: boolean};

  updateSelection() {
    // Luam seturile selectate
    const seturiSelectate = this.seturiIntrare.filter(set => set.selected);

    if (seturiSelectate.length === 2) {
      for(let i = 0; i < seturiSelectate.length; i++) {
        this.solutii.push({
          solutie: simplexDeMaxim(seturiSelectate[i].matrice, seturiSelectate[i].m, seturiSelectate[i].n),
          numar: seturiSelectate[i].numar,
          selected: false,
        });
      }
    }
  }

  updateSolutie() {
    // Luam solutia selectate
    const solutii = this.solutii.filter(solutie => solutie.selected);

    if (solutii.length) {
      this.solutiaAleasa = solutii[0];
    }
  }

  restart() {
    this.solutii = [];
    this.solutiaAleasa = null;
    this.seturiIntrare.map(set => set.selected = false);
  }
}
