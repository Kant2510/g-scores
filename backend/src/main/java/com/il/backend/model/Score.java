package com.il.backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@Builder
@Entity
@Table(name = "scores")
@NoArgsConstructor
@AllArgsConstructor
public class Score {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "student_id", nullable = false)
    @NotNull
    private Student student;

    @ManyToOne
    @JoinColumn(name = "subject_id", nullable = false)
    @NotNull
    private Subject subject;

    @ManyToOne
    @JoinColumn(name = "foreign_language_code", referencedColumnName = "code")
    private ForeignLanguage foreignLanguage;

    private BigDecimal score;

    // Additional fields can be added as needed
}
