package com.il.backend.dto;

public record StatisticSubjectDTO<T>(
    T subject,
    Long aboveOrEqualTo8,
    Long from6ToUnder8,
    Long from4ToUnder6,
    Long under4
) {}
