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

    @Override  // 이벤트 리스트 보여주기
    public List<EventVO> list(){
        return null;
    }

    @Override // 이벤트 클릭 시 각 항목별 상세 보기
    public EventVO view(int event_Id){
        System.out.println("EventServiceImpl.view() 실행중입니다. 즉 서비스까진 넘어온거임");
        return mapper.view(event_Id);
    }

/*


    @Override // 이벤트 글 등록하기
    public int write(EventVO vo){
        return 0;
    }

    @Override  // 이벤트 글 수정하기
    public int update(EventVO vo){
        return 0;
    }

    @Override // 이벤트 글 삭제하기
    public int delete(int event_Id){
        return 0;
    }
     */
    
} 
