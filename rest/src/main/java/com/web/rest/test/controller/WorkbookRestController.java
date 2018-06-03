package com.web.rest.test.controller;

import com.web.rest.test.model.Workbook;
import com.web.rest.test.service.WorkbookService;
import com.web.rest.test.validation.ObjectValidator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/api/")
public class WorkbookRestController {

    Logger logger = LoggerFactory.getLogger(WorkbookRestController.class);

    @Autowired
    private WorkbookService workbookService;

    @Autowired
    private ObjectValidator objectValidator;

    @InitBinder
    protected void initBinder(WebDataBinder binder) {
        binder.addValidators(objectValidator);
    }

    @RequestMapping(value = "/workbooks/", method = RequestMethod.GET)
    public ResponseEntity<List<Workbook>> listAllWorkbooks() {
        logger.info("Getting all list of workbook");
        return new ResponseEntity<List<Workbook>>(workbookService.findAll(), HttpStatus.OK);
    }

    @RequestMapping(value = "/workbook/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Workbook> getWorkbook(@PathVariable("id") Long id) {
        logger.info("Getting workbook with id = " + id);
        Workbook workbook = workbookService.findOne(id);
        logger.info("Workbook received " + workbook.toString());
        return new ResponseEntity<Workbook>(workbook, HttpStatus.OK);
    }


    @RequestMapping(value = "/workbook/", method = RequestMethod.POST)
    public ResponseEntity<Object> createWorkbook(@RequestBody @Validated Workbook workbook) {
        logger.info("Saving the workbook " + workbook);
        Workbook sWorkbook = workbookService.save(workbook);
        logger.info("Workbook successfully saved " + sWorkbook.toString());
        return new ResponseEntity<>(HttpStatus.CREATED);
    }


    @RequestMapping(value = "/workbook/", method = RequestMethod.PUT)
    public ResponseEntity<Void> updateWorkbook(@RequestBody @Validated Workbook workbook) {
        logger.info("Workbook update " + workbook);
        workbookService.save(workbook);
        logger.info("Workbook successfully updated");
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    @RequestMapping(value = "/workbook/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deleteWorkbook(@PathVariable("id") Long id) {
        logger.info("Delete workbook with id = " + id);
        workbookService.delete(id);
        logger.info("Workbook successfully deleted");
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }


}
