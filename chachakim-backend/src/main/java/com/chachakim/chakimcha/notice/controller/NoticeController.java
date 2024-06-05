package com.chachakim.chakimcha.notice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import com.chachakim.chakimcha.notice.service.NoticeService;
import com.chachakim.chakimcha.notice.vo.NoticeVO;

import java.util.List;

@RestController
@RequestMapping("/api")
public class NoticeController {

    @Autowired
    @Qualifier("noticeServiceImpl")
    private NoticeService service;

    @GetMapping("/notices")
    public List<NoticeVO> getNoticeList() {
        System.out.println("sibal");
        System.out.println(service.getNoticeList());
        return service.getNoticeList();
    }

    @GetMapping("/notices/{noticeId}")
    public NoticeVO getNoticeById(@PathVariable int noticeId) {
        System.out.println(service.getNoticeById(noticeId));
        return service.getNoticeById(noticeId);
    }

    @PostMapping
    public void insertNotice(@RequestBody NoticeVO vo) {
        service.insertNotice(vo);
    }

    @PutMapping("/{noticeId}")
    public void updateNotice(@PathVariable int noticeId, @RequestBody NoticeVO vo) {
        vo.setNoticeId(noticeId);
        service.updateNotice(vo);
    }

    @DeleteMapping("/{noticeId}")
    public void deleteNotice(@PathVariable int noticeId) {
        service.deleteNotice(noticeId);
    }
}
