package com.chachakim.chakimcha.notice.service;

import java.util.List;

import com.chachakim.chakimcha.notice.vo.NoticeVO;

public interface NoticeService {

    // 공지사항 리스트 보여주기
    public List<NoticeVO> list();

    // 공지사항 클릭 시 각 항목별 상세 보기
    public NoticeVO view(int noticeId);

    /* 
    // 공지사항 글 등록하기
    public int write(NoticeVO vo);

    // 공지사항 글 수정하기
    public int update(NoticeVO vo);

    // 공지사항 글 삭제하기
    public int delete(int noticeId);
    */
} 
