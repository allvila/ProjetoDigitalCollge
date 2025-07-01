package com.digitalstore.backend.controller;

import com.digitalstore.backend.domain.Produto;
import com.digitalstore.backend.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controlador REST para gerenciar produtos.
 * Expõe endpoints para o frontend consumir.
 */
@RestController
@RequestMapping("/api/produtos") // Prefixo para todos os endpoints neste controlador
public class ProdutoController {

    @Autowired
    private ProdutoRepository produtoRepository;

    /**
     * Retorna uma lista de todos os produtos.
     * Mapeado para GET /api/produtos
     */
    @GetMapping
    public List<Produto> listarTodos() {
        return produtoRepository.findAll();
    }

    /**
     * Busca um produto pelo seu ID.
     * Mapeado para GET /api/produtos/{id}
     */
    @GetMapping("/{id}")
    public ResponseEntity<Produto> buscarPorId(@PathVariable Long id) {
        return produtoRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    /**
     * Cria um novo produto.
     * Mapeado para POST /api/produtos
     */
    @PostMapping
    public Produto criarProduto(@RequestBody Produto produto) {
        return produtoRepository.save(produto);
    }
}