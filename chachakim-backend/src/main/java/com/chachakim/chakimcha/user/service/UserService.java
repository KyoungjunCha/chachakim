// 24.07.10 13:27 userDetailService 사용
// package com.chachakim.chakimcha.user.service;

// import java.util.List;

// import org.springframework.security.core.userdetails.UserDetailsService;

// import com.chachakim.chakimcha.user.vo.UserVO;

// public interface UserService extends UserDetailsService {
//     public List<UserVO> list(); // 유저 리스트 조회
//     public UserVO view(int user_Id); // 특정 유저 조회
//     public UserVO login(String id, String password); // 로그인
//     public int write(UserVO vo); // 유저 등록
// }



package com.chachakim.chakimcha.user.service;

import java.util.List;

import org.springframework.security.core.userdetails.UserDetailsService;

import com.chachakim.chakimcha.user.vo.UserVO;

public interface UserService {
    public List<UserVO> list(); // 유저 리스트 조회
    public UserVO view(int user_Id); // 특정 유저 조회
    public UserVO login(String id, String password); // 로그인
    public int write(UserVO vo); // 유저 등록
}
