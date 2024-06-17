package com.chachakim.chakimcha.survey.service;

import java.util.List;

import com.chachakim.chakimcha.survey.vo.SurveyVO;

public interface SurveyService {

    // 공지사항 리스트 보여주기
    public List<SurveyVO> list();

    // 공지사항 클릭 시 각 항목별 상세 보기
    public SurveyVO view(int survey_Id);

    /* 
    // 공지사항 글 등록하기
    public int write(SurveyVO vo);

    // 공지사항 글 수정하기
    public int update(SurveyVO vo);

    // 공지사항 글 삭제하기
    public int delete(int survey_Id);
    */
} 
