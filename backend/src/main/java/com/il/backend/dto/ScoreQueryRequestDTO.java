package com.il.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class ScoreQueryRequestDTO {
    @JsonProperty("registration_number")
    @NotBlank(message = "Registration number cannot be blank")
    private String registration_number;

    public @NotBlank(message = "Registration number cannot be blank") String registration_number() {
        return registration_number;
    }
}
