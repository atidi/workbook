package com.web.rest.test.repository;

import com.web.rest.test.model.Workbook;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkbookRepository extends JpaRepository<Workbook, Long> {
}
