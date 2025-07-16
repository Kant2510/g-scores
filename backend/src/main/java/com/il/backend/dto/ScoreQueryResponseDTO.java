package com.il.backend.dto;

import java.util.List;

public record ScoreQueryResponseDTO(
    String registrationNumber,
    List<SubjectScoreDTO> scores,
    String foreignLanguageCode
) {}
