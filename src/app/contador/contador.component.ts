import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  numero: number = 0;

  decrementar() {
    if (this.numero > 0) {
      this.numero--;
    }
  }

  incrementar() {
    if (this.numero < 25) {
      this.numero++;
    }
  }

  reset() {
    this.numero = 0;
  }
}
