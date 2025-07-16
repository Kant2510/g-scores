package com.il.backend.service;

import org.springframework.stereotype.Service;

import com.il.backend.dto.StatisticReportResponseDTO;
import com.il.backend.dto.StatisticSubjectDTO;
import com.il.backend.dto.TopListReportResponseDTO;
import com.il.backend.model.Subject;
import com.il.backend.repository.ScoreRepo;
import com.il.backend.repository.SubjectRepo;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class ReportService {
    // This class will handle the logic for generating reports
    // It will interact with the database to fetch data and format it into reports
    private final SubjectRepo subjectRepo;
    private final ScoreRepo scoreRepo;

    public ReportService(SubjectRepo subjectRepo, ScoreRepo scoreRepo) {
        this.subjectRepo = subjectRepo;
        this.scoreRepo = scoreRepo;
    }

    // Example method to generate a report
    public StatisticReportResponseDTO generateStatisticReport() {
        // Logic to generate a report
        // This could involve querying the database, processing data, and formatting it
        List<String> subjects = new java.util.ArrayList<>(subjectRepo.findAll().stream().map(Subject::getName).toList());
        // add 'total' subject
        subjects.add("total");
        List<StatisticSubjectDTO<Integer>> statistics = scoreRepo.countScoreLevelsBySubject();
        StatisticSubjectDTO<String> total = new StatisticSubjectDTO<>(
                "total",
                statistics.stream().mapToLong(StatisticSubjectDTO::aboveOrEqualTo8).sum(),
                statistics.stream().mapToLong(StatisticSubjectDTO::from6ToUnder8).sum(),
                statistics.stream().mapToLong(StatisticSubjectDTO::from4ToUnder6).sum(),
                statistics.stream().mapToLong(StatisticSubjectDTO::under4).sum()
        );
        // map id2subject
        Map<Integer, String> id2subject = subjectRepo.findAll().stream().collect(Collectors.toMap(Subject::getId, Subject::getName));
        List<StatisticSubjectDTO<String>> statistics2 = new java.util.ArrayList<>(statistics
                .stream()
                .map(stat ->
                        new StatisticSubjectDTO<>(
                                id2subject.get(stat.subject()),
                                stat.aboveOrEqualTo8(),
                                stat.from6ToUnder8(),
                                stat.from4ToUnder6(),
                                stat.under4())
                ).toList());
        statistics2.add(total);

        return new StatisticReportResponseDTO(subjects, statistics2);
    }

    public List<TopListReportResponseDTO> generateTopListReport() {
        // Logic to generate a top list report
        // This could involve querying the database for top scores, users, etc.
//        List<Score> scores = scoreRepo.findBySubjectNameIn(List.of("math", "physics", "chemistry"));
//
//        Map<String, TopListReportResponseDTO> studentMap = new HashMap<>();
//
//        for (Score score : scores) {
//            String studentId = score.getStudent().getId();
//            TopListReportResponseDTO dto = studentMap.getOrDefault(studentId,
//                    new TopListReportResponseDTO(studentId, 0, 0, 0, 0));
//
//            String subject = score.getSubject().getName();
//            Number value = score.getScore();
//            if (value == null) {
//                continue;
//            }
//            Number math = dto.math();
//            Number physics = dto.physics();
//            Number chemistry = dto.chemistry();
//
//            switch (subject) {
//                case "math" -> math = value;
//                case "physics" -> physics = value;
//                case "chemistry" -> chemistry = value;
//            }
//
//            Number total = math.doubleValue() + physics.doubleValue() + chemistry.doubleValue();
//
//            dto = new TopListReportResponseDTO(studentId, math, physics, chemistry, total);
//            studentMap.put(studentId, dto);
//        }

        return scoreRepo.findTopList();
    }
    // Additional methods for handling different types of reports can be added here
}
