import { Categoria } from './../models/categoria.models';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as $ from "jquery/dist/jquery.min.js";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private urlPesquisa;
  private urlRemove;
  constructor(private _httpClient: HttpClient) {
    this.urlPesquisa = "http:localhost:8080/caminhoProjetoRest/categoria/pesquisa";    
    this.urlRemove = "http:localhost:8080/caminhoProjetoRest/categoria/remove";
  }

  pesquisa() {
    return this._httpClient.get(this.urlPesquisa);
  }

  remove(ctgCodigo) {
    return this._httpClient.post(this.urlRemove, $.param({'ctgCodigo':ctgCodigo}), {
      headers: new HttpHeaders().set(
        "Content-Type",
        "application/x-www-form-urlencoded"
      )
    });
  }

  
}
