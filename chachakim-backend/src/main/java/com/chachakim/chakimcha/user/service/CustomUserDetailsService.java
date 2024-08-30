package com.chachakim.chakimcha.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.chachakim.chakimcha.user.mapper.UserMapper;
import com.chachakim.chakimcha.user.vo.CustomUserDetails;
import com.chachakim.chakimcha.user.vo.UserVO;

@Service
public class CustomUserDetailsService implements UserDetailsService { // 클래스명 오타 수정

    @Autowired
    private UserMapper userMapper;

    @Override
    public UserDetails loadUserByUsername(String id) throws UsernameNotFoundException {
        
        UserVO userData = userMapper.findByUsername(id);
        
        if (userData != null) {
            return new CustomUserDetails(userData);
        } else {
            throw new UsernameNotFoundException("유저 찾을 수 없음: " + id);
        }
    }
}
