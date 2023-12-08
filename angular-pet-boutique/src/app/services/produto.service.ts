// Importa os módulos necessários
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto.model';

@Injectable({
  providedIn: 'root',
})
export class produtoService {
  private apiUrl = 'http://localhost:3000/produtos';
 // Caminho para o arquivo JSON

  constructor(private http: HttpClient) {} // HttpClient -> Classe de conexão com o JSON

  // Obtém a lista de Produtos a partir do arquivo JSON
  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  // Pega por ID
  getProduto(id: any): Observable<Produto> {
    const urlPegar = `${this.apiUrl}/${id}`;

    return this.http.get<Produto>(urlPegar);
  }

  // Cadastra uma nova Produto no servidor
  cadastrarProduto(produto: Produto): Observable<Produto[]> {
    return this.http.post<Produto[]>(this.apiUrl, produto);
  }

  // Atualiza uma Produto existente no servidor
  atualizarProduto(id: any, produto: Produto): Observable<Produto[]> {
    const urlAtualizar = `${this.apiUrl}/${id}`;

    return this.http.put<Produto[]>(urlAtualizar, produto);
  }

  // Remove uma Produto do servidor
  removerProduto(id: any): Observable<Produto[]> {
    const urlDeletar = `${this.apiUrl}/${id}`;

    return this.http.delete<Produto[]>(urlDeletar);
  }
}
