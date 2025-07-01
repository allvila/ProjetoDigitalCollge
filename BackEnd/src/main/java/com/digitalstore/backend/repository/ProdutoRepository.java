package com.digitalstore.backend.repository;

import com.digitalstore.backend.domain.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
    // O Spring Data JPA criará os métodos básicos de CRUD para você
}