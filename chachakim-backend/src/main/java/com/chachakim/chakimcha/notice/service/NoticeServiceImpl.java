package com.chachakim.chakimcha.notice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.chachakim.chakimcha.notice.mapper.NoticeMapper;
import com.chachakim.chakimcha.notice.vo.NoticeVO;
import java.util.List;

@Service("noticeServiceImpl")
public class NoticeServiceImpl implements NoticeService {

    @Autowired
    private NoticeMapper mapper;

    @Override
    public List<NoticeVO> getNoticeList() {
        return mapper.getNoticeList();
    }

    @Override
    public NoticeVO getNoticeById(int noticeId) {
        return mapper.getNoticeById(noticeId);
    }

    @Override
    public void insertNotice(NoticeVO vo) {
        mapper.insertNotice(vo);
    }

    @Override
    public void updateNotice(NoticeVO vo) {
        mapper.updateNotice(vo);
    }

    @Override
    public void deleteNotice(int noticeId) {
        mapper.deleteNotice(noticeId);
    }
}
