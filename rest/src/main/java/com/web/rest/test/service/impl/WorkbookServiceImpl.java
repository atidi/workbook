package com.web.rest.test.service.impl;

import com.web.rest.test.exception.WorkbookNotFoundException;
import com.web.rest.test.model.Workbook;
import com.web.rest.test.model.Workplace;
import com.web.rest.test.repository.WorkbookRepository;
import com.web.rest.test.repository.WorkplaceRepository;
import com.web.rest.test.service.WorkbookService;
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class WorkbookServiceImpl implements WorkbookService {

    @Autowired
    private WorkbookRepository workbookRepository;

    @Autowired
    private WorkplaceRepository workplaceRepository;

    @Override
    public void delete(Long id) {
        workbookRepository.deleteById(id);
    }

    @Override
    public List<Workbook> findAll() {
        return workbookRepository.findAll();
    }

    @Override
    public Workbook findOne(Long id) {
        Optional<Workbook> p = workbookRepository.findById(id);
        if (!p.isPresent()) {
            throw new WorkbookNotFoundException(String.valueOf(id));
        }
        Workbook workbook = p.get();
        for (Workplace c : workbook.getWorkplaces()) {
            Hibernate.initialize(c);
        }
        return workbook;
    }

    @Override
    public Workbook save(Workbook workbook) {
        Workbook p = workbookRepository.save(workbook);
        if (!workbook.getWorkplaces().isEmpty()) {
            for (Workplace workplace : workbook.getWorkplaces()) {
                workplace.setWorkbook(p);
                workplaceRepository.save(workplace);
            }
        }
        return p;
    }
}
