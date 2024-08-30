package com.chachakim.chakimcha.event.vo;

import lombok.Data;

@Data // @Data : 모든 필드에 대한 getter, setter, equals(), hashCode(), toString() 메서드를 생성함
public class EventVO {

    private int event_Id; // 이벤트 아이디
    private String title; // 이벤트 제목
    private String write_datetime; // 이벤트 작성 날짜
    private String content; // 이벤트 내용
}
