package com.chachakim.chakimcha.notice.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.chachakim.chakimcha.notice.vo.NoticeVO;

@Mapper
@Repository
public interface NoticeMapper {
    // 공지사항 리스트 보여주기
     public List<NoticeVO> list();

    // 공지사항 클릭 시 각 항목별 상세 보기
     public NoticeVO view(int notice_Id);

    // 공지사항 글 등록하기
     public int write(NoticeVO vo);

    // 공지사항 글 수정하기
    public int update(NoticeVO vo);

    // 공지사항 글 삭제하기
    public int delete(int notice_Id);

    // 공지사항 조회수 1 상승
    public int increaseview(int notice_Id);

}
