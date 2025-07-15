package com.il.backend.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.il.backend.dto.ScoreQueryRequestDTO;
import com.il.backend.dto.ScoreQueryResponseDTO;
import com.il.backend.service.ScoreQueryService;

import java.util.List;

@RestController
public class ScoreController {
    private final ScoreQueryService scoreQueryService;

    public ScoreController(ScoreQueryService scoreQueryService) {
        this.scoreQueryService = scoreQueryService;
    }

    @PostMapping("/scores")
    public List<ScoreQueryResponseDTO> getScores(@RequestBody ScoreQueryRequestDTO request) {
        // Validate the request
        if (request == null || request.registration_number() == null || request.registration_number().isBlank()) {
            throw new IllegalArgumentException("Invalid request: registration_number cannot be null or blank");
        }
        // Call the service to get scores
        return scoreQueryService.getScore(request.registration_number());
    }
}
