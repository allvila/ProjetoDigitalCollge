package com.digitalstore.backend.payload;

public record JwtResponse(
    String accessToken,
    String tokenType
) {}