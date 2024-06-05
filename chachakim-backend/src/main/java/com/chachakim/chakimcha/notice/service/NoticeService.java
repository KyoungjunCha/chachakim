package com.chachakim.chakimcha.notice.service;

import com.chachakim.chakimcha.notice.vo.NoticeVO;
import java.util.List;

public interface NoticeService {
    List<NoticeVO> getNoticeList();
    NoticeVO getNoticeById(int noticeId);
    void insertNotice(NoticeVO vo);
    void updateNotice(NoticeVO vo);
    void deleteNotice(int noticeId);
}
