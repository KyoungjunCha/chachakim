package com.chachakim.chakimcha.notice.vo;

import lombok.Data;

@Data // @Data : 모든 필드에 대한 getter, setter, equals(), hashCode(), toString() 메서드를 생성함
public class NoticeVO {

    private int notice_Id; // 공지사항 아이디
    private String title; // 공지사항 제목
    private String write_datetime; // 공지사항 작성 날짜
    private String content; // 공지사항 내용
    private int view_Count; // 공지사항 조회 수

}
