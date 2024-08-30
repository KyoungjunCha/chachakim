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

public interface UserService{
// public interface UserService extends UserDetailsService{
    public List<UserVO> list(); // 유저 리스트 조회
    public UserVO view(int user_Id); // 특정 유저 조회
    
    // public UserVO login(String id, String password); // 로그인
    // public int write(UserVO vo); // 유저 등록
    // public UserVO join(
    //  String id,
    //  String password,
    //  String email,
    //  String nickname, // 유저 닉네임
    //  String tel_number, // 유저 전화번호
    //  String address, // 유저 주소
    //  String address_detail, // 유저 상세주소
    //  String profile_image, // 유저 이미지
    //  String gender, // 유저 성별
    //  String birth, // 유저 생년월일
    //  String permission); // 유저 권한 레벨)
    public UserVO join(UserVO user);
};