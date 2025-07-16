package com.il.backend.dto;

import java.util.List;

public record StatisticReportResponseDTO(
    List<String> subject,
    List<StatisticSubjectDTO<String>> statistics
) {}
