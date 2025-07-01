package com.digitalstore.backend.payload;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

// Usando 'record' do Java 17+ para um DTO conciso
public record SignUpRequest(
    @NotBlank(message = "Email é obrigatório")
    @Email(message = "Formato de email inválido")
    String email,

    @NotBlank(message = "Senha é obrigatória")
    @Size(min = 6, message = "A senha deve ter no mínimo 6 caracteres")
    String password
) {}