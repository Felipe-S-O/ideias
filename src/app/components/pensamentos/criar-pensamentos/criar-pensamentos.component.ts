import { Component } from '@angular/core';
import Pensamento from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent {

  pensamento: Pensamento ={
    conteudo: '',
    autoria: '',
    modelo:'modelo1'
  }

  constructor(private service: PensamentoService){

  }

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe
  }

  cancelar(){
    alert("Cancelar")
  }
}
