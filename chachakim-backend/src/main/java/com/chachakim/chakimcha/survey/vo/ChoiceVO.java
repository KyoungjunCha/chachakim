package com.chachakim.chakimcha.survey.vo;

import lombok.Data;

@Data // @Data : 모든 필드에 대한 getter, setter, equals(), hashCode(), toString() 메서드를 생성함
public class ChoiceVO {

    private int choice_Id;
    private String choice_text;

}
