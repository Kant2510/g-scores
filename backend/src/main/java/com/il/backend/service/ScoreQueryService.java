package com.il.backend.service;

import com.il.backend.dto.ScoreQueryResponseDTO;
import com.il.backend.model.Score;
import com.il.backend.repository.ScoreRepo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ScoreQueryService {
    private final ScoreRepo scoreRepo;

    public ScoreQueryService(ScoreRepo scoreRepo) {
        this.scoreRepo = scoreRepo;
    }

    public List<ScoreQueryResponseDTO> getScore(String registrationNumber) {
        List<Score> scores = scoreRepo.findByStudent_Id(registrationNumber);
        if (scores.isEmpty()) {
            throw new IllegalArgumentException("No scores found for student registration: " + registrationNumber);
        }
        List<ScoreQueryResponseDTO> scoreResponses = new ArrayList<>();
        for (Score score : scores) {
            scoreResponses.add(new ScoreQueryResponseDTO(score.getSubject().getName(), score.getScore()));
        }
        return scoreResponses;
    }
}
