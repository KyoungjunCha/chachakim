package com.chachakim.chakimcha.event.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chachakim.chakimcha.event.service.EventService;
import com.chachakim.chakimcha.event.vo.EventVO;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;



//@Controller // @Controller: 모델과 뷰를 조작하는 데 사용되는 컨트롤러임을 나타냄
@RestController
@RequestMapping("/events")
public class EventController {

    @Autowired // 해당 타입의 빈(bean)을 자동으로 주입하라고 지시함
    @Qualifier("eventServiceImpl") // EventService 중에서도 EventServiceImpl라는 이름을 가진 놈으로 주입하셈
    private EventService service;

    @GetMapping // 이벤트 리스트 보여주기
    public List<EventVO> getEventList(){
        System.out.println("EventController의 getEventList 메서드입니다.");
        System.out.println(service.getEventList());
        return service.getEventList();
    }

    @GetMapping("/{event_Id}") // 이벤트 클릭 시 각 항목별 상세보기
    public EventVO getEventById(@PathVariable int event_Id){
        System.out.println("EventController의 getEventById 메서드입니다.");
        System.out.println(service.getEventById(event_Id));
        return service.getEventById(event_Id);
    }

    @PostMapping // 이벤트 글 등록하기
    public void insertEvent(@RequestBody EventVO vo){
        System.out.println("EventController의 insertEvent 메서드입니다.");
        System.out.println(vo);
        int result = service.insertEvent(vo);

        if(result != 1) System.out.println("이벤트 글 등록 실패");
        else System.out.println("이벤트 글 등록 성공");
    }

    @PutMapping("/{event_Id}") // 이벤트 글 수정하기
    public void updateEvent(@PathVariable int event_Id, @RequestBody EventVO vo) {
        System.out.println("EventController의 updateEvent 메서드입니다.");
        vo.setEvent_Id(event_Id);
        int result = service.updateEvent(vo);

        if(result != 1) System.out.println("이벤트 글 수정 실패");
        else System.out.println("이벤트 글 수정 성공");
    }

    @DeleteMapping("/{event_Id}") // 이벤트 글 삭제하기
    public void deleteEvent(@PathVariable int event_Id){
        System.out.println("EventController의 deleteEvent 메서드입니다.");
        int result = service.deleteEvent(event_Id);

        if(result != 1) System.out.println("이벤트 글 삭제 실패");
        else System.out.println("이벤트 글 삭제 성공");
    }

} // End of Class EventController