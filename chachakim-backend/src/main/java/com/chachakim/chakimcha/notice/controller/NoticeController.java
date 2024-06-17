package com.chachakim.chakimcha.notice.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.chachakim.chakimcha.notice.service.NoticeService;
import com.chachakim.chakimcha.notice.vo.NoticeVO;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;



//@Controller // @Controller: 모델과 뷰를 조작하는 데 사용되는 컨트롤러임을 나타냄
@RestController
@RequestMapping("/api")
public class NoticeController {

    @Autowired // 해당 타입의 빈(bean)을 자동으로 주입하라고 지시함
    @Qualifier("noticeServiceImpl") // NoticeService 중에서도 NoticeServiceImpl라는 이름을 가진 놈으로 주입하셈
    private NoticeService service;

    @GetMapping("/notices") // 공지사항 리스트 보여주기
    public List<NoticeVO> getNoticeList() {
        System.out.println("NoticeController의 getNoticeList 메서드 입니다.");
        System.out.println(service.getNoticeList());
        return service.getNoticeList();
    }

    @GetMapping("/notices/{notice_Id}") // 공지사항 클릭 시 각 항목별 상세 보기
    public NoticeVO getNoticeById(@PathVariable int notice_Id) {
        System.out.println("NoticeController의 getNoticeById 메서드 입니다.");
        int result = service.increaseview(notice_Id); // 클릭 한 공지사항 조회수 1 증가
        System.out.println(service.getNoticeById(notice_Id));
        return service.getNoticeById(notice_Id);
    }

    @PostMapping // 공지사항 글 등록하기
    public void insertNotice(@RequestBody NoticeVO vo) { 
        System.out.println("NoticeController의 insertNotice 메서드 입니다.");
        service.insertNotice(vo);
    }

    @PutMapping("/{notice_Id}")  // 공지사항 글 수정하기
    public void updateNotice(@PathVariable int notice_Id, @RequestBody NoticeVO vo) {
        System.out.println("NoticeController의 updateNotice 메서드 입니다.");
        vo.setNotice_Id(notice_Id);
        service.updateNotice(vo);
    }

    @DeleteMapping("/{notice_Id}") // 공지사항 글 삭제하기
    public void deleteNotice(@PathVariable int notice_Id) {
        System.out.println("NoticeController의 deleteNotice 메서드 입니다.");
        service.deleteNotice(notice_Id);
    }
}
