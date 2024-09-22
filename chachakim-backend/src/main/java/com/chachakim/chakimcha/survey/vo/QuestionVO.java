package com.chachakim.chakimcha.survey.vo;

import lombok.Data;
import java.util.List;

@Data // @Data : 모든 필드에 대한 getter, setter, equals(), hashCode(), toString() 메서드를 생성함
public class QuestionVO {

    private int question_Id; // 질문 아이디
    private String question_text; // 질문 내용

    private List<ChoiceVO> choices;
 
}
