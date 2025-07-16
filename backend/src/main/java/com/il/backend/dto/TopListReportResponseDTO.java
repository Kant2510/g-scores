package com.il.backend.dto;

public record TopListReportResponseDTO(
    String registration_number,
    Number math,
    Number physics,
    Number chemistry,
    Number total
) {}
