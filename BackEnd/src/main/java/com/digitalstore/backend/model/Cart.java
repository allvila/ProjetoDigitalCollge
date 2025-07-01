package com.digitalstore.backend.model;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Entity // <-- 1. Marcar como entidade
@Table(name = "carts")
@Data
public class Cart {

    @Id // <-- 2. Adicionar chave primária
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // --- 3. Definir o relacionamento de "um para muitos" ---
    @OneToMany(
        mappedBy = "cart", // Mapeado pelo campo "cart" na classe CartItem
        cascade = CascadeType.ALL, // Salvar/deletar itens quando o carrinho for salvo/deletado
        orphanRemoval = true // Remover itens do banco se forem removidos da lista
    )
    private List<CartItem> items = new ArrayList<>();

    @Transient // <-- 4. Não salvar o valor total no banco
    public BigDecimal getTotalValue() {
        return items.stream()
                .map(CartItem::getSubtotal)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }
}