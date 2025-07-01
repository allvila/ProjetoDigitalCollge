package com.digitalstore.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity // <-- 1. Marcar como entidade
@Table(name = "cart_items")
@Data
@NoArgsConstructor
public class CartItem {

    @Id // <-- 2. Adicionar chave primária
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int quantity;

    // --- 3. Definir relacionamentos ---

    @ManyToOne // Muitos itens de carrinho podem ter o mesmo produto
    @JoinColumn(name = "product_id") // Chave estrangeira para a tabela de produtos
    private Product product;

    @ManyToOne // Muitos itens de carrinho pertencem a um carrinho
    @JoinColumn(name = "cart_id") // Chave estrangeira para a tabela de carrinho
    @JsonIgnore // Evita loops infinitos ao serializar para JSON
    private Cart cart;

    // Construtor foi removido para usar o @NoArgsConstructor do Lombok
    // que o JPA precisa

    @Transient // <-- 4. Não salvar o subtotal no banco, pois ele é calculado
    public BigDecimal getSubtotal() {
        if (product != null && product.getPrice() != null) {
            return product.getPrice().multiply(new BigDecimal(this.quantity));
        }
        return BigDecimal.ZERO;
    }
}