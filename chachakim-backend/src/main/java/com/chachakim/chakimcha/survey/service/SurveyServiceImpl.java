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

    @Override  // 공지사항 리스트 보여주기
    public List<SurveyVO> list(){
        return null;
    }

    @Override // 공지사항 클릭 시 각 항목별 상세 보기
    public SurveyVO view(int survey_Id){
        System.out.println("SurveyServiceImpl.view() 실행중입니다. 즉 서비스까진 넘어온거임");
        return mapper.view(survey_Id);
    }

/*


    @Override // 공지사항 글 등록하기
    public int write(SurveyVO vo){
        return 0;
    }

    @Override  // 공지사항 글 수정하기
    public int update(SurveyVO vo){
        return 0;
    }

    @Override // 공지사항 글 삭제하기
    public int delete(int survey_Id){
        return 0;
    }
     */
    
} 
