package com.chachakim.chakimcha.survey.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.chachakim.chakimcha.survey.vo.SurveyVO;

@Mapper
@Repository
public interface SurveyMapper {
     // 공지사항 리스트 보여주기
    public List<SurveyVO> list();

    // 공지사항 클릭 시 각 항목별 상세 보기
     public SurveyVO view(int survey_Id);

}
