package com.il.backend.service;

import org.springframework.stereotype.Service;

import com.il.backend.dto.ScoreQueryResponseDTO;
import com.il.backend.dto.SubjectScoreDTO;
import com.il.backend.exception.ScoreNotFoundException;
import com.il.backend.model.Score;
import com.il.backend.repository.ScoreRepo;

import java.util.ArrayList;
import java.util.List;

@Service
public class ScoreQueryService {
    private final ScoreRepo scoreRepo;

    public ScoreQueryService(ScoreRepo scoreRepo) {
        this.scoreRepo = scoreRepo;
    }

    public ScoreQueryResponseDTO getScore(String registrationNumber) {
        List<Score> scores = scoreRepo.findByStudent_Id(registrationNumber);
        if (scores.isEmpty()) {
            throw new ScoreNotFoundException("No scores found for student registration: " + registrationNumber);
        }
        List<SubjectScoreDTO> subjectScores = new ArrayList<>();
        String foreignLanguageCode = null;
        for (Score score : scores) {
            if (score.getSubject().getName().equals("foreign_language") && score.getForeignLanguage() != null) {
                foreignLanguageCode = score.getForeignLanguage().getCode();
            }
            subjectScores.add(new SubjectScoreDTO(score.getSubject().getName(), score.getScore()));
        }
        return new ScoreQueryResponseDTO(
                registrationNumber.toLowerCase(),
                subjectScores.stream().toList(),
                foreignLanguageCode
        );
    }
}
