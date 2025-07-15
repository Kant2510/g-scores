package com.il.backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@Entity
@Table(name = "foreign_languages")
@NoArgsConstructor
@AllArgsConstructor
public class ForeignLanguage {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @NotNull
    private String code;

    @NotNull
    private String name;
}
