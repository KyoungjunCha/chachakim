package com.chachakim.chakimcha.common;

public interface ResponseCode {
    // interface에서는 반드시 public static final 한다 왜? 왜그런건데? 나중에 알아보자 그래서  public static final을 지우고 String SUCCESS = "SU"; 만 남겨도 그렇게 인식을 한단다.
    // HTTP Status 200
    public static final String SUCCESS = "SU";

    // HTTP Status 400
    public static final String VALIDATION_FAILED = "VF";
    public static final String DUPLICATE_EMAIL = "DE";
    public static final String DUPLICATE_NICKNAME = "DN";
    public static final String DUPLICATE_TEL_NUMBER = "DT";
    public static final String NOT_EXISTED_USER = "NU";
    public static final String NOT_EXISTED_BOARD = "NB";

    // HTTP Status 401
    public static final String SIGN_IN_FAIL = "SF";
    public static final String AUTHORIZATION_FAIL = "AF";

    // HTTP Status 403
    public static final String NO_PERMISSION = "NP";

    // HTTP Status 500
    public static final String DATABASE_ERROR = "DBE";

}