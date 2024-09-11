package com.chachakim.chakimcha.event.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chachakim.chakimcha.event.mapper.EventMapper;
import com.chachakim.chakimcha.event.vo.EventVO;

@Service
public class EventServiceImpl implements EventService  {
    
    @Autowired
    private EventMapper mapper;

    @Override // 이벤트 리스트 보여주기
    public List<EventVO> getEventList() {
        System.out.println("EventServiceImpl.getEventList() 실행중입니다.");
        return mapper.getEventList();
    }

    @Override // 이벤트 클릭 시 각 항목별 상세 보기
    public EventVO getEventById(int event_Id) {
        System.out.println("EventServiceImpl.getEventById() 실행중입니다.");
        return mapper.getEventById(event_Id);
    }

    @Override // 이벤트 글 등록하기
    public int insertEvent(EventVO vo) {
        System.out.println("EventServiceImpl.insertEvent() 실행중입니다.");
        return mapper.insertEvent(vo);
    }

    @Override // 이벤트 글 수정하기
    public int updateEvent(EventVO vo) {
        System.out.println("EventServiceImpl.updateEvent() 실행중입니다.");
        return mapper.updateEvent(vo);
    }

    @Override // 이벤트 글 삭제하기
    public int deleteEvent(int event_Id) {
        System.out.println("EventServiceImpl.deleteEvent() 실행중입니다.");
        return mapper.deleteEvent(event_Id);
    }

    
} 