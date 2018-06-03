package com.web.rest.test.validation;

import com.web.rest.test.model.Workbook;
import com.web.rest.test.model.Workplace;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

@Component
public class ObjectValidator implements Validator {
    @Override
    public boolean supports(Class<?> aClass) {
        return Workbook.class.equals(aClass);
    }

    @Override
    public void validate(@Nullable Object o, Errors errors) {
        ValidationUtils.rejectIfEmpty(errors, "firstName", "error.first.name.required");
        ValidationUtils.rejectIfEmpty(errors, "lastName", "error.last.name.required");
        Workbook workbook = (Workbook) o;
        int i = 0;
        for (Workplace c : workbook.getWorkplaces()) {
            if (c.getCompany() == null || !StringUtils.hasLength(c.getCompany()))
                errors.rejectValue("workplaces[" + i + "].company", "error.company.required");
            if (c.getCountry() == null || !StringUtils.hasLength(c.getCountry()))
                errors.rejectValue("workplaces[" + i + "].country", "error.country.required");
            if (c.getStartDate() == null)
                errors.rejectValue("workplaces[" + i + "].startDate", "error.start.date.required");
            i++;
        }
    }
}
