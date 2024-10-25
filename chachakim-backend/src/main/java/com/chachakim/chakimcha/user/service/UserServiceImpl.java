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

    
}
