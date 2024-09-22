package com.chachakim.chakimcha.survey.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chachakim.chakimcha.survey.mapper.SurveyMapper;
import com.chachakim.chakimcha.survey.vo.SurveyVO;

@Service
public class SurveyServiceImpl implements SurveyService  {
    
    @Autowired
    private SurveyMapper mapper;

    @Override  // 설문조사 리스트 보여주기
    public List<SurveyVO> getSurveyList(){
        System.out.println("SurveyServiceImpl.getSurveyList() 실행중입니다.");
        return mapper.getSurveyList();
    }

    @Override // 설문조사 클릭 시 각 항목별 상세 보기
    public SurveyVO getSurveyById(int survey_Id){
        System.out.println("SurveyServiceImpl.getSurveyById() 실행중입니다.");
        return mapper.getSurveyById(survey_Id);
    }

    @Override // 설문조사 글 등록하기
    public int insertSurvey(SurveyVO vo){
        System.out.println("SurveyServiceImpl.insertSurvey() 실행중입니다.");
        return mapper.insertSurvey(vo);
    }

    @Override  // 설문조사 글 수정하기
    public int updateSurvey(SurveyVO vo){
        System.out.println("SurveyServiceImpl.updateSurvey() 실행중입니다.");
        return mapper.updateSurvey(vo);
    }

    @Override // 설문조사 글 삭제하기
    public int deleteSurvey(int survey_Id){
        System.out.println("SurveyServiceImpl.delete() 실행중입니다.");
        return mapper.deleteSurvey(survey_Id);
    }
} 
