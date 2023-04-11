import { Component } from '@angular/core';

@Component({
  selector: 'app-provaangular',
  templateUrl: './provaangular.component.html',
  styleUrls: ['./provaangular.component.css']
})
export class ProvaangularComponent {
  reais : number = 0;
  dolar : number = 0;
  euro : number = 0;
  converte : number = 0;
  converte2 : number = 0;
  converte3 : number = 0;
  cotacao : number = 0;
  cotacao1 : number = 0;
  cotacao2 : number = 0;

  converter(){
     this.converte = this.reais / this.cotacao;
     this.converte2 = this.dolar * this.cotacao1;
     this.converte3 = this.euro * this.cotacao2;

  }

}
