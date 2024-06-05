package com.chachakim.chakimcha.survey.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chachakim.chakimcha.survey.service.SurveyService;
import com.chachakim.chakimcha.survey.vo.SurveyVO;

import org.springframework.web.bind.annotation.GetMapping;


//@Controller // @Controller: 모델과 뷰를 조작하는 데 사용되는 컨트롤러임을 나타냄
@RestController
@RequestMapping("/survey")
public class SurveyController {

    @Autowired // 해당 타입의 빈(bean)을 자동으로 주입하라고 지시함
    @Qualifier("surveyServiceImpl") // SurveyService 중에서도 SurveyServiceImpl라는 이름을 가진 놈으로 주입하셈
    private SurveyService service;

    @GetMapping("/list")
    public String list(){
        System.out.println("설문조사 리스트입니다.");
        return "home";
    }
    
 // return "redirect:/base/hello.html";
    @GetMapping("/view")
    public SurveyVO view(){
        System.out.println("설문조사 각 항목별 상세보기입니다.");
       SurveyVO vo = service.view(1);
        System.out.println("여긴 실행되냐?");
       if(vo != null){
        System.out.println(vo);
       }
        return vo;
    }

    @GetMapping("/write")
    public String write(){
        System.out.println("설문조사 등록하기 입니다.");
        return null;
    }

    @GetMapping("/update")
    public String update(){
        System.out.println("설문조사 수정하기 입니다.");
        return null;
    }

    @GetMapping("/delete")
    public String delete(){
        System.out.println("설문조사 글 삭제하기 입니다.");
        return null;
    }
}
