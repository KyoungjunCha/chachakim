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
    public List<NoticeVO> getNoticeList(){
        System.out.println("NoticeServiceImpl.getNoticeList() 실행중입니다.");
        return mapper.getNoticeList();
    }

    @Override // 공지사항 클릭 시 각 항목별 상세 보기
    public NoticeVO getNoticeById(int notice_Id){
        System.out.println("NoticeServiceImpl.getNoticeById() 실행중입니다.");
        return mapper.getNoticeById(notice_Id);
    }

    @Override // 공지사항 글 등록하기
    public int insertNotice(NoticeVO vo){
        System.out.println("NoticeServiceImpl.insertNotice() 실행중입니다.");
        return mapper.insertNotice(vo);
    }

    @Override  // 공지사항 글 수정하기
    public int updateNotice(NoticeVO vo){
        System.out.println("NoticeServiceImpl.updateNotice() 실행중입니다.");
        return mapper.updateNotice(vo);
    }

    @Override // 공지사항 글 삭제하기
    public int deleteNotice(int notice_Id){
        System.out.println("NoticeServiceImpl.delete() 실행중입니다.");
        return mapper.deleteNotice(notice_Id);
    }

    @Override  // 공지사항 조회수 1 상승
    public int increaseview(int notice_Id){
        System.out.println("NoticeServiceImpl.increaseview() 실행중입니다.");
        return mapper.increaseview(notice_Id);
    }
    
} 
