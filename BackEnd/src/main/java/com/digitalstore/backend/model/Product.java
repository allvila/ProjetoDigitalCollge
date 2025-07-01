package com.digitalstore.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity // <-- 1. Marcar como entidade do banco de dados
@Table(name = "products") // Define o nome da tabela (opcional, mas boa prática)
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    @Id // <-- 2. Marcar o campo 'id' como chave primária
    @GeneratedValue(strategy = GenerationType.IDENTITY) // <-- 3. Gerar o ID automaticamente
    private Long id;
    private String name;
    private BigDecimal price;
}