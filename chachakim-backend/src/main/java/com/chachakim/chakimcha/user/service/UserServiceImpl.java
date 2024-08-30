package com.chachakim.chakimcha.user.service;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.chachakim.chakimcha.user.mapper.UserMapper;
import com.chachakim.chakimcha.user.vo.UserVO;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper mapper;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Override
    public List<UserVO> list(){
        return mapper.list();
    }

    @Override
    public UserVO view(int user_Id){
        return mapper.view(user_Id);
    }


    //0717
    // 사용자 이름으로 사용자 정보를 로드하는 메서드
    // @Override
    // public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    //     System.out.println("UserServiceImpl loadUserByUsername 호출 : " + username);
    //     UserVO user = mapper.login(Collections.singletonMap("id", username));
    //     if (user == null) {
    //         System.out.println("UserServiceImpl 사용자를 못찾음" + username);
    //         throw new UsernameNotFoundException("UserServiceImpl 유저 이름 찾을 수 없음: " + username);
    //     }
    //     System.out.println("UserServiceImpl 사용자 찾음 : " + user);
    //     return org.springframework.security.core.userdetails.User.withUsername(user.getId())
    //             .password(user.getPassword())
    //             .authorities("USER").build();
    // }



    //0817
    // @Override
    // public UserVO login(String id, String password){
    //     System.out.println("UserServiceImpl: 로그인 요청 데이터: " + id);
    //     UserVO user = mapper.login(Map.of("id", id, "password", password)); // 기존 login 메서드 사용
    //     if (user != null && passwordEncoder.matches(password,user.getPassword())) { // 평문 비밀번호 비교
    //         System.out.println("UserServiceImpl: 로그인 성공: " + user.getId());
    //         return user;
    //     } else {
    //         System.out.println("UserServiceImpl: 로그인 실패");
    //         return null;
    //     }
    // }

    // 회원가입 0813
    @Override
    public UserVO join(UserVO user) {
        System.out.println("UserServiceImpl : 회원가입 요청 데이터 " + user.getId());
   
        // 이메일 중복확인
        int emailCount = mapper.countByEmail(user.getEmail());
        if(emailCount>0){
            System.out.println("이미 존재하는 이메일" + user.getEmail());
            return null;
        }

        // 비밀번호 암호화
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword); // 암호화된 비밀번호 저장

        // 데이터베이스에 저장
        int result = mapper.join(user);

        if(result > 0) {
            System.out.println("회원가입 성공: " + user.getId());
            return user;
        } else {
            System.out.println("회원가입 실패: " + user.getId());
            return null;
        }
    }
    
    // 24.07.10 13:27 임시 로그인 과정
    //    @Override
    // public UserVO login(String id, String password) {
    //     System.out.println("UserServiceImpl: 로그인 요청 데이터: " + id);
    //     Map<String, String> params = new HashMap<>();
    //     params.put("id", id);
    //     params.put("password", password);
    //     UserVO user = mapper.login(params);
    //     if (user != null && password.equals(user.getPassword())) { // 평문 비밀번호 비교
    //         System.out.println("UserServiceImpl: 로그인 성공: " + user.getId());
    //         return user;
    //     } else {
    //         System.out.println("UserServiceImpl: 로그인 실패");
    //         return null;
    //     }
    // }
    // @Override
    // public UserDetails loadUserByUsername(String id) throws UsernameNotFoundException {
    //     System.out.println("impl 인데 돌아감?");
    //     UserVO user = mapper.login(Map.of("id", id, "password", "")); // 기존 login 메서드 사용
    //     if (user == null) {
    //         System.out.println("왜 이리로?: ");
    //         System.out.println(id);
    //         throw new UsernameNotFoundException("User not found");
    //     }
    //     return org.springframework.security.core.userdetails.User.withUsername(user.getId())
    //         .password(user.getPassword())
    //         .roles("USER")
    //         .build();
    // }



    
}
