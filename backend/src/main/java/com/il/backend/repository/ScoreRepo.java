package com.il.backend.repository;

import jakarta.validation.constraints.NotNull;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.il.backend.dto.StatisticSubjectDTO;
import com.il.backend.dto.TopListReportResponseDTO;
import com.il.backend.model.Score;

import java.util.List;

@Repository
public interface ScoreRepo extends JpaRepository<Score, Integer> {
    List<Score> findByStudent_Id(@NotNull String studentId);

    @Query("""
        SELECT new com.il.backend.dto.StatisticSubjectDTO(
            s.subject.id,
            COUNT(CASE WHEN s.score >= 8 THEN 1 END),
            COUNT(CASE WHEN s.score >= 6 AND s.score < 8 THEN 1 END),
            COUNT(CASE WHEN s.score >= 4 AND s.score < 6 THEN 1 END),
            COUNT(CASE WHEN s.score < 4 THEN 1 END)
        )
        FROM Score s
        GROUP BY s.subject.id
    """)
    List<StatisticSubjectDTO<Integer>> countScoreLevelsBySubject();

    @EntityGraph(attributePaths = {"student", "subject"})
    List<Score> findBySubjectNameIn(List<String> subjects);

    @Query("""
        SELECT new com.il.backend.dto.TopListReportResponseDTO(
            s.student.id,
            SUM(CASE WHEN s.subject.name = 'math' THEN s.score ELSE 0 END),
            SUM(CASE WHEN s.subject.name = 'physics' THEN s.score ELSE 0 END),
            SUM(CASE WHEN s.subject.name = 'chemistry' THEN s.score ELSE 0 END),
            SUM(s.score)
        )
        FROM Score s
        WHERE s.score IS NOT NULL
          AND s.subject.name IN ('math', 'physics', 'chemistry')
        GROUP BY s.student.id
        HAVING COUNT(DISTINCT s.subject.name) = 3
        ORDER BY SUM(s.score) DESC
        LIMIT 10
    """)
    List<TopListReportResponseDTO> findTopList();

//    @Query("""
//        SELECT new com.il.backend.dto.TopListReportResponseDTO(
//            s.student.id,
//            s.score,
//            SUM(s.score) AS total_score
//        )
//        FROM Score s
//        WHERE s.subject.name IN ('math', 'physics', 'chemistry')
//        GROUP BY s.student.id
//        ORDER BY total_score DESC
//        LIMIT 10;
//    """)
//    List<TopListReportResponseDTO> findTopListByScore();
}
