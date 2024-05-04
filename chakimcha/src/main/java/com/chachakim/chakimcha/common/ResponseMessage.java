package com.chachakim.chakimcha.common;

public interface ResponseMessage {
// interface에서는 반드시 public static final 한다 왜? 왜그런건데? 나중에 알아보자 그래서  public static final을 지우고 String SUCCESS = "SU"; 만 남겨도 그렇게 인식을 한단다.
    // HTTP Status 200
    public static final String SUCCESS = "Success";

    // HTTP Status 400
    public static final String VALIDATION_FAILED = "Validation failed.";
    public static final String DUPLICATE_EMAIL = "Duplicate email.";
    public static final String DUPLICATE_NICKNAME = "Duplicate nickname.";
    public static final String DUPLICATE_TEL_NUMBER = "Duplicate tel number.";
    public static final String NOT_EXISTED_USER = "This user does not exist.";
    public static final String NOT_EXISTED_BOARD = "This board does not exist.";

    // HTTP Status 401
    public static final String SIGN_IN_FAIL = "Login information mismatch.";
    public static final String AUTHORIZATION_FAIL = "Authorization Failed.";

    // HTTP Status 403
    public static final String NO_PERMISSION = "Do not hava permission.";

    // HTTP Status 500
    public static final String DATABASE_ERROR = "Database error.";
    
} 
