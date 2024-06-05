package com.chachakim.chakimcha.notice.vo;

import lombok.Data;

@Data
public class NoticeVO {
    private int noticeId; // 공지사항 아이디
    private String title; // 공지사항 제목
    private String writeDatetime; // 공지사항 작성 날짜
    private String content; // 공지사항 내용
    private int viewCount; // 공지사항 조회 수
}
