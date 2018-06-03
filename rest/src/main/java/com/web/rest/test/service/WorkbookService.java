package com.web.rest.test.service;


import com.web.rest.test.model.Workbook;

import java.util.List;

public interface WorkbookService {

    void delete(Long id);

    List<Workbook> findAll();

    Workbook findOne(Long id);

    Workbook save(Workbook workBook);
}
