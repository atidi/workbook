package com.web.rest.test.service.impl;

import com.web.rest.test.repository.WorkplaceRepository;
import com.web.rest.test.service.WorkplaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class WorkplaceServiceImpl implements WorkplaceService {

    @Autowired
    private WorkplaceRepository workplaceRepository;

    @Override
    public void delete(Long id) {
        workplaceRepository.deleteById(id);
    }
}
