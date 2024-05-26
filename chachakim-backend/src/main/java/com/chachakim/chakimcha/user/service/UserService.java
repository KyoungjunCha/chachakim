package com.chachakim.chakimcha.user.service;

import java.util.List;

import com.chachakim.chakimcha.user.vo.UserVO;

public interface UserService {

    // 공지사항 리스트 보여주기
    public List<UserVO> list();

    // 공지사항 클릭 시 각 항목별 상세 보기
    public UserVO view(int user_Id);

    /* 
    // 공지사항 글 등록하기
    public int write(UserVO vo);

    // 공지사항 글 수정하기
    public int update(UserVO vo);

    // 공지사항 글 삭제하기
    public int delete(int user_Id);
    */
} 
