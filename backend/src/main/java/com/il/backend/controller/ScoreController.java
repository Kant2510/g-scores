package com.il.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.il.backend.dto.ScoreQueryRequestDTO;
import com.il.backend.dto.ScoreQueryResponseDTO;
import com.il.backend.service.ScoreQueryService;

@RestController
@RequestMapping("/api/v1/scores")
public class ScoreController {
    private final ScoreQueryService scoreQueryService;

    public ScoreController(ScoreQueryService scoreQueryService) {
        this.scoreQueryService = scoreQueryService;
    }

    @PostMapping("/search")
    public ResponseEntity<ScoreQueryResponseDTO> getScores(@RequestBody ScoreQueryRequestDTO request) {
        // Validate the request
        if (request == null || request.registration_number() == null || request.registration_number().isBlank()) {
            throw new RuntimeException("Invalid request: registration_number cannot be null or blank");
        }
        // Call the service to get scores
        ScoreQueryResponseDTO query = scoreQueryService.getScore(request.registration_number());
        return query != null ? ResponseEntity.ok(query)
                             : ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
}
