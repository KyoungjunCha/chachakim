package com.chachakim.chakimcha.notice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chachakim.chakimcha.notice.mapper.NoticeMapper;
import com.chachakim.chakimcha.notice.vo.NoticeVO;

@Service
public class NoticeServiceImpl implements NoticeService  {
    
    @Autowired
    private NoticeMapper mapper;

    @Override  // 공지사항 리스트 보여주기
    public List<NoticeVO> list(){
        return null;
    }

    @Override // 공지사항 클릭 시 각 항목별 상세 보기
    public NoticeVO view(int notice_Id){
        System.out.println("NoticeServiceImpl.view() 실행중입니다. 즉 서비스까진 넘어온거임");
        return mapper.view(notice_Id);
    }

/*


    @Override // 공지사항 글 등록하기
    public int write(NoticeVO vo){
        return 0;
    }

    @Override  // 공지사항 글 수정하기
    public int update(NoticeVO vo){
        return 0;
    }

    @Override // 공지사항 글 삭제하기
    public int delete(int notice_Id){
        return 0;
    }
     */
    
} 
