package com.digitalstore.backend.repository;

import com.digitalstore.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // Método para buscar um usuário pelo email
    Optional<User> findByEmail(String email);

    // Método para verificar se um email já existe no banco
    Boolean existsByEmail(String email);
}
