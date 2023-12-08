import { Component } from '@angular/core';
import { produtoService } from 'src/app/services/produto.service';
import { Produto } from 'src/app/model/produto.model';

@Component({
  selector: 'app-produtos-resultados',
  templateUrl: './produtos-resultados.component.html',
  styleUrls: ['./produtos-resultados.component.scss'],
})
export class ProdutosResultadosComponent {
  public produtos: Produto[] = []; // Uma matriz para armazenar as Produtos

  constructor(private _produtosService: produtoService) {}

  // Injeta o serviço de Produtos no construtor do componente
  ngOnInit(): void {
    // Executa a função de listagem de Produtos quando é inicializado
    this.listarProdutos();
  }

  // Função para listar as Produtos
  listarProdutos() {
    this._produtosService.getProdutos().subscribe((retornaProduto) => {
      this.produtos = retornaProduto.map((item) => {
        // Mapeia os dados retornados para o modelo Produto
        return new Produto(
          item.id,
          item.nome,
          item.foto,
          item.descricao,
          item.preco,
          item.quantidade
        );
      });
    });
  }
}
