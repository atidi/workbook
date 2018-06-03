package com.web.rest.test.repository;

import com.web.rest.test.model.Workplace;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkplaceRepository extends JpaRepository<Workplace, Long> {
}
