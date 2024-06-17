package com.chachakim.chakimcha.event.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.chachakim.chakimcha.event.vo.EventVO;

@Mapper
@Repository
public interface EventMapper {
     // 공지사항 리스트 보여주기
    public List<EventVO> list();

    // 공지사항 클릭 시 각 항목별 상세 보기
     public EventVO view(int event_Id);

}
