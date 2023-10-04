import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {

  listaPensamentos = [
    {
      conteudo: 'I love Java',
      autoria: 'Felipe-S.O',
      modelo: 'modelo2'
    },
    {
      conteudo: 'I love Angula',
      autoria: 'Felipe-S.O',
      modelo: 'modelo3'
    },
    {
      conteudo: 'I love Angula asdfjpsidgidjfg safjasfigasigjsdifsfgdsgsdgsdgdfsgsdfgdsfgdf fdghdshgfhsdghdfghshshd dsfghdsh dfshdgsh dshhsdghsf d dsfghsdf sadifgasogajsfgjasjgfa asdgjaskgja~sf[gpasgi sajgajisfgjiaj',
      autoria: 'Felipe-S.O',
      modelo: 'modelo3'
    }
  ]
}
