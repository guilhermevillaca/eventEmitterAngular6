import { AppEventService } from './../app-event.service';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './categoria.service';
import { Categoria } from '../models/categoria.models';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categorias: Categoria[] = [];
  loading: boolean = false;
  constructor(private _categoriaService: CategoriaService) { }
  categoria: Categoria;   
  ngOnInit() {
    this.pesquisa();
  }

  pesquisa() {
    this.loading = true;
    this._categoriaService.pesquisa().toPromise().then(res => {
      this.categorias = res['response'];      
      this.loading = false;
    });
  }

  remove(ctgCodigo){    
    this._categoriaService.remove(ctgCodigo).toPromise().then(res => {      
      AppEventService.set('success', 'categoria', 'Removido com sucesso');    
      this.pesquisa();
    }).catch(res=>{
      AppEventService.set('danger', 'categoria', res['response']);    
    });
  }

}



