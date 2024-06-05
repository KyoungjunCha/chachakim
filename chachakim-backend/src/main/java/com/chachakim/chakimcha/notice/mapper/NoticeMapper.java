package com.chachakim.chakimcha.notice.mapper;

import com.chachakim.chakimcha.notice.vo.NoticeVO;
import org.apache.ibatis.annotations.Mapper;
import java.util.List;

@Mapper
public interface NoticeMapper {
    List<NoticeVO> getNoticeList();
    NoticeVO getNoticeById(int noticeId);
    void insertNotice(NoticeVO vo);
    void updateNotice(NoticeVO vo);
    void deleteNotice(int noticeId);
}
