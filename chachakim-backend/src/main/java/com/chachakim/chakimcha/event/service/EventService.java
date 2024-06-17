package com.chachakim.chakimcha.event.service;

import java.util.List;

import com.chachakim.chakimcha.event.vo.EventVO;

public interface EventService {

    // 이벤트 리스트 보여주기
    public List<EventVO> list();

    // 이벤트 클릭 시 각 항목별 상세 보기
    public EventVO view(int event_Id);

    /* 
    // 이벤트 글 등록하기
    public int write(EventVO vo);

    // 이벤트 글 수정하기
    public int update(EventVO vo);

    // 이벤트 글 삭제하기
    public int delete(int event_Id);
    */
} 
