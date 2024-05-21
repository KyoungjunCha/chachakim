package com.chachakim.chakimcha.notice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.chachakim.chakimcha.notice.service.NoticeService;
import com.chachakim.chakimcha.notice.vo.NoticeVO;

import org.springframework.web.bind.annotation.GetMapping;


@Controller // @Controller: 모델과 뷰를 조작하는 데 사용되는 컨트롤러임을 나타냄
@RequestMapping("/notice")
public class NoticeController {

    @Autowired // 해당 타입의 빈(bean)을 자동으로 주입하라고 지시함
    @Qualifier("noticeServiceImpl") // NoticeService 중에서도 NoticeServiceImpl라는 이름을 가진 놈으로 주입하셈
    private NoticeService service;

    @GetMapping("/list")
    public String list(){
        System.out.println("공지사항 리스트입니다.");
        return "home";
    }
 // return "redirect:/base/hello.html";
    @GetMapping("/view")
    public String view(){
        System.out.println("공지사항 각 항목별 상세보기입니다.");
       NoticeVO vo = service.view(1);
        System.out.println("여긴 실행되냐?");
       if(vo != null){
        System.out.println(vo);
       }
        

        return null;
    }

    @GetMapping("/write")
    public String write(){
        System.out.println("공지사항 등록하기 입니다.");
        return null;
    }

    @GetMapping("/update")
    public String update(){
        System.out.println("공지사항 수정하기 입니다.");
        return null;
    }

    @GetMapping("/delete")
    public String delete(){
        System.out.println("공지사항 글 삭제하기 입니다.");
        return null;
    }
}
