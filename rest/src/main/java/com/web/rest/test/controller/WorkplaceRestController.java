package com.web.rest.test.controller;

import com.web.rest.test.model.Workbook;
import com.web.rest.test.model.Workplace;
import com.web.rest.test.service.WorkplaceService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/api/")
public class WorkplaceRestController {

    @Autowired
    private WorkplaceService workplaceService;

    Logger logger = LoggerFactory.getLogger(WorkplaceRestController.class);

    @RequestMapping(value = "/workplace/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deleteWorkplace(@PathVariable("id") Long id) {
        logger.info("Delete workplace with id = " + id);
        workplaceService.delete(id);
        logger.info("Workplace successfully deleted");
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }

    @RequestMapping(value = "/workplace/delete/", method = RequestMethod.POST)
    public ResponseEntity<Object> deleteWorkplace(@RequestBody List<Workplace> workplaceList) {
        logger.info("Delete the workbooks ");
        for (Workplace c : workplaceList) {
             workplaceService.delete(c.getId());
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
