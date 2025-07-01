package com.digitalstore.backend.repository;

import com.digitalstore.backend.model.Product;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Repository
public class ProductRepository {

    // Simula uma tabela de produtos no banco de dados
    private static final Map<Long, Product> PRODUCTS_DB = new HashMap<>();

    static {
        PRODUCTS_DB.put(1L, new Product(1L, "Notebook Gamer", new BigDecimal("7500.00")));
        PRODUCTS_DB.put(2L, new Product(2L, "Mouse sem Fio", new BigDecimal("150.50")));
        PRODUCTS_DB.put(3L, new Product(3L, "Teclado Mecânico", new BigDecimal("350.00")));
        PRODUCTS_DB.put(4L, new Product(4L, "Monitor 4K", new BigDecimal("2200.99")));
    }

    public Optional<Product> findById(Long id) {
        return Optional.ofNullable(PRODUCTS_DB.get(id));
    }
}