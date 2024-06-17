package com.chachakim.chakimcha.event.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chachakim.chakimcha.event.service.EventService;
import com.chachakim.chakimcha.event.vo.EventVO;

import org.springframework.web.bind.annotation.GetMapping;


//@Controller // @Controller: 모델과 뷰를 조작하는 데 사용되는 컨트롤러임을 나타냄
@RestController
@RequestMapping("/event")
public class EventController {

    @Autowired // 해당 타입의 빈(bean)을 자동으로 주입하라고 지시함
    @Qualifier("eventServiceImpl") // EventService 중에서도 EventServiceImpl라는 이름을 가진 놈으로 주입하셈
    private EventService service;

    @GetMapping("/list")
    public String list(){
        System.out.println("이벤트 리스트입니다.");
        return "home";
    }
    
 // return "redirect:/base/hello.html";
    @GetMapping("/view")
    public EventVO view(){
        System.out.println("이벤트 각 항목별 상세보기입니다.");
       EventVO vo = service.view(1);
        System.out.println("여긴 실행되냐?");
       if(vo != null){
        System.out.println(vo);
       }
        return vo;
    }

    @GetMapping("/write")
    public String write(){
        System.out.println("이벤트 등록하기 입니다.");
        return null;
    }

    @GetMapping("/update")
    public String update(){
        System.out.println("이벤트 수정하기 입니다.");
        return null;
    }

    @GetMapping("/delete")
    public String delete(){
        System.out.println("이벤트 글 삭제하기 입니다.");
        return null;
    }
}
