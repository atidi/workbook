package com.web.rest.test.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class WorkbookNotFoundException extends RuntimeException {

    public WorkbookNotFoundException(String id) {
        super("could not find workbook with id = '" + id + "'.");
    }
}
