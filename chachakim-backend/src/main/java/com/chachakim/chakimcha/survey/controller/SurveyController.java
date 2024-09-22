package com.chachakim.chakimcha.survey.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.chachakim.chakimcha.survey.vo.SurveyVO;
import com.chachakim.chakimcha.survey.service.SurveyService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;



//@Controller // @Controller: 모델과 뷰를 조작하는 데 사용되는 컨트롤러임을 나타냄
@RestController
@RequestMapping("/surveys")
public class SurveyController {

    @Autowired // 해당 타입의 빈(bean)을 자동으로 주입하라고 지시함
    @Qualifier("surveyServiceImpl") // SurveyService 중에서도 SurveyServiceImpl라는 이름을 가진 놈으로 주입하셈
    private SurveyService service;

    @GetMapping // 설문조사 리스트 보여주기
    public List<SurveyVO> getSurveyList() {
        System.out.println("SurveyController의 getSurveyList 메서드 입니다.");
        System.out.println(service.getSurveyList());
        return service.getSurveyList();
    }

    @GetMapping("/{survey_Id}") // 설문조사 클릭 시 각 항목별 상세 보기
    public SurveyVO getSurveyById(@PathVariable int survey_Id) {
        System.out.println("SurveyController의 getSurveyById 메서드 입니다.");
        System.out.println(service.getSurveyById(survey_Id));
        return service.getSurveyById(survey_Id);
    }

    @PostMapping // 설문조사 글 등록하기
    public void insertSurvey(@RequestBody SurveyVO vo) { 
        System.out.println("SurveyController의 insertSurvey 메서드 입니다.");
        System.out.println(vo);
        int result = service.insertSurvey(vo);
        
        if(result != 1) System.out.println("설문조사 글 등록 실패");
        else System.out.println("설문조사 글 등록 성공");
    }

    @PutMapping("/{survey_Id}")  // 설문조사 글 수정하기
    public void updateSurvey(@PathVariable int survey_Id, @RequestBody SurveyVO vo) {
        System.out.println("SurveyController의 updateSurvey 메서드 입니다.");
        vo.setSurvey_Id(survey_Id);
        int result = service.updateSurvey(vo);

        if(result != 1) System.out.println("설문조사 글 수정 실패");
        else System.out.println("설문조사 글 수정 성공");
    }

    @DeleteMapping("/{survey_Id}") // 설문조사 글 삭제하기
    public void deleteSurvey(@PathVariable int survey_Id) {
        System.out.println("SurveyController의 deleteSurvey 메서드 입니다.");
        int result = service.deleteSurvey(survey_Id);
        
        if(result != 1) System.out.println("설문조사 글 삭제 실패");
        else System.out.println("설문조사 글 삭제 성공");
    }
} // End of Class SurveyController
