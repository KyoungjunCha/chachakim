package com.chachakim.chakimcha.survey.service;

import java.util.List;

import com.chachakim.chakimcha.survey.vo.SurveyVO;

public interface SurveyService {

    // 설문조사 리스트 보여주기
    public List<SurveyVO> getSurveyList();

    // 설문조사 클릭 시 각 항목별 상세 보기
    public SurveyVO getSurveyById(int survey_Id);

    // 설문조사 글 등록하기
    public int insertSurvey(SurveyVO vo);

    // 설문조사 글 수정하기
    public int updateSurvey(SurveyVO vo);

    // 설문조사 글 삭제하기
    public int deleteSurvey(int survey_Id);
} 
