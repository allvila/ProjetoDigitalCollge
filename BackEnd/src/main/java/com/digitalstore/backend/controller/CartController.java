package com.digitalstore.backend.controller;

import com.digitalstore.backend.model.Cart;
import com.digitalstore.backend.service.CartService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/cart") // Prefixo para todos os endpoints deste controller
public class CartController {

    private final CartService cartService;

    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @GetMapping
    public Cart getCart() {
        // Retorna o estado atual do carrinho.
        // Se estiver vazio, a lista de itens estará vazia e o total será 0.00, como na imagem.
        return cartService.getCart();
    }

    @PostMapping("/items")
    public ResponseEntity<Void> addItemToCart(@RequestBody AddItemRequest request) {
        cartService.addItem(request.productId(), request.quantity());
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/items/{productId}")
    public ResponseEntity<Void> removeItemFromCart(@PathVariable Long productId) {
        cartService.removeItem(productId);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping
    public ResponseEntity<Void> clearCart() {
        // Corresponde ao botão "Esvaziar"
        cartService.clearCart();
        return ResponseEntity.noContent().build();
    }

    // DTO (Data Transfer Object) para representar o corpo da requisição de adicionar item
    public record AddItemRequest(Long productId, int quantity) {}
}