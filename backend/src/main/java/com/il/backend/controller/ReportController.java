package com.il.backend.controller;

import com.il.backend.dto.StatisticReportResponseDTO;
import com.il.backend.dto.TopListReportResponseDTO;
import com.il.backend.service.ReportService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/reports")
public class ReportController {
    private final ReportService reportService;

    public ReportController(ReportService reportService) {
        this.reportService = reportService;
    }

    @GetMapping("/statistic")
    public ResponseEntity<StatisticReportResponseDTO> generateReport() {
        StatisticReportResponseDTO report = reportService.generateStatisticReport();
        return report != null ? ResponseEntity.ok(report)
                              : ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    @GetMapping("/top-list")
    public ResponseEntity<List<TopListReportResponseDTO>> topListReport() {
        List<TopListReportResponseDTO> report = reportService.generateTopListReport();
        return report != null ? ResponseEntity.ok(report)
                : ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
}
