package com.chachakim.chakimcha.notice.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.chachakim.chakimcha.notice.service.NoticeService;
import com.chachakim.chakimcha.notice.vo.NoticeVO;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;



//@Controller // @Controller: 모델과 뷰를 조작하는 데 사용되는 컨트롤러임을 나타냄
@RestController
@RequestMapping("/notice")
public class NoticeController {

    @Autowired // 해당 타입의 빈(bean)을 자동으로 주입하라고 지시함
    @Qualifier("noticeServiceImpl") // NoticeService 중에서도 NoticeServiceImpl라는 이름을 가진 놈으로 주입하셈
    private NoticeService service;

    @GetMapping("/list")
    public List<NoticeVO> list(){
        System.out.println("NoticeController의 list 메서드 입니다.");

        List<NoticeVO> vo = service.list(); // 모든 공지사항을 리스트 형태로 가져오기
        return vo;
    }
    
    @GetMapping("/view")
    public NoticeVO view(int notice_Id){
        System.out.println("NoticeController의 view 메서드 입니다.");

       int result = service.increaseview(notice_Id); // 클릭 한 공지사항 조회수 1 증가
       NoticeVO vo = service.view(notice_Id); // 클릭한 공지사항 상세정보 가져오기
       return vo;
    }

    @PostMapping("/write")
    public int write(NoticeVO vo){
        System.out.println("NoticeController의 write 메서드 입니다.");

        int result = service.write(vo); // 공지사항에 새 글을 등록하기
        return result;
    }

    @PostMapping("/update")
    public int update(NoticeVO vo){
        System.out.println("NoticeController의 update 메서드 입니다.");

        int result = service.update(vo); // 이미 존재하는 공지사항의 글을 수정하기
        return result;
    }

    @GetMapping("/delete")
    public int delete(int notice_Id){
        System.out.println("NoticeController의 delete 메서드 입니다.");

        int result = service.delete(notice_Id); // 이미 존재하는 공지사항을 삭제하기
        return result;
    }

    /* 단일 요청이 없으므로 굳이 필요가 없음
    @GetMapping("/increaseview")
    public int increaseview(int notice_Id){
        System.out.println("NoticeController의 increaseview 메서드 입니다.");
        
        int result = service.increaseview(notice_Id);
        return result;
    }
     */
}
