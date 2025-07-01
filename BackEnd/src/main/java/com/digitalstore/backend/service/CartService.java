package com.digitalstore.backend.service; // Pacote do seu projeto

// --- 1. ADICIONAR IMPORTAÇÕES AUSENTES ---
import com.digitalstore.backend.model.Cart;
import com.digitalstore.backend.model.CartItem;
import com.digitalstore.backend.model.Product;
import com.digitalstore.backend.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.Optional; // Importa a classe Optional

@Service // Garante que o Spring gerencie esta classe
public class CartService {

    // --- 2. INJETAR O REPOSITÓRIO VIA CONSTRUTOR ---
    private final ProductRepository productRepository;
    private final Cart cart = new Cart();

    // O Spring irá "injetar" uma instância de ProductRepository aqui
    public CartService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Cart getCart() {
        return cart;
    }

public void addItem(Long productId, int quantity) {
    Product product = productRepository.findById(productId)
            .orElseThrow(() -> new IllegalArgumentException("Produto não encontrado!"));

    Optional<CartItem> existingItem = cart.getItems().stream()
            .filter(item -> item.getProduct().getId().equals(productId))
            .findFirst();

    if (existingItem.isPresent()) {
        existingItem.get().setQuantity(existingItem.get().getQuantity() + quantity);
    } else {
        // --- INÍCIO DA MUDANÇA ---

        // 1. Crie um objeto CartItem vazio
        CartItem newItem = new CartItem();

        // 2. Configure as propriedades individualmente
        newItem.setProduct(product);
        newItem.setQuantity(quantity);
        newItem.setCart(this.cart); // IMPORTANTE: Associa o item ao carrinho atual

        // 3. Adicione o novo item à lista do carrinho
        cart.getItems().add(newItem);

        // --- FIM DA MUDANÇA ---
    }