package com.web.rest.test.controller.handel;

import com.web.rest.test.exception.WorkbookNotFoundException;
import com.web.rest.test.model.ErrorObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.ArrayList;
import java.util.List;

@ControllerAdvice
public class WorkbookControllerAdvice extends ResponseEntityExceptionHandler {

    Logger logger = LoggerFactory.getLogger(WorkbookControllerAdvice.class);

    @Autowired
    private MessageSource msgSource;

    @ExceptionHandler(Exception.class)
    public final ResponseEntity<Object> handleAllExceptions(Exception ex, WebRequest request) {
        ErrorObject errorObject = new ErrorObject(HttpStatus.INTERNAL_SERVER_ERROR);
        errorObject.setMessage(ex.getMessage());
        logger.error(errorObject.toString());
        return buildResponseEntity(errorObject);
    }

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        BindingResult result = ex.getBindingResult();
        List<String> errors = new ArrayList<>();
        for (FieldError e : result.getFieldErrors()) {
            if (e != null) {
                errors.add(e.getField() + ":" + msgSource.getMessage(e.getCode(), null, LocaleContextHolder.getLocale()));
            }
        }
        ErrorObject errorObject = new ErrorObject(HttpStatus.BAD_REQUEST);
        errorObject.setFieldError(errors);
        return buildResponseEntity(errorObject);
    }

    @ExceptionHandler(WorkbookNotFoundException.class)
    protected ResponseEntity<Object> handleWorkbookNotFound(
            WorkbookNotFoundException ex) {
        ErrorObject errorObject = new ErrorObject(HttpStatus.NOT_FOUND);
        errorObject.setMessage(ex.getMessage());
        logger.error(errorObject.toString());
        return buildResponseEntity(errorObject);
    }

    private ResponseEntity<Object> buildResponseEntity(ErrorObject errorObject) {
        return new ResponseEntity<>(errorObject, errorObject.getStatus());
    }
}
