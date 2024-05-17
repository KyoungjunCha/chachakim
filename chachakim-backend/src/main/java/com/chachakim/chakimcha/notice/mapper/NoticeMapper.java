package com.chachakim.chakimcha.notice.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.chachakim.chakimcha.notice.vo.NoticeVO;

@Repository
public interface NoticeMapper {
     // 공지사항 리스트 보여주기
    public List<NoticeVO> list();

    // 공지사항 클릭 시 각 항목별 상세 보기
     public NoticeVO view(int noticeId);
    
}
