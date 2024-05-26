package com.chachakim.chakimcha.user.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chachakim.chakimcha.user.mapper.UserMapper;
import com.chachakim.chakimcha.user.vo.UserVO;

@Service
public class UserServiceImpl implements UserService  {
    
    @Autowired
    private UserMapper mapper;

    @Override  // 공지사항 리스트 보여주기
    public List<UserVO> list(){
        return null;
    }

    @Override // 공지사항 클릭 시 각 항목별 상세 보기
    public UserVO view(int user_Id){
        System.out.println("UserServiceImpl.view() 실행중입니다. 즉 서비스까진 넘어온거임");
        return mapper.view(user_Id);
    }

/*


    @Override // 공지사항 글 등록하기
    public int write(UserVO vo){
        return 0;
    }

    @Override  // 공지사항 글 수정하기
    public int update(UserVO vo){
        return 0;
    }

    @Override // 공지사항 글 삭제하기
    public int delete(int user_Id){
        return 0;
    }
     */
    
} 
