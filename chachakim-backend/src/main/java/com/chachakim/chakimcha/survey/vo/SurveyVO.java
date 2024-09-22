package com.chachakim.chakimcha.survey.vo;

import lombok.Data;
import java.util.List;
@Data // @Data : 모든 필드에 대한 getter, setter, equals(), hashCode(), toString() 메서드를 생성함
public class SurveyVO {

    // survey Table
    private int survey_Id; // 설문조사 아이디
    private String title; // 설문조사 제목
    private String write_datetime; // 설문조사 작성 날짜
    private String content; // 설문조사 내용
    private int take_count; // 설문조사 참여 수
    private String endDate; // 설문조사 종료 날짜
    private int favorite_count; // 설문조사 좋아요 수

    private List<QuestionVO> questions; // 질문 리스트 (각 설문에 여러 질문을 담아야함)

}
